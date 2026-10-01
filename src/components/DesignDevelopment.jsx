import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Lightbulb, Layout, Code2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DesignDevelopment() {
  const { fadeInUp, staggerContainer } = useScrollAnimation();

  const STEPS = [
    {
      num: "01",
      title: "IDEA",
      icon: Lightbulb,
      subtitle: "Understand Requirements",
      description: "Define real business goals, analyze end-user needs, and plan feature architecture."
    },
    {
      num: "02",
      title: "DESIGN",
      icon: Layout,
      subtitle: "Structure Interface",
      description: "Craft clear wireframes, design systems, and responsive Figma prototypes."
    },
    {
      num: "03",
      title: "DEVELOP",
      icon: Code2,
      subtitle: "Implement in React",
      description: "Write clean React.js code, build modular components, and apply responsive Tailwind styling."
    },
    {
      num: "04",
      title: "REFINE",
      icon: CheckCircle2,
      subtitle: "Debug & Optimize",
      description: "Perform cross-browser testing, accessibility passes, and performance tuning."
    }
  ];

  return (
    <section className="py-28 md:py-36 bg-[#0f172a] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">03</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">THE SYNERGY</span>
        </motion.div>

        {/* Section Heading & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] select-none">
              FROM DESIGN <br />
              <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
                TO CODE.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
              Understanding both interface design and frontend development allows me to translate visual ideas into responsive and functional web experiences.
            </p>
          </motion.div>
        </div>

        {/* Synergy Ratio Indicator */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 p-6 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/40 transition-colors duration-400 flex flex-col md:flex-row items-center justify-between gap-6 group"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="px-4 py-2 rounded-xl bg-white text-black group-hover:bg-[#38BDF8] transition-colors duration-400 font-extrabold text-xs tracking-wider uppercase shadow-sm">
              Frontend Engineering
            </div>
            <span className="text-neutral-500 font-bold hidden sm:inline">+</span>
            <div className="px-4 py-2 rounded-xl bg-[#141414] text-[#A1A1A1] group-hover:text-white border border-[#222222] font-semibold text-xs tracking-wider uppercase transition-colors duration-400">
              UI/UX Designer
            </div>
          </div>
          <div className="text-xs text-[#888888] group-hover:text-[#38BDF8] font-mono text-center md:text-right transition-colors duration-400">
            Zero friction between design mockups & production code.
          </div>
        </motion.div>

        {/* Animated Process Steps: IDEA -> DESIGN -> DEVELOP -> REFINE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="relative p-7 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/40 hover:bg-[#0E0E0E] transition-all duration-400 group flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.06)]"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono tracking-tighter text-[#444444] group-hover:text-[#38BDF8] transition-colors duration-400">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#222222] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#38BDF8] transition-all duration-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-white mb-1 transition-colors duration-400">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#888888] group-hover:text-[#38BDF8] mb-4 uppercase tracking-wider transition-colors duration-400 font-mono">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#A1A1A1] leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Progress arrow indicator for desktop */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-[#111111] border border-[#222222] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#666666] group-hover:text-[#38BDF8] transition-all duration-400">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
