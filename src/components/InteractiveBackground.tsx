import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;
      
      const { clientX, clientY } = e;
      
      // Create tiles only around cursor position with light blue outline
      backgroundRef.current.style.background = `
        radial-gradient(circle 150px at ${clientX}px ${clientY}px, 
          hsla(213, 94%, 68%, 0.1) 0%, 
          transparent 70%),
        linear-gradient(90deg, hsla(213, 94%, 68%, 0.2) 1px, transparent 1px),
        linear-gradient(180deg, hsla(213, 94%, 68%, 0.2) 1px, transparent 1px)
      `;
      backgroundRef.current.style.backgroundSize = '60px 60px';
      backgroundRef.current.style.backgroundPosition = `${clientX % 60}px ${clientY % 60}px`;
    };

    const handleMouseLeave = () => {
      if (!backgroundRef.current) return;
      // Fade out tiles when cursor leaves
      backgroundRef.current.style.background = 'transparent';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={backgroundRef} className="tile-background" />;
};

export default InteractiveBackground;