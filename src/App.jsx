import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import BackgroundFloating2D from './components/BackgroundFloating2D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DesignDevelopment from './components/DesignDevelopment';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Process from './components/Process';
import Education from './components/Education';
import ContactCTA from './components/ContactCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-[#F5F5F5] overflow-x-hidden selection:bg-[#38BDF8]/25 selection:text-white">
      {/* Minimal scroll progress bar at top with #38BDF8 */}
      <ScrollProgress />

      {/* Desktop-only upgraded custom cursor */}
      <CustomCursor />

      {/* 2D subtle background floating elements with mouse parallax */}
      <BackgroundFloating2D />

      {/* Sticky navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <DesignDevelopment />
        <Experience />
        <Projects />
        <Process />
        <Education />
        <ContactCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
