import React from 'react';
import { motion, useDragControls, PanInfo } from 'framer-motion';

// Swipeable container for mobile
export const SwipeableContainer = ({ 
  children, 
  onSwipeLeft, 
  onSwipeRight, 
  onSwipeUp, 
  onSwipeDown,
  className = "",
  threshold = 50
}) => {
  const dragControls = useDragControls();

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    
    // Determine swipe direction based on offset and velocity
    if (Math.abs(offset.x) > Math.abs(offset.y)) {
      // Horizontal swipe
      if (offset.x > threshold && velocity.x > 0) {
        onSwipeRight && onSwipeRight();
      } else if (offset.x < -threshold && velocity.x < 0) {
        onSwipeLeft && onSwipeLeft();
      }
    } else {
      // Vertical swipe
      if (offset.y > threshold && velocity.y > 0) {
        onSwipeDown && onSwipeDown();
      } else if (offset.y < -threshold && velocity.y < 0) {
        onSwipeUp && onSwipeUp();
      }
    }
  };

  return (
    <motion.div
      className={className}
      drag
      dragControls={dragControls}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 0.95 }}
      style={{ cursor: 'grab' }}
    >
      {children}
    </motion.div>
  );
};

// Pull to refresh component
export const PullToRefresh = ({ onRefresh, children, className = "" }) => {
  const [isPulling, setIsPulling] = React.useState(false);
  const [pullDistance, setPullDistance] = React.useState(0);

  const handleDrag = (event, info) => {
    if (info.offset.y > 0) {
      setPullDistance(info.offset.y);
      setIsPulling(info.offset.y > 100);
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100) {
      onRefresh && onRefresh();
    }
    setPullDistance(0);
    setIsPulling(false);
  };

  return (
    <div className={`pull-to-refresh ${className}`}>
      {/* Pull indicator */}
      <motion.div
        className="pull-indicator"
        style={{
          opacity: pullDistance > 0 ? Math.min(pullDistance / 100, 1) : 0,
          transform: `translateY(${Math.min(pullDistance * 0.5, 50)}px)`
        }}
      >
        <motion.div
          className="refresh-icon"
          animate={{ rotate: isPulling ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          🔄
        </motion.div>
        <span>{isPulling ? 'Release to refresh' : 'Pull to refresh'}</span>
      </motion.div>

      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.3}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="pullable-content"
      >
        {children}
      </motion.div>

      <style jsx>{`
        .pull-to-refresh {
          position: relative;
          overflow: hidden;
        }

        .pull-indicator {
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          z-index: 100;
        }

        .refresh-icon {
          font-size: 1.5rem;
        }

        .pullable-content {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

// Touch ripple effect
export const TouchRipple = ({ children, className = "" }) => {
  const [ripples, setRipples] = React.useState([]);

  const handleTouch = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.touches[0].clientX - rect.left;
    const y = event.touches[0].clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <motion.div
      className={`touch-ripple ${className}`}
      onTouchStart={handleTouch}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {children}
      
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="ripple-effect"
          initial={{
            scale: 0,
            opacity: 1,
            x: ripple.x,
            y: ripple.y
          }}
          animate={{
            scale: 4,
            opacity: 0
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'rgba(74, 144, 226, 0.6)',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </motion.div>
  );
};

// Magnetic button for mobile
export const MagneticButton = ({ 
  children, 
  onClick, 
  className = "",
  strength = 0.3 
}) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleTouchMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = event.touches[0].clientX - centerX;
    const y = event.touches[0].clientY - centerY;

    setPosition({
      x: x * strength,
      y: y * strength
    });
  };

  const handleTouchEnd = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      className={`magnetic-button ${className}`}
      onClick={onClick}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        padding: '1rem 2rem',
        borderRadius: '12px',
        fontWeight: '600',
        cursor: 'pointer',
        touchAction: 'manipulation'
      }}
    >
      {children}
    </motion.button>
  );
};

// Parallax scroll component for mobile
export const MobileParallax = ({ children, speed = 0.5, className = "" }) => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </motion.div>
  );
};