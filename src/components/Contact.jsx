import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { GithubIcon, LinkedinIcon, BehanceIcon } from './SocialIcons';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { fadeInUp, staggerContainer } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Using the Service ID provided by you
    emailjs.send(
      'service_iohgvto', 
      'template_uv55d5m', // User's actual Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'shahkevin1911@gmail.com'
      },
      'UXNVQVcMqjvXA1bA4' // User's actual Public Key
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again later.');
    });
  };

  const SOCIAL_CHANNELS = [
    {
      name: 'GitHub',
      handle: 'shahKEVIN123',
      url: 'https://github.com/shahKEVIN123/',
      icon: GithubIcon,
      microClass: 'group-hover:rotate-12 group-hover:scale-110',
    },
    {
      name: 'LinkedIn',
      handle: 'shah-kevin-492185382',
      url: 'https://www.linkedin.com/in/shah-kevin-492185382/',
      icon: LinkedinIcon,
      microClass: 'group-hover:-translate-y-1 group-hover:scale-110',
    },
    {
      name: 'Behance',
      handle: 'kevinshah26',
      url: 'https://www.behance.net/kevinshah26',
      icon: BehanceIcon,
      microClass: 'group-hover:-translate-y-1 group-hover:scale-110',
    }
  ];

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0f172a] relative border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-[#666666]">08</span>
          <span className="w-8 h-[1px] bg-[#333333]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#A1A1A1] uppercase">GET IN TOUCH</span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] mb-6 select-none flex flex-wrap items-center gap-x-3 gap-y-1">
            LET'S 
            <span className="text-white hover:text-[#38BDF8] transition-colors duration-400 cursor-default">
              CONNECT.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed">
            Have a project, opportunity or idea? Let's build something meaningful together. Reach out directly or send a message below.
          </p>
        </motion.div>

        {/* Grid: Direct Contact Info (Left) + Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Left Column: Direct Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              
              {/* Email Card */}
              <motion.a
                variants={fadeInUp}
                href="mailto:shahkevin1911@gmail.com"
                className="p-6 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/50 hover:bg-[#0D0D0D] transition-all duration-400 flex items-start gap-4 group hover:-translate-y-1 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#262626] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-white group-hover:text-[#38BDF8] flex-shrink-0 transition-all duration-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400 mb-1">
                    Direct Email
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-400 break-all">
                    shahkevin1911@gmail.com
                  </div>
                  <div className="text-xs text-[#888888] mt-1">
                    Click to compose message
                  </div>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                variants={fadeInUp}
                href="tel:9328054690"
                className="p-6 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/50 hover:bg-[#0D0D0D] transition-all duration-400 flex items-start gap-4 group hover:-translate-y-1 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.08)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#262626] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-white group-hover:text-[#38BDF8] flex-shrink-0 transition-all duration-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#666666] group-hover:text-[#38BDF8] transition-colors duration-400 mb-1">
                    Direct Telephone
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-400">
                    +91 93280 54690
                  </div>
                  <div className="text-xs text-[#888888] mt-1">
                    Available for calls and messages
                  </div>
                </div>
              </motion.a>

              {/* Location Card */}
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-[#1e293b] border border-[#222222] flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center text-[#888888] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#666666] mb-1">
                    Current Location
                  </div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    Ahmedabad, Gujarat, India
                  </div>
                  <div className="text-xs text-[#888888] mt-1 font-mono">
                    PIN: 380013
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Form with React Validation & Magnetic Submit */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#1e293b] border border-[#222222] shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-[#888888] mb-8">
                Fill in your details below and I will respond to your message promptly.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#38BDF8]/5 border border-[#38BDF8]/30 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center mx-auto text-[#38BDF8] shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold text-white">
                    Message Sent Successfully!
                  </div>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-md mx-auto">
                    Thank you for reaching out! Kevin has received your message and will get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#38BDF8] hover:text-black border border-[#333333] text-xs font-semibold text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
                      Your Name <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#111111] border text-sm text-white placeholder-[#555555] focus:outline-none transition-all duration-300 ${
                        errors.name
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-[#222222] focus:border-[#38BDF8]/80 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
                      Email Address <span className="text-[#38BDF8]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#111111] border text-sm text-white placeholder-[#555555] focus:outline-none transition-all duration-300 ${
                        errors.email
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-[#222222] focus:border-[#38BDF8]/80 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#A1A1A1] mb-2">
                      Your Message <span className="text-[#38BDF8]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, team opportunity, or inquiry..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#111111] border text-sm text-white placeholder-[#555555] focus:outline-none resize-none transition-all duration-300 ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-500'
                          : 'border-[#222222] focus:border-[#38BDF8]/80 focus:shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Magnetic Submit Button */}
                  <MagneticButton
                    type="submit"
                    disabled={isSubmitting}
                    dataCursor="open"
                    className="w-full py-4 rounded-xl text-sm font-extrabold tracking-wider text-black bg-white hover:bg-[#38BDF8] transition-all duration-400 flex items-center justify-center gap-3 shadow-lg shadow-white/5 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </div>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </MagneticButton>

                </form>
              )}
            </div>
          </motion.div>

        </div>

        {/* Final Social Connect Section as requested */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="pt-16 border-t border-[#1A1A1A]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase mb-2">
                LET'S CONNECT
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Find Me On Professional Platforms
              </h3>
            </div>
            <p className="text-sm text-[#888888] max-w-md">
              Follow my open-source work, connect on professional networks, or review design case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SOCIAL_CHANNELS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="open"
                  className="p-6 rounded-2xl bg-[#1e293b] border border-[#222222] hover:border-[#38BDF8]/50 hover:bg-[#0D0D0D] transition-all duration-400 group flex items-center justify-between shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.08)] hover:-translate-y-1.5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#262626] group-hover:border-[#38BDF8]/40 flex items-center justify-center text-[#A1A1A1] group-hover:text-[#38BDF8] transition-all duration-400">
                      <Icon className={`w-5 h-5 transition-transform duration-300 ${social.microClass}`} />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-400">
                        {social.name}
                      </div>
                      <div className="text-xs font-mono text-[#666666] group-hover:text-[#A1A1A1] transition-colors duration-400">
                        {social.handle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#444444] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
