import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-white/[0.04] pointer-events-none">
      <motion.div
        className="h-full bg-[#38BDF8] origin-left shadow-[0_0_10px_#38BDF8]"
        style={{ scaleX }}
      />
    </div>
  );
}
