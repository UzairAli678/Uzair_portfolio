import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';
import { navLinks, personalInfo } from '../data/portfolio';
import { downloadPdf } from '../utils/downloadPdf';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const ids = navLinks.map(l => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => downloadPdf(personalInfo.resume, 'Uzair_Ali_Resume.pdf');

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-xl font-display font-bold gradient-text cursor-pointer select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Uzair Ali
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                  active === link.href.slice(1) ? 'text-primary-400' : 'text-dark-400 hover:text-white'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                {link.name}
                {active === link.href.slice(1) && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-sm text-dark-300 hover:text-white hover:border-dark-500 transition-all"
            >
              <FaDownload className="w-3 h-3" />
              Resume
            </motion.button>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all cursor-pointer"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-dark-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === link.href.slice(1)
                      ? 'bg-primary-500/10 text-primary-400'
                      : 'text-dark-300 hover:bg-white/5 hover:text-white'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex gap-2 pt-2">
                <motion.button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-xl text-sm text-white"
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload className="w-3 h-3" /> Resume
                </motion.button>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                  className="flex-1 flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl text-sm font-semibold text-white"
                  whileTap={{ scale: 0.98 }}
                >
                  Hire Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
