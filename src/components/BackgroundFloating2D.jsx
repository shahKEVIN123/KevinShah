import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function BackgroundFloating2D() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* Element 1: Thin Minimalist Ring (Top Left) */}
      <motion.div
        className="absolute top-[18%] left-[8%] w-44 h-44 rounded-full border border-white/[0.04]"
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -18, 12, 0],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)`,
        }}
      />

      {/* Element 2: Small #38BDF8 Accent Dot (Mid Right) */}
      <motion.div
        className="absolute top-[35%] right-[10%] w-2 h-2 rounded-full bg-[#38BDF8]/40 shadow-[0_0_12px_#38BDF8]"
        animate={{
          x: [0, -12, 10, 0],
          y: [0, 16, -14, 0],
          scale: [1, 1.4, 0.9, 1],
          opacity: [0.3, 0.7, 0.4, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
        }}
      />

      {/* Element 3: Minimal Floating Square Outline (Center Left) */}
      <motion.div
        className="absolute top-[58%] left-[6%] w-20 h-20 border border-white/[0.03] rounded-lg"
        animate={{
          x: [0, 20, -15, 0],
          y: [0, -15, 20, 0],
          rotate: [0, -45, -90, -180],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
        }}
      />

      {/* Element 4: Fine Crosshair / Tech Grid Marker (Lower Center Right) */}
      <motion.div
        className="absolute top-[72%] right-[15%] w-8 h-8 opacity-25"
        animate={{
          x: [0, -10, 8, 0],
          y: [0, -12, 15, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate(${mousePos.x * 9}px, ${mousePos.y * 9}px)`,
        }}
      >
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/30" />
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/30" />
      </motion.div>

      {/* Element 5: Delicate Diagonal Line Accent (Near Footer) */}
      <motion.div
        className="absolute bottom-[14%] left-[18%] w-28 h-[1px] bg-gradient-to-r from-transparent via-[#38BDF8]/20 to-transparent rotate-45"
        animate={{
          opacity: [0.15, 0.45, 0.15],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px)`,
        }}
      />

    </div>
  );
}
