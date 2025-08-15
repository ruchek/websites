import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = ({ particleCount = 50, className = "" }) => {
  const containerRef = useRef(null);

  // Generate random particle data
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div 
      ref={containerRef}
      className={`particle-background ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        contain: 'layout style paint'
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(74, 144, 226, 0.6) 0%, rgba(74, 144, 226, 0.2) 50%, transparent 100%)'
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            opacity: [0, 1, 0.5, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Add some connecting lines between particles */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.1
        }}
      >
        {particles.slice(0, 10).map((particle, index) => (
          <motion.line
            key={`line-${index}`}
            x1={`${particle.x}%`}
            y1={`${particle.y}%`}
            x2={`${particles[(index + 1) % 10].x}%`}
            y2={`${particles[(index + 1) % 10].y}%`}
            stroke="rgba(74, 144, 226, 0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ParticleBackground;