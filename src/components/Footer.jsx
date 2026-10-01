import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, BehanceIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const SOCIAL_LINKS = [
    {
      name: 'GitHub',
      url: 'https://github.com/shahKEVIN123/',
      icon: GithubIcon,
      microClass: 'group-hover:rotate-12 group-hover:scale-110',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shah-kevin-492185382/',
      icon: LinkedinIcon,
      microClass: 'group-hover:-translate-y-0.5 group-hover:scale-110',
    },
    {
      name: 'Behance',
      url: 'https://www.behance.net/kevinshah26',
      icon: BehanceIcon,
      microClass: 'group-hover:-translate-y-0.5 group-hover:scale-110',
    },
  ];

  return (
    <footer className="bg-[#0f172a] border-t border-[#1A1A1A] py-16 text-[#A1A1A1]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Titles */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-base font-extrabold tracking-wider text-white mb-1 hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
            KEVIN SHAH © 2026
          </div>
          <div className="text-xs font-mono text-[#888888]">
            Frontend Developer | React.js Developer
          </div>
        </div>

        {/* Professional Social Links with Micro-Interactions */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="open"
                className="group flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A1A1A1] hover:text-[#38BDF8] transition-all duration-400 hover:-translate-y-[2px]"
              >
                <Icon className={`w-4 h-4 text-[#888888] group-hover:text-[#38BDF8] transition-all duration-300 ${link.microClass}`} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Back to top with #38BDF8 hover */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#888888] hover:text-[#38BDF8] transition-colors duration-400 uppercase group"
          aria-label="Back to top"
        >
          <span>TOP</span>
          <div className="w-8 h-8 rounded-full bg-[#111111] border border-[#222222] group-hover:border-[#38BDF8]/50 group-hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] flex items-center justify-center transition-all duration-400">
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:text-[#38BDF8] transition-all duration-400" />
          </div>
        </button>

      </div>
    </footer>
  );
}
