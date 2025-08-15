import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners for cursor interactions
    const addCursorListeners = () => {
      // Project cards
      const projectCards = document.querySelectorAll('.project-card, .nav-link, .btn-primary, .btn-secondary');
      projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => setCursorVariant('project'));
        card.addEventListener('mouseleave', () => setCursorVariant('default'));
      });

      // Text elements
      const textElements = document.querySelectorAll('h1, h2, h3, p, a');
      textElements.forEach(element => {
        element.addEventListener('mouseenter', () => setCursorVariant('text'));
        element.addEventListener('mouseleave', () => setCursorVariant('default'));
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Delay to ensure DOM is ready
    setTimeout(addCursorListeners, 500);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(74, 144, 226, 0.15)',
      border: '1px solid rgba(74, 144, 226, 0.4)'
    },
    project: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(74, 144, 226, 0.1)',
      border: '2px solid rgba(74, 144, 226, 0.6)'
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 0.8,
      backgroundColor: 'rgba(74, 144, 226, 0.2)',
      border: '1px solid rgba(74, 144, 226, 0.5)'
    }
  };

  // Hide on mobile devices
  const isMobile = window.innerWidth <= 768;
  if (isMobile) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={cursorVariant}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'normal',
          opacity: isVisible ? 0.8 : 0
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.3
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-color)',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 0.8 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      <style jsx>{`
        /* Keep normal cursor visible - just add custom effects alongside */
        @media (max-width: 768px) {
          .custom-cursor,
          .cursor-trail {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;