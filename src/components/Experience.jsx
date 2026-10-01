import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const { fadeInUp, staggerContainer } = useScrollAnimation();

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#1e293b] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">04</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">TRACK RECORD</span>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] mb-6 select-none flex flex-wrap items-center gap-x-3 gap-y-1">
            WORK 
            <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
              EXPERIENCE.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
            Professional background featuring live frontend engineering in production environments alongside UI/UX design foundation.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#222222] ml-3 md:ml-6 pl-6 md:pl-12 flex flex-col gap-14">
          
          {experiences.map((exp) => {
            const isPrimary = exp.isPrimary;

            return (
              <motion.div
                key={exp.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline node with #38BDF8 glow for current role */}
                <div
                  className={`absolute -left-[31px] md:-left-[55px] top-7 w-4 h-4 rounded-full border-2 transition-all duration-400 ${
                    isPrimary
                      ? 'bg-[#38BDF8] border-black shadow-[0_0_12px_#38BDF8] ring-4 ring-[#38BDF8]/20'
                      : 'bg-[#222222] border-[#555555] hover:border-[#38BDF8]'
                  }`}
                />

                {/* Experience Card */}
                <div
                  className={`rounded-3xl p-8 md:p-10 transition-all duration-400 hover:-translate-y-1 group ${
                    isPrimary
                      ? 'bg-gradient-to-b from-[#141414] to-[#0D0D0D] border-2 border-white/20 hover:border-[#38BDF8]/50 shadow-2xl shadow-black/80 hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]'
                      : 'bg-[#111111] border border-[#222222] hover:border-[#38BDF8]/30 hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]'
                  }`}
                >
                  {/* Top Bar: Company, Period, Badges */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#222222]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xs font-mono font-bold text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400">
                          {exp.index}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors">
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider bg-[#38BDF8] text-black shadow-[0_0_10px_rgba(56,189,248,0.3)] uppercase">
                            CURRENT INTERNSHIP
                          </span>
                        )}
                        {!exp.isCurrent && (
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-[#1A1A1A] text-[#A1A1A1] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/30 border border-[#2A2A2A] uppercase transition-colors duration-400">
                            UI/UX DESIGN INTERN
                          </span>
                        )}
                      </div>

                      <div className="text-lg font-bold text-white tracking-wide group-hover:text-[#F5F5F5] transition-colors">
                        {exp.role}
                      </div>
                    </div>

                    {/* Metadata: Location & Period */}
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#A1A1A1]">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222222] group-hover:border-[#38BDF8]/30 transition-colors duration-400">
                        <Calendar className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#38BDF8] transition-colors" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141414] border border-[#222222] group-hover:border-[#38BDF8]/30 transition-colors duration-400">
                        <MapPin className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#38BDF8] transition-colors" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-[#C2C2C2] leading-relaxed mb-6 font-normal">
                    {exp.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400 uppercase">
                      Key Contributions & Scope
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((item, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1A1] leading-relaxed group/item"
                        >
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                            isPrimary ? 'text-[#38BDF8]' : 'text-[#666666] group-hover/item:text-[#38BDF8]'
                          }`} />
                          <span className="group-hover/item:text-white transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#1C1C1C]">
                    <span className="text-[11px] font-bold text-[#666666] uppercase tracking-wider mr-2 font-mono">
                      Tools & Stack:
                    </span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-300 hover:-translate-y-[1px] ${
                          isPrimary
                            ? 'bg-[#1C1C1C] text-white hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-[#333333]'
                            : 'bg-[#141414] text-[#888888] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-[#222222]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
