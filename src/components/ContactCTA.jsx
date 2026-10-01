import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
import resumePdf from '../assets/Kevin_Shah.pdf';
import MagneticButton from './MagneticButton';

export default function ContactCTA() {
  const { fadeInUp } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-[#1e293b] relative border-t border-[#1A1A1A] overflow-hidden">
      {/* Background Subtle Ambient Glow with #38BDF8 tint */}
      <div className="absolute inset-0 bg-radial-fade opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="rounded-3xl bg-gradient-to-b from-[#141414] to-[#0D0D0D] border-2 border-white/20 hover:border-[#38BDF8]/40 p-10 md:p-16 lg:p-20 text-center flex flex-col items-center relative shadow-2xl shadow-black/80 transition-colors duration-500 group"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#38BDF8]/30 text-xs font-mono font-bold tracking-widest text-[#A1A1A1] group-hover:text-[#38BDF8] uppercase mb-8 transition-colors duration-400">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8] shadow-[0_0_8px_#38BDF8]" />
            <span>START A CONVERSATION</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1] max-w-4xl mb-6 select-none">
            LET'S BUILD <br />
            <span className="text-white text-glow hover:text-[#38BDF8] transition-colors duration-500 cursor-default">
              SOMETHING GREAT.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-[#A1A1A1] font-normal max-w-2xl leading-relaxed mb-12">
            Have a project, opportunity or idea? <br className="hidden sm:inline" />
            Let's create something meaningful together.
          </p>

          {/* Magnetic Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <MagneticButton
              href="#contact"
              dataCursor="open"
              className="group/talk px-9 py-4 rounded-full text-sm font-bold tracking-wider text-black bg-white hover:bg-[#38BDF8] transition-all duration-400 shadow-xl shadow-white/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] w-full sm:w-auto"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-400 group-hover/talk:translate-x-0.5 group-hover/talk:-translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              href={resumePdf}
              download="Kevin_Shah_Resume.pdf"
              dataCursor="open"
              className="group/resume px-9 py-4 rounded-full text-sm font-bold tracking-wider text-[#F5F5F5] hover:text-[#38BDF8] bg-[#111111] hover:bg-[#151515] border border-[#333333] hover:border-[#38BDF8]/50 transition-all duration-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2 text-[#A1A1A1] group-hover/resume:text-[#38BDF8] transition-colors" />
              <span>DOWNLOAD RESUME</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#666666] group-hover/resume:text-[#38BDF8] transition-colors" />
            </MagneticButton>
          </div>

          <div className="mt-12 text-xs text-[#666666] font-mono">
            Fast Response • Open to Full-time, Contract, or Internships
          </div>
        </motion.div>
      </div>
    </section>
  );
}
