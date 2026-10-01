import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillGroups } from '../data/skills';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Sparkles, Terminal, Database, Wrench, Layers, Palette } from 'lucide-react';

const CATEGORY_ICONS = {
  '01': Terminal,
  '02': Terminal,
  '03': Database,
  '04': Wrench,
  '05': Layers,
  '06': Palette,
};

export default function Skills() {
  const { fadeInUp, staggerContainer } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterOptions = ['ALL', 'FRONTEND', 'BACKEND & DB', 'TOOLS', 'UI/UX & DESIGN'];

  const filteredGroups = skillGroups.filter((group) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'FRONTEND') return group.category === 'FRONTEND';
    if (activeFilter === 'BACKEND & DB') return group.category === 'BACKEND' || group.category === 'DATABASE';
    if (activeFilter === 'TOOLS') return group.category === 'DEVELOPMENT TOOLS';
    if (activeFilter === 'UI/UX & DESIGN') return group.category === 'UI/UX' || group.category === 'CREATIVE TOOLS';
    return true;
  });

  return (
    <section id="skills" className="py-28 md:py-36 bg-[#1e293b] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">02</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">CAPABILITIES</span>
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] select-none flex flex-wrap items-center gap-x-3 gap-y-1">
              TECHNOLOGIES <br />
              <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
                I WORK WITH.
              </span>
            </motion.h2>
          </div>

          {/* Interactive Filter Pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-wrap gap-2"
          >
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-400 ${
                    isActive
                      ? 'bg-[#38BDF8] text-black shadow-md shadow-[#38BDF8]/20 font-bold'
                      : 'bg-[#111111] text-[#A1A1A1] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-[#222222]'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
          {filteredGroups.map((group) => {
            const IconComponent = CATEGORY_ICONS[group.number] || Sparkles;
            const isFrontend = group.isPrimary;
            const isUiUx = group.isSecondaryStrength;

            return (
              <motion.div
                layout
                key={group.number}
                variants={fadeInUp}
                className={`relative rounded-2xl p-7 transition-all duration-400 group flex flex-col justify-between ${
                  isFrontend
                    ? 'bg-gradient-to-b from-[#141414] to-[#0D0D0D] border-2 border-[#38BDF8]/30 hover:border-[#38BDF8] md:col-span-2 lg:col-span-2 shadow-2xl shadow-black/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]'
                    : isUiUx
                    ? 'bg-[#111111] border border-white/20 hover:border-[#38BDF8]/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.08)]'
                    : 'bg-[#111111] border border-[#222222] hover:border-[#38BDF8]/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]'
                }`}
              >
                {/* Header within Card */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400">
                        {group.number}
                      </span>
                      <span className="w-4 h-[1px] bg-[#333333] group-hover:bg-[#38BDF8]/40 transition-colors duration-400" />
                      <span className="text-xs font-bold tracking-widest text-[#F5F5F5] group-hover:text-white uppercase transition-colors duration-400">
                        {group.category}
                      </span>
                    </div>

                    {isFrontend && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-[#38BDF8] text-black shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                        CORE FOCUS
                      </span>
                    )}

                    {isUiUx && (
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-white/10 text-white group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/30 border border-white/20 transition-colors duration-400">
                        SECONDARY STRENGTH
                      </span>
                    )}

                    {!isFrontend && !isUiUx && (
                      <IconComponent className="w-4 h-4 text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400" />
                    )}
                  </div>

                  <p className="text-xs text-[#888888] leading-relaxed mb-6 font-normal group-hover:text-[#A1A1A1] transition-colors duration-400">
                    {group.description}
                  </p>
                </div>

                {/* Skill Items */}
                <div className="flex flex-wrap gap-2.5 pt-2 border-t border-[#1F1F1F]">
                  {group.skills.map((skill, sIdx) => {
                    const isReact = skill.name === 'React.js';
                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 hover:-translate-y-[2px] cursor-default select-none ${
                          isReact
                            ? 'bg-white text-black font-extrabold hover:bg-[#38BDF8] shadow-md hover:shadow-[0_0_15px_#38BDF8]'
                            : skill.highlighted
                            ? 'bg-[#1A1A1A] text-white border border-[#333333] hover:border-[#38BDF8]/60 hover:text-[#38BDF8]'
                            : 'bg-[#141414] text-[#A1A1A1] border border-[#222222] hover:text-[#38BDF8] hover:border-[#38BDF8]/40'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isReact ? 'bg-black' : 'bg-[#666666] group-hover:bg-[#38BDF8]'
                        }`} />
                        <span>{skill.name}</span>
                        {skill.tag && (
                          <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono ${
                            isReact ? 'bg-neutral-900 text-white' : 'bg-white/10 text-white'
                          }`}>
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
