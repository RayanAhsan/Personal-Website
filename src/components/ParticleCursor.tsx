import React, { useEffect, useRef } from 'react';

const ParticleCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    let particles: HTMLDivElement[] = [];
    
    // Create particle trail elements
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = `particle-cursor`;
      particle.style.position = 'fixed';
      particle.style.width = `${8 - i}px`;
      particle.style.height = `${8 - i}px`;
      particle.style.background = 'var(--particle-primary)';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '9998';
      particle.style.opacity = `${0.8 - i * 0.1}`;
      particle.style.mixBlendMode = 'difference';
      document.body.appendChild(particle);
      particles.push(particle);
    }
    
    particlesRef.current = particles;
    
    let mouseX = 0;
    let mouseY = 0;
    let positions = Array(particles.length).fill({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (cursor) {
        cursor.style.left = `${mouseX - 5}px`;
        cursor.style.top = `${mouseY - 5}px`;
      }
    };

    const animateParticles = () => {
      let targetX = mouseX;
      let targetY = mouseY;
      
      for (let i = 0; i < particles.length; i++) {
        positions[i] = {
          x: positions[i].x + (targetX - positions[i].x) * 0.3,
          y: positions[i].y + (targetY - positions[i].y) * 0.3
        };
        
        particles[i].style.left = `${positions[i].x - (8 - i) / 2}px`;
        particles[i].style.top = `${positions[i].y - (8 - i) / 2}px`;
        
        targetX = positions[i].x;
        targetY = positions[i].y;
      }
      
      requestAnimationFrame(animateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return <div ref={cursorRef} className="particle-cursor" />;
};

export default ParticleCursor;