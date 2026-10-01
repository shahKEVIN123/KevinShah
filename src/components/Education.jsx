import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const { fadeInUp } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-[#0f172a] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">07</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">ACADEMIC BACKGROUND</span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] select-none">
            EDUCATION<span className="text-[#38BDF8]">.</span>
          </h2>
        </motion.div>

        {/* Minimal Education Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-3xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/40 p-8 md:p-12 transition-all duration-400 group hover:-translate-y-1 shadow-sm hover:shadow-[0_0_25px_rgba(56,189,248,0.06)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1A1A1A]">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-[#262626] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-white group-hover:text-[#38BDF8] flex-shrink-0 mt-1 transition-all duration-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#F5F5F5] mb-2 transition-colors">
                  Bachelor of Computer Applications
                </h3>
                <div className="text-base sm:text-lg font-bold text-[#A1A1A1] group-hover:text-[#38BDF8] transition-colors duration-400">
                  JG University
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#141414] border border-[#222222] group-hover:border-[#38BDF8]/30 text-xs font-mono text-[#F5F5F5] transition-colors duration-400">
                <Calendar className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#38BDF8] transition-colors" />
                <span>Graduation: 05/2026</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#141414] border border-[#222222] group-hover:border-[#38BDF8]/30 text-xs font-mono text-[#A1A1A1] transition-colors duration-400">
                <MapPin className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#38BDF8] transition-colors" />
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#888888]">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#666666] group-hover:text-[#38BDF8] transition-colors" />
              <span>Specialization Focus: Frontend Design Skill & Web Application Development</span>
            </div>
            <div className="font-mono text-[#666666]">
              Verified Academic Credential
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
