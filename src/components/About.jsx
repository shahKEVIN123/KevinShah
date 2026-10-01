import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Code2, Layers, Palette, GraduationCap, School } from 'lucide-react';

export default function About() {
  const { fadeInUp, staggerContainer } = useScrollAnimation();

  const INFO_ITEMS = [
    {
      label: 'BASED IN',
      value: 'Ahmedabad, India',
      icon: MapPin,
      detail: 'Available for on-site & remote opportunities'
    },
    {
      label: 'PRIMARY FOCUS',
      value: 'Frontend Development',
      icon: Code2,
      detail: 'Engineering specialization'
    },
    {
      label: 'CORE TECHNOLOGY',
      value: 'React.js',
      icon: Layers,
      detail: 'Modern component architecture & hooks'
    },
    {
      label: 'ADDITIONAL STRENGTH',
      value: 'UI/UX Design',
      icon: Palette,
      detail: 'Design thinking & user empathy'
    },
    {
      label: 'EDUCATION',
      value: 'Bachelor of Computer Applications',
      icon: GraduationCap,
      detail: 'Frontend design skills & development'
    },
    {
      label: 'UNIVERSITY',
      value: 'JG University',
      icon: School,
      detail: 'Ahmedabad (Graduation: 05/2026)'
    }
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#0f172a] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">01</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">ABOUT ME</span>
        </motion.div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Narrative */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] mb-8 select-none"
              >
                DEVELOPER WITH A <br />
                <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
                  DESIGN MINDSET.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-[#A1A1A1] font-normal leading-relaxed mb-6"
              >
                I am a frontend developer with hands-on experience working on real-world projects, responsive interfaces and frontend implementation. My development approach combines React.js and modern web technologies with a strong understanding of UI/UX principles.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base text-[#888888] leading-relaxed mb-8"
              >
                Having collaborated with frontend teams, product managers, and business stakeholders on live projects, I understand how to bridge the gap between design vision and production-ready code. I prioritize clean code structure, smooth user interactions, and cross-device consistency.
              </motion.p>
            </div>

            {/* Language Proficiency Strip from resume with interactive hover */}
            <motion.div
              variants={fadeInUp}
              className="p-5 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/30 transition-all duration-400 mt-4 group"
            >
              <div className="text-[11px] font-bold tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400 uppercase mb-3">
                COMMUNICATION & LANGUAGES
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#111111] text-[#F5F5F5] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-[#222222] transition-all duration-300 hover:-translate-y-[2px] cursor-default">
                  Gujarati <span className="text-[#888888] font-mono text-[10px]">(Advanced C1)</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#111111] text-[#F5F5F5] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-[#222222] transition-all duration-300 hover:-translate-y-[2px] cursor-default">
                  Hindi <span className="text-[#888888] font-mono text-[10px]">(Advanced C1)</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#111111] text-[#F5F5F5] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 border border-[#222222] transition-all duration-300 hover:-translate-y-[2px] cursor-default">
                  English <span className="text-[#888888] font-mono text-[10px]">(Upper Intermediate B2)</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Information Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {INFO_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/40 hover:bg-[#0E0E0E] transition-all duration-400 hover:-translate-y-1.5 group cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400 uppercase font-mono">
                      {item.label}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#111111] border border-[#222222] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#38BDF8] transition-all duration-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white tracking-tight mb-1 transition-colors duration-400">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#888888] group-hover:text-[#A1A1A1] font-normal leading-relaxed transition-colors duration-400">
                    {item.detail}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
