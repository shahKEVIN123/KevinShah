import { useState, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Lock, Globe } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [imageParallax, setImageParallax] = useState({ x: 0, y: 0 });
  const isEven = index % 2 === 1; // 0: left img, 1: right img
  const isLive = project.status === 'live' && project.url;

  // 2D Parallax inside the project image container (moves opposite to cursor 8-12px)
  const handleMouseMove = (e) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    // Opposite movement, max 10px
    setImageParallax({ x: -x * 10, y: -y * 10 });
  };

  const handleMouseLeave = () => {
    setImageParallax({ x: 0, y: 0 });
  };

  // Custom visual mockup previews tailored cleanly to each confirmed project
  const renderProjectShowcase = () => {
    switch (project.id) {
      case 1: // SPC
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0E0E0E] via-[#121212] to-[#1e293b] p-6 sm:p-8 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
                <span className="text-xs font-mono font-bold text-[#F5F5F5]">SPC PORTAL</span>
              </div>
              <span className="text-[10px] font-mono text-[#666666] tracking-wider uppercase">User / Home.php</span>
            </div>
            <div className="space-y-4 my-6">
              <div className="h-6 w-3/4 bg-[#1F1F1F] rounded-md" />
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-xl bg-[#171717] border border-[#262626] p-3 flex flex-col justify-between">
                  <div className="w-4 h-4 rounded bg-white/20" />
                  <div className="h-2 w-12 bg-white/10 rounded" />
                </div>
                <div className="h-16 rounded-xl bg-[#171717] border border-[#262626] p-3 flex flex-col justify-between">
                  <div className="w-4 h-4 rounded bg-white/20" />
                  <div className="h-2 w-14 bg-white/10 rounded" />
                </div>
                <div className="h-16 rounded-xl bg-[#171717] border border-[#262626] p-3 flex flex-col justify-between">
                  <div className="w-4 h-4 rounded bg-white/20" />
                  <div className="h-2 w-10 bg-white/10 rounded" />
                </div>
              </div>
              <div className="h-24 rounded-xl bg-[#141414] border border-[#222222] p-4 flex flex-col justify-around">
                <div className="h-3 w-1/2 bg-white/15 rounded" />
                <div className="h-2 w-5/6 bg-white/10 rounded" />
                <div className="h-2 w-2/3 bg-white/10 rounded" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-[#888888] pt-2 border-t border-[#1C1C1C]">
              <span>PHP / MySQL Architecture</span>
              <span className="text-[#38BDF8] font-bold">● LIVE SYSTEM</span>
            </div>
          </div>
        );

      case 2: // Rajpipla Vijay Palace
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#12100E] via-[#0E0D0C] to-[#080808] p-6 sm:p-8 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-[#2C241E]/60 pb-4">
              <span className="text-xs font-serif font-bold text-amber-200/90 tracking-widest uppercase">
                RAJPIPLA VIJAY PALACE
              </span>
              <span className="text-[10px] font-mono text-[#888888]">Heritage Hospitality</span>
            </div>
            <div className="my-8 text-center space-y-4">
              <div className="inline-block px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-200/80 text-[10px] tracking-widest uppercase">
                Royal Heritage Living
              </div>
              <div className="text-2xl font-serif font-light text-white tracking-wide">
                Where Timeless History Meets Luxury
              </div>
              <div className="flex justify-center gap-2 pt-2">
                <span className="w-12 h-1 bg-amber-400/40 rounded-full" />
                <span className="w-4 h-1 bg-white/20 rounded-full" />
                <span className="w-4 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-[#888888] pt-2 border-t border-[#222222]">
              <span>React.js / Vercel Host</span>
              <span className="text-[#38BDF8] font-bold">● LIVE SHOWCASE</span>
            </div>
          </div>
        );

      case 3: // Mhaveer
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#101010] via-[#141414] to-[#1e293b] p-6 sm:p-8 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <span className="text-xs font-black tracking-widest text-[#F5F5F5] uppercase">
                MHAVEER
              </span>
              <span className="text-[10px] font-mono text-[#666666]">Web Platform</span>
            </div>
            <div className="my-6 space-y-4">
              <div className="p-4 rounded-xl bg-[#171717] border border-[#282828] space-y-2">
                <div className="h-3 w-1/3 bg-white/30 rounded" />
                <div className="h-2 w-3/4 bg-white/10 rounded" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] space-y-2">
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                  <div className="h-2 w-full bg-white/5 rounded" />
                </div>
                <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] space-y-2">
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                  <div className="h-2 w-full bg-white/5 rounded" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-[#888888] pt-2 border-t border-[#1C1C1C]">
              <span>Modern Web Framework</span>
              <span className="text-[#38BDF8] font-bold">● LIVE DEPLOYMENT</span>
            </div>
          </div>
        );

      case 4: // Globetrotter
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#0F1418] via-[#0E1014] to-[#07090C] p-6 sm:p-8 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-[#1E252C] pb-4">
              <span className="text-xs font-black tracking-widest text-[#F5F5F5] uppercase">
                GLOBETROTTER
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80">Travel Itinerary</span>
            </div>
            <div className="my-6 space-y-3">
              <div className="text-lg font-bold text-white tracking-tight">
                Explore Destinations & Routes
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="rounded-lg bg-[#141A22] border border-[#1E293B] p-2 text-center">
                  <div className="text-[10px] text-cyan-300 font-mono">Day 01</div>
                  <div className="h-1.5 w-8 bg-white/20 mx-auto rounded mt-1" />
                </div>
                <div className="rounded-lg bg-[#141A22] border border-[#1E293B] p-2 text-center">
                  <div className="text-[10px] text-cyan-300 font-mono">Day 02</div>
                  <div className="h-1.5 w-8 bg-white/20 mx-auto rounded mt-1" />
                </div>
                <div className="rounded-lg bg-[#141A22] border border-[#1E293B] p-2 text-center">
                  <div className="text-[10px] text-cyan-300 font-mono">Day 03</div>
                  <div className="h-1.5 w-8 bg-white/20 mx-auto rounded mt-1" />
                </div>
              </div>
              <div className="h-16 rounded-xl bg-[#121820] border border-[#1E252C] p-3 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-2.5 w-24 bg-white/30 rounded" />
                  <div className="h-2 w-16 bg-white/10 rounded" />
                </div>
                <span className="text-xs font-mono text-cyan-300">Route Map</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-[#888888] pt-2 border-t border-[#1C2028]">
              <span>Interactive Travel UI</span>
              <span className="text-[#38BDF8] font-bold">● LIVE PLATFORM</span>
            </div>
          </div>
        );

      case 5: // Car Parking Finder (NOT LIVE)
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#121212] via-[#0E0E0E] to-[#070707] p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden">
            {/* Not live diagonal badge */}
            <div className="absolute -right-12 top-7 rotate-45 bg-neutral-800 text-neutral-300 text-[9px] font-mono uppercase px-12 py-1 tracking-widest border border-neutral-700 shadow-md">
              IN DEVELOPMENT
            </div>

            <div className="flex items-center justify-between border-b border-[#222222] pb-4">
              <span className="text-xs font-black tracking-widest text-[#A1A1A1] uppercase">
                CAR PARKING FINDER
              </span>
              <span className="text-[10px] font-mono text-[#666666]">Internal Application</span>
            </div>

            <div className="my-6 space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-[#171717] border border-[#242424]">
                <span className="text-xs font-mono text-[#A1A1A1]">Spot Availability:</span>
                <span className="text-xs font-mono text-amber-400 font-bold">42 / 120 Free</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
                  <div
                    key={s}
                    className={`h-10 rounded border flex items-center justify-center text-[10px] font-mono ${
                      s % 3 === 0
                        ? 'bg-neutral-800/40 border-neutral-700 text-neutral-500'
                        : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-400/80'
                    }`}
                  >
                    P-{s}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[11px] font-mono text-[#777777] pt-2 border-t border-[#1C1C1C]">
              <span>Urban Mobility System</span>
              <span className="text-neutral-400 font-bold">● NOT LIVE</span>
            </div>
          </div>
        );
    }
  };

  return (
    <article
      className="py-16 md:py-24 border-b border-[#1A1A1A] last:border-b-0 group"
      aria-label={`Project ${project.number}: ${project.title}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Visual / Screenshot Showcase Area with 2D Parallax (moves opposite to cursor) */}
        <div
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-cursor="view"
            className="relative rounded-2xl overflow-hidden border border-[#222222] group-hover:border-[#38BDF8]/50 bg-[#1e293b] shadow-2xl transition-all duration-500 hover:shadow-[0_0_35px_rgba(56,189,248,0.1)]"
          >
            {/* Top Browser Bar */}
            <div className="px-4 py-3 bg-[#111111] border-b border-[#222222] group-hover:border-[#38BDF8]/20 flex items-center justify-between transition-colors duration-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333] group-hover:bg-red-500/80 transition-colors duration-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333] group-hover:bg-yellow-500/80 transition-colors duration-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#333333] group-hover:bg-[#38BDF8] transition-colors duration-300" />
              </div>
              <div className="px-4 py-1 rounded-md bg-[#080808] border border-[#222222] text-[11px] font-mono text-[#888888] max-w-[280px] sm:max-w-xs truncate flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-[#555555] group-hover:text-[#38BDF8] transition-colors duration-400" />
                <span className="group-hover:text-neutral-300 transition-colors">{project.url || 'localhost:3000/car-parking-finder'}</span>
              </div>
              <div className="w-10" />
            </div>

            {/* Main Interactive Showcase Body with 2D Parallax (8-12px) & subtle scale (1.04) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
              <motion.div
                className="w-full h-full"
                animate={{
                  x: imageParallax.x,
                  y: imageParallax.y,
                  scale: cardRef.current && cardRef.current.matches(':hover') ? 1.04 : 1,
                }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 240,
                  mass: 0.15,
                }}
              >
                {renderProjectShowcase()}
              </motion.div>

              {/* Overlay with CTA reveal on hover */}
              {isLive && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center backdrop-blur-[2px]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38BDF8] text-black font-extrabold text-xs tracking-wider uppercase shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-all duration-400 hover:scale-105"
                  >
                    <span>VIEW LIVE PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Subtle bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_#38BDF8]" />
          </div>
        </div>

        {/* Content Column */}
        <div
          className={`lg:col-span-5 flex flex-col justify-center ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          {/* Project Number & Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono font-bold tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400">
              {project.number}
            </span>
            <span className="w-6 h-[1px] bg-[#333333] group-hover:bg-[#38BDF8]/40 transition-colors duration-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#A1A1A1] group-hover:text-white transition-colors duration-400">
              {project.category}
            </span>
          </div>

          {/* Project Title: Changes to #38BDF8 on hover */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F5F5F5] group-hover:text-[#38BDF8] transition-colors duration-400 mb-4 select-none">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-md text-xs font-medium bg-[#111111] text-[#A1A1A1] group-hover:text-white group-hover:border-[#38BDF8]/30 border border-[#222222] transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project CTA / Status */}
          <div className="pt-2">
            {isLive ? (
              <MagneticButton
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="open"
                className="group/btn px-6 py-3.5 rounded-full text-xs font-extrabold tracking-wider text-black bg-white hover:bg-[#38BDF8] transition-all duration-400 shadow-lg shadow-white/5 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
              >
                <span>VIEW LIVE PROJECT</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </MagneticButton>
            ) : (
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#141414] border border-[#262626] text-xs font-semibold text-[#888888]">
                <Lock className="w-4 h-4 text-[#666666]" />
                <span className="tracking-wider">PROJECT STATUS:</span>
                <span className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 font-mono text-[11px] font-bold">
                  NOT LIVE
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </article>
  );
}
