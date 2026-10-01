import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { fadeInUp } = useScrollAnimation();

  return (
    <section id="work" className="py-28 md:py-36 bg-[#0f172a] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">05</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">PORTFOLIO</span>
        </motion.div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] select-none flex flex-wrap items-center gap-x-3 gap-y-1 ">
              SELECTED 
              <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
                WORK.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-sm text-[#888888] font-mono flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
            <span>SHOWCASING 5 CONFIRMED PROJECTS / 4 LIVE DEPLOYMENTS</span>
          </motion.div>
        </div>

        {/* Alternating Editorial Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
