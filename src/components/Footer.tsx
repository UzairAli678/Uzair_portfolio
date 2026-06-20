import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaHeart, FaDownload } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { personalInfo, socialLinks, navLinks } from '../data/portfolio';
import { downloadPdf } from '../utils/downloadPdf';

const socials = [
  { icon: FaGithub, href: socialLinks.github, label: 'GitHub' },
  { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
  { icon: SiFiverr, href: socialLinks.fiverr, label: 'Fiverr' },
  { icon: FaWhatsapp, href: socialLinks.whatsapp, label: 'WhatsApp' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8">
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-display font-bold gradient-text inline-block mb-3">
              Uzair Ali
            </a>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              CS Student · Python Developer · AI & ML Enthusiast
              <br />
              Building intelligent systems from Karachi, Pakistan.
            </p>
            <div className="flex gap-2">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-dark-800 border border-dark-700 rounded-lg text-dark-400 hover:text-white hover:border-dark-500 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="text-dark-400 text-sm hover:text-primary-400 transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resume & Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 uppercase tracking-widest">Quick Links</h3>
            <div className="space-y-3">
              <motion.button
                onClick={() => downloadPdf(personalInfo.resume, 'Uzair_Ali_Resume.pdf')}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-dark-400 text-sm hover:text-primary-400 transition-colors"
              >
                <FaDownload className="w-3.5 h-3.5" />
                Download Resume
              </motion.button>
              <motion.a
                href={socialLinks.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-dark-400 text-sm hover:text-green-400 transition-colors"
              >
                <SiFiverr className="w-3.5 h-3.5" />
                Hire on Fiverr
              </motion.a>
              <motion.a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-dark-400 text-sm hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="w-3.5 h-3.5" />
                WhatsApp Chat
              </motion.a>
              <motion.a
                href={socialLinks.email}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-dark-400 text-sm hover:text-primary-400 transition-colors"
              >
                <span className="text-xs">@</span>
                {personalInfo.email}
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-dark-800/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-dark-600 text-xs">
            &copy; {year} Uzair Ali. All rights reserved.
          </p>
          <p className="text-dark-600 text-xs flex items-center gap-1">
            Built with <FaHeart className="w-3 h-3 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
