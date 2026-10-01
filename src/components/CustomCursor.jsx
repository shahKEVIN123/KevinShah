import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isFinePointer = window.matchMedia('(pointer: fine)').matches;
      setIsTouchDevice(hasTouch && !isFinePointer);
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const cursorTarget = target.closest('[data-cursor]');

      if (cursorTarget) {
        const customCursor = cursorTarget.getAttribute('data-cursor');
        if (customCursor === 'view') {
          setCursorType('view');
          setCursorText('VIEW');
          return;
        }
        if (customCursor === 'open') {
          setCursorType('open');
          setCursorText('OPEN');
          return;
        }
      }

      // Button interaction
      const buttonTarget = target.closest('button, [role="button"], .magnetic-btn');
      if (buttonTarget) {
        setCursorType('button');
        setCursorText('');
        return;
      }

      // Link interaction
      const linkTarget = target.closest('a');
      if (linkTarget) {
        setCursorType('link');
        setCursorText('');
        return;
      }

      // Text interaction (headings, paragraphs, spans)
      const textTarget = target.closest('h1, h2, h3, h4, p, span, li, label');
      if (textTarget && textTarget.textContent.trim().length > 0) {
        setCursorType('text');
        setCursorText('');
        return;
      }

      setCursorType('default');
      setCursorText('');
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice || shouldReduceMotion) {
    return null;
  }

  const cursorVariants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      width: 10,
      height: 10,
      backgroundColor: '#FFFFFF',
      borderWidth: 0,
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', damping: 28, stiffness: 450, mass: 0.15 }
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.4)',
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', damping: 24, stiffness: 380, mass: 0.18 }
    },
    link: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: '#38BDF8',
      borderWidth: 0,
      boxShadow: '0 0 14px rgba(56, 189, 248, 0.5)',
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', damping: 24, stiffness: 400, mass: 0.16 }
    },
    button: {
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      width: 44,
      height: 44,
      backgroundColor: 'rgba(56, 189, 248, 0.15)',
      borderWidth: 1,
      borderColor: '#38BDF8',
      boxShadow: '0 0 18px rgba(56, 189, 248, 0.3)',
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', damping: 22, stiffness: 350, mass: 0.2 }
    },
    view: {
      x: mousePosition.x - 38,
      y: mousePosition.y - 38,
      width: 76,
      height: 76,
      backgroundColor: '#38BDF8',
      borderWidth: 0,
      boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)',
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', damping: 22, stiffness: 320, mass: 0.22 }
    },
    open: {
      x: mousePosition.x - 34,
      y: mousePosition.y - 34,
      width: 68,
      height: 68,
      backgroundColor: '#38BDF8',
      borderWidth: 0,
      boxShadow: '0 0 25px rgba(56, 189, 248, 0.5)',
      opacity: isVisible ? 1 : 0,
      transition: { type: 'spring', damping: 22, stiffness: 320, mass: 0.22 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center mix-blend-difference"
      variants={cursorVariants}
      animate={cursorType}
    >
      {(cursorType === 'view' || cursorType === 'open') && (
        <span className="text-[11px] font-black tracking-widest text-[#0f172a] select-none">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
