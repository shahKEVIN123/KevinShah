import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Search, Compass, Code, RefreshCw } from 'lucide-react';

export default function Process() {
  const { fadeInUp, staggerContainer } = useScrollAnimation();

  const PHASES = [
    {
      num: "01",
      title: "UNDERSTAND",
      icon: Search,
      tag: "DISCOVERY & ANALYSIS",
      text: "Understand the problem and requirements. Analyze client deliverables, user workflows, and core technical objectives before writing code."
    },
    {
      num: "02",
      title: "DESIGN",
      icon: Compass,
      tag: "ARCHITECTURE & UX",
      text: "Structure the interface and experience. Establish layout hierarchies, Figma wireframes, reusable design tokens, and mobile-first responsiveness."
    },
    {
      num: "03",
      title: "DEVELOP",
      icon: Code,
      tag: "REACT.JS IMPLEMENTATION",
      text: "Build responsive interfaces using modern frontend technologies. Write modular React components, clean state management, and optimized Tailwind CSS."
    },
    {
      num: "04",
      title: "REFINE",
      icon: RefreshCw,
      tag: "QUALITY & TESTING",
      text: "Test, debug and improve the final product. Conduct cross-browser checks, ensure responsive precision, optimize loading, and resolve issues."
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-[#1e293b] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">06</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">METHODOLOGY</span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] mb-6 select-none flex flex-wrap items-center gap-x-3 gap-y-1 ">
            HOW I 
            <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
              BUILD.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
            A structured frontend engineering methodology ensuring rapid iteration, maintainable codebases, and exceptional user experiences.
          </p>
        </motion.div>

        {/* Four Stages Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.num}
                variants={fadeInUp}
                className="relative p-8 rounded-2xl bg-[#111111] border border-[#222222] hover:border-[#38BDF8]/40 transition-all duration-400 flex flex-col justify-between group hover:-translate-y-1.5 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-mono tracking-tighter text-[#444444] group-hover:text-[#38BDF8] transition-colors duration-400">
                      {phase.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#181818] border border-[#262626] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#888888] group-hover:text-[#38BDF8] transition-all duration-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-[10px] font-mono tracking-widest text-[#666666] group-hover:text-[#38BDF8] uppercase mb-2 transition-colors duration-400">
                    {phase.tag}
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-white mb-4 transition-colors duration-400">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed font-normal">
                    {phase.text}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1C1C1C]">
                  <div className="w-full h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div className="w-0 group-hover:w-full h-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] transition-all duration-500 ease-out" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
