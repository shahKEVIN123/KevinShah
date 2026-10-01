import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import profileImg from '../assets/profile/kevin-shah.png';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      // Normalized offset (-1 to 1)
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.85,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.95,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0f172a]"
    >
      {/* 2D Background Ambient Mouse Light with subtle #38BDF8 hint */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-transform duration-700 ease-out"
        style={{
          background: `radial-gradient(850px circle at ${50 + mouseOffset.x * 12}% ${40 + mouseOffset.y * 12}%, rgba(56, 189, 248, 0.035), transparent 65%)`,
        }}
      />

      {/* Subtle Background Grid with mouse parallax (5px) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 bg-grid-pattern opacity-60"
        style={{
          transform: shouldReduceMotion
            ? 'none'
            : `translate3d(${mouseOffset.x * 5}px, ${mouseOffset.y * 5}px, 0)`,
        }}
      />

      {/* Vignettes */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0f172a] to-transparent z-0" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (desktop 7 cols, subtle 2px parallax) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              transform: shouldReduceMotion
                ? 'none'
                : `translate3d(${mouseOffset.x * 2}px, ${mouseOffset.y * 2}px, 0)`,
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[#222222] bg-[#1e293b]/90 mb-6 backdrop-blur-sm shadow-sm group hover:border-[#38BDF8]/40 transition-colors duration-400"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#A1A1A1] group-hover:text-[#38BDF8] transition-colors duration-400 uppercase">
                FRONTEND DEVELOPER × REACT.JS
              </span>
            </motion.div>

            {/* Giant Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[54px] xl:text-7xl 2xl:text-[82px] font-extrabold tracking-tight text-[#F5F5F5] leading-[0.98] mb-8 select-none"
            >
              I BUILD DIGITAL <br />
              <span className="text-white text-glow hover:text-[#38BDF8] transition-colors duration-500 cursor-default">
                EXPERIENCES
              </span> <br />
              THAT WORK.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-[#A1A1A1] font-normal leading-relaxed max-w-2xl mb-10"
            >
              Frontend Developer focused on React.js, JavaScript, responsive web development and building polished digital experiences with a strong understanding of UI/UX.
            </motion.p>

            {/* Magnetic Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <MagneticButton
                href="#work"
                dataCursor="open"
                className="group px-8 py-4 rounded-full text-sm font-bold tracking-wider text-black bg-white hover:bg-[#38BDF8] transition-all duration-400 shadow-xl shadow-white/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] w-full sm:w-auto text-center"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                dataCursor="open"
                className="group px-8 py-4 rounded-full text-sm font-bold tracking-wider text-[#F5F5F5] hover:text-[#38BDF8] bg-[#111111] hover:bg-[#151515] border border-[#222222] hover:border-[#38BDF8]/50 transition-all duration-400 w-full sm:w-auto text-center hover:shadow-[0_0_18px_rgba(56,189,248,0.15)]"
              >
                <span>LET'S CONNECT</span>
              </MagneticButton>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-[#1A1A1A] grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-lg"
            >
              <div className="group">
                <div className="text-xs uppercase tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400">
                  Focus
                </div>
                <div className="text-sm font-semibold text-[#F5F5F5] mt-1 group-hover:text-white transition-colors">
                  React & Frontend
                </div>
              </div>
              <div className="group">
                <div className="text-xs uppercase tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400">
                  Design Synergy
                </div>
                <div className="text-sm font-semibold text-[#F5F5F5] mt-1 group-hover:text-white transition-colors">
                  UI/UX Mindset
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 group">
                <div className="text-xs uppercase tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400">
                  Location
                </div>
                <div className="text-sm font-semibold text-[#F5F5F5] mt-1 group-hover:text-white transition-colors">
                  Ahmedabad, IN
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait + 2D Animated Composition (6px & 10px parallax) */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            variants={imageContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 2D Decorative Composition: Orbit line around portrait */}
            <motion.div
              className="pointer-events-none absolute -inset-8 rounded-[40px] border border-white/[0.05] hidden sm:block"
              style={{
                transform: shouldReduceMotion
                  ? 'none'
                  : `translate3d(${mouseOffset.x * 10}px, ${mouseOffset.y * 10}px, 0)`,
              }}
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            {/* 2D Floating Accent Dot near Portrait */}
            <motion.div
              className="pointer-events-none absolute -top-4 -right-4 w-3 h-3 rounded-full bg-[#38BDF8] shadow-[0_0_15px_#38BDF8] z-20 hidden sm:block"
              style={{
                transform: shouldReduceMotion
                  ? 'none'
                  : `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 12}px, 0)`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* 2D Orbiting Minimal Ring (bottom left of portrait) */}
            <motion.div
              className="pointer-events-none absolute -bottom-6 -left-6 w-16 h-16 rounded-full border border-[#38BDF8]/30 hidden sm:block"
              style={{
                transform: shouldReduceMotion
                  ? 'none'
                  : `translate3d(${mouseOffset.x * 8}px, ${mouseOffset.y * 8}px, 0)`,
              }}
              animate={{
                scale: [0.95, 1.05, 0.95],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Portrait Card with 6px mouse parallax */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[360px] xl:max-w-[440px] mx-auto group"
              style={{
                transform: shouldReduceMotion
                  ? 'none'
                  : `translate3d(${mouseOffset.x * 6}px, ${mouseOffset.y * 6}px, 0)`,
              }}
            >
              {/* Outer Subtle Ambient Halo Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/10 via-[#38BDF8]/5 to-transparent opacity-60 blur-2xl group-hover:opacity-90 group-hover:from-[#38BDF8]/10 transition-opacity duration-700 pointer-events-none" />

              {/* Framed Card for Portrait */}
              <div className="relative rounded-2xl overflow-hidden border border-[#222222] group-hover:border-[#38BDF8]/40 bg-[#1e293b] shadow-2xl shadow-black/90 transition-colors duration-500">
                
                {/* Profile Image with subtle clean scale */}
                <motion.div
                  className="relative overflow-hidden aspect-[3/4] bg-[#1e293b]"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={profileImg}
                    alt="Kevin Shah - Frontend Developer"
                    loading="eager"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:contrast-105 group-hover:brightness-100 transition-all duration-700"
                  />

                  {/* Dark gradient overlay at bottom for cinematic blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-85" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none group-hover:ring-[#38BDF8]/20 transition-all duration-500" />
                </motion.div>

                {/* Floating Label Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#111111]/90 backdrop-blur-md border border-[#222222] group-hover:border-[#38BDF8]/30 flex items-center justify-between shadow-lg transition-colors duration-400">
                  <div>
                    <div className="text-xs font-black tracking-widest text-[#F5F5F5] group-hover:text-[#38BDF8] transition-colors duration-400 uppercase">
                      KEVIN SHAH
                    </div>
                    <div className="text-[11px] font-medium tracking-wider text-[#A1A1A1] mt-0.5">
                      FRONTEND DEVELOPER
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                    <span className="text-[10px] font-bold tracking-widest text-[#38BDF8] uppercase">
                      AVAILABLE
                    </span>
                  </div>
                </div>

              </div>

              {/* Corner Tech Detail Accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-white/40 group-hover:border-[#38BDF8] transition-colors duration-400 pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-white/40 group-hover:border-[#38BDF8] transition-colors duration-400 pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center text-xs tracking-widest text-[#666666]"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-[#A1A1A1] hover:text-[#38BDF8] transition-colors duration-400 uppercase font-bold group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#38BDF8]" />
        </a>

        <div className="hidden md:flex items-center gap-4 text-[11px] font-mono">
          <span className="hover:text-[#38BDF8] transition-colors duration-400">REACT.JS</span>
          <span className="text-[#333333]">/</span>
          <span className="hover:text-[#38BDF8] transition-colors duration-400">JAVASCRIPT</span>
          <span className="text-[#333333]">/</span>
          <span className="hover:text-[#38BDF8] transition-colors duration-400">TAILWIND CSS</span>
          <span className="text-[#333333]">/</span>
          <span className="hover:text-[#38BDF8] transition-colors duration-400">UI/UX DESIGN</span>
        </div>
      </motion.div>
    </section>
  );
}
