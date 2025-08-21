import React, { useEffect, useRef, useState } from 'react';

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tiles, setTiles] = useState<Array<{ id: string; x: number; y: number; opacity: number }>>([]);
  const tilesRef = useRef(new Map());
  const animationFrameRef = useRef<number>();

  const TILE_SIZE = 60;
  const FADE_DISTANCE = 150;
  const MAX_OPACITY = 0.3;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      // Fade out all tiles when mouse leaves
      setTiles(prevTiles => 
        prevTiles.map(tile => ({ ...tile, opacity: 0 }))
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const updateTiles = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const startX = Math.floor((mousePosition.x - FADE_DISTANCE) / TILE_SIZE) * TILE_SIZE;
      const endX = Math.ceil((mousePosition.x + FADE_DISTANCE) / TILE_SIZE) * TILE_SIZE;
      const startY = Math.floor((mousePosition.y - FADE_DISTANCE) / TILE_SIZE) * TILE_SIZE;
      const endY = Math.ceil((mousePosition.y + FADE_DISTANCE) / TILE_SIZE) * TILE_SIZE;

      const newTiles = [];
      const currentTileIds = new Set();

      for (let x = startX; x <= endX; x += TILE_SIZE) {
        for (let y = startY; y <= endY; y += TILE_SIZE) {
          const tileId = `${x}-${y}`;
          currentTileIds.add(tileId);
          
          // Calculate distance from mouse to tile center
          const tileCenterX = x + TILE_SIZE / 2;
          const tileCenterY = y + TILE_SIZE / 2;
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - tileCenterX, 2) + 
            Math.pow(mousePosition.y - tileCenterY, 2)
          );

          // Calculate opacity based on distance
          let opacity = 0;
          if (distance <= FADE_DISTANCE) {
            opacity = MAX_OPACITY * (1 - distance / FADE_DISTANCE);
          }

          newTiles.push({
            id: tileId,
            x,
            y,
            opacity: Math.max(0, opacity)
          });
        }
      }

      setTiles(prevTiles => {
        // Keep existing tiles that are still in range, update their opacity
        const updatedTiles = prevTiles.map(prevTile => {
          const newTile = newTiles.find(tile => tile.id === prevTile.id);
          return newTile || { ...prevTile, opacity: 0 };
        });

        // Add new tiles that weren't in the previous set
        const existingIds = new Set(prevTiles.map(tile => tile.id));
        const tilesToAdd = newTiles.filter(tile => !existingIds.has(tile.id));

        return [...updatedTiles, ...tilesToAdd];
      });

      animationFrameRef.current = requestAnimationFrame(updateTiles);
    };

    updateTiles();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  // Clean up tiles with 0 opacity after animation
  useEffect(() => {
    const cleanupTimer = setTimeout(() => {
      setTiles(prevTiles => prevTiles.filter(tile => tile.opacity > 0.01));
    }, 500);

    return () => clearTimeout(cleanupTimer);
  }, [tiles]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
    >
      {tiles.map(tile => (
        <div
          key={tile.id}
          className="absolute border transition-opacity duration-300 ease-out"
          style={{
            left: tile.x,
            top: tile.y,
            width: TILE_SIZE,
            height: TILE_SIZE,
            borderColor: `hsla(213, 94%, 68%, ${tile.opacity})`,
            backgroundColor: `hsla(213, 94%, 68%, ${tile.opacity * 0.1})`,
            opacity: tile.opacity > 0 ? 1 : 0,
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveBackground;