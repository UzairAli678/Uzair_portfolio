import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowDown, FaDownload } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { personalInfo, socialLinks } from '../data/portfolio';
import { downloadPdf } from '../utils/downloadPdf';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.08),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Subtle orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary-700/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm text-primary-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Open to Internships & Freelance Work
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-5 leading-tight"
            >
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="gradient-text">Uzair Ali</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-dark-300 font-medium mb-4"
            >
              Computer Science Student · Python Developer · Full Stack Developer
              <br />
              <span className="text-primary-400">AI & Machine Learning Enthusiast</span>
            </motion.p>

            {/* Specialisms row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {['Python', 'Machine Learning', 'React.js', 'Node.js', 'Deep Learning', 'Data Science'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-dark-800/60 border border-dark-700 rounded-full text-xs text-dark-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              {[
                { icon: FaGithub, href: socialLinks.github, label: 'GitHub', color: 'hover:text-white hover:border-white/40' },
                { icon: FaLinkedin, href: socialLinks.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/40' },
                { icon: SiFiverr, href: socialLinks.fiverr, label: 'Fiverr', color: 'hover:text-green-400 hover:border-green-400/40' },
                { icon: FaWhatsapp, href: socialLinks.whatsapp, label: 'WhatsApp', color: 'hover:text-green-500 hover:border-green-500/40' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2.5 bg-dark-800/50 border border-dark-700 rounded-xl text-dark-400 text-sm transition-all ${s.color}`}
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.button
                onClick={() => scrollTo('projects')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => downloadPdf(personalInfo.resume, 'Uzair_Ali_Resume.pdf')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dark-800 border border-dark-600 rounded-xl font-semibold text-white hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/20"
              />
              {/* Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-600/20 to-accent-cyan/20 blur-2xl" />
              {/* Image */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-dark-700/50 shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Corner badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass px-4 py-2.5 rounded-xl shadow-lg"
              >
                <p className="text-xs text-dark-400">CGPA</p>
                <p className="text-lg font-bold text-white">3.76<span className="text-primary-400 text-sm">/4.0</span></p>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass px-4 py-2.5 rounded-xl shadow-lg"
              >
                <p className="text-xs text-dark-400">Focus</p>
                <p className="text-sm font-semibold text-primary-400">AI / ML</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-500 hover:text-primary-400 transition-colors cursor-pointer"
      >
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-1">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <FaArrowDown className="w-3 h-3" />
        </motion.div>
      </motion.button>
    </section>
  );
}
