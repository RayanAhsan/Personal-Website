import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth) * 100;
      const yPercent = (clientY / innerHeight) * 100;
      
      backgroundRef.current.style.background = `
        radial-gradient(circle at ${xPercent}% ${yPercent}%, 
          var(--tile-hover) 0%, 
          var(--tile-base) 50%, 
          transparent 100%),
        linear-gradient(90deg, var(--tile-base) 1px, transparent 1px),
        linear-gradient(180deg, var(--tile-base) 1px, transparent 1px)
      `;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={backgroundRef} className="tile-background" />;
};

export default InteractiveBackground;