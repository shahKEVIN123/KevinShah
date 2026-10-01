import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

const NAV_LINKS = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'WORK', href: '#work' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0f172a]/85 backdrop-blur-md border-b border-[#222222] py-4'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5 text-base md:text-lg font-extrabold tracking-wider text-white transition-colors duration-400"
          >
            <span className="w-2 h-2 rounded-full bg-white group-hover:bg-[#38BDF8] group-hover:shadow-[0_0_10px_#38BDF8] transition-all duration-400" />
            <span className="group-hover:text-[#38BDF8] transition-colors duration-400">
              KEVIN SHAH
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-xs font-semibold tracking-widest relative py-1.5 transition-all duration-400 inline-block hover:-translate-y-[2px] ${
                    isActive
                      ? 'text-[#38BDF8]'
                      : 'text-[#A1A1A1] hover:text-[#38BDF8]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#38BDF8] rounded-full shadow-[0_0_8px_#38BDF8]"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Magnetic LET'S TALK Button */}
          <div className="hidden md:flex items-center gap-4">
            <MagneticButton
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              dataCursor="open"
              className="group px-5 py-2.5 rounded-full text-xs font-bold tracking-wider text-black bg-white hover:bg-[#38BDF8] transition-colors duration-400 shadow-lg shadow-white/5 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            >
              <span className="transition-colors duration-400">LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F5F5] hover:text-[#38BDF8] focus:outline-none transition-colors duration-300 rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0f172a]/95 backdrop-blur-xl pt-24 px-6 pb-8 md:hidden flex flex-col justify-between border-b border-[#222222]"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold tracking-widest text-[#666666] uppercase">
                Navigation
              </span>
              <nav className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-2xl font-bold tracking-tight transition-colors duration-300 flex items-center justify-between ${
                        isActive ? 'text-[#38BDF8]' : 'text-[#F5F5F5] hover:text-[#38BDF8]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs font-mono tracking-widest text-[#666666]">
                        {link.href}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#222222] flex flex-col gap-4">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-4 rounded-xl text-center text-sm font-bold tracking-wider text-black bg-white hover:bg-[#38BDF8] transition-colors duration-400 flex items-center justify-center gap-2"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex justify-between items-center text-xs text-[#A1A1A1] pt-2">
                <span>Ahmedabad, India</span>
                <span className="font-mono text-[#38BDF8]">React.js Developer</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
