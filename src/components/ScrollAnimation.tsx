import React, { useEffect, useRef, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'visible' : ''} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;