import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import { downloadPdf } from '../utils/downloadPdf';

const focusAreas = [
  { label: 'Python Development', desc: 'Advanced Python for ML, automation, and data pipelines' },
  { label: 'Machine Learning', desc: 'End-to-end ML pipelines — preprocessing to deployment' },
  { label: 'Deep Learning', desc: 'Neural networks with TensorFlow and PyTorch' },
  { label: 'Data Science', desc: 'Statistical analysis, EDA, and feature engineering' },
  { label: 'Computer Vision', desc: 'Image processing and vision models with OpenCV' },
  { label: 'Natural Language Processing', desc: 'Text analysis, summarization, and NLP pipelines' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/40 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building intelligent systems that solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-white leading-snug">
              AI Engineer & Python Developer
              <span className="gradient-text"> in the Making</span>
            </h3>

            <p className="text-dark-300 leading-relaxed">
              I am a Computer Science undergraduate at <span className="text-white font-medium">Sukkur IBA University</span> (CGPA: 3.76/4.0) with a deep passion for Artificial Intelligence and Machine Learning. My core expertise is in Python — building everything from exploratory data analysis pipelines to deployable ML models.
            </p>

            <p className="text-dark-400 leading-relaxed">
              I actively co-lead AI awareness at the <span className="text-white font-medium">Artificial Intelligence of Pakistan (AICP)</span>, organizing workshops and mentoring peers in Python and ML fundamentals. I also deliver freelance ML and data science solutions on Fiverr for international clients.
            </p>

            <p className="text-dark-400 leading-relaxed">
              My research interests span Deep Learning, Computer Vision, and NLP — I believe intelligent systems are the future, and I'm committed to being part of building them.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: '3.76', label: 'CGPA', suffix: '/4.0' },
                { value: '6+', label: 'ML Projects', suffix: '' },
                { value: '4+', label: 'Certifications', suffix: '' },
              ].map((stat) => (
                <div key={stat.label} className="glass p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}<span className="text-primary-400 text-sm">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-dark-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <motion.button
              onClick={() => downloadPdf(personalInfo.resume, 'Uzair_Ali_Resume.pdf')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white text-sm font-medium hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.button>
          </motion.div>

          {/* Right: Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-widest mb-6">Core Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="glass p-4 rounded-xl cursor-default"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0" />
                    <span className="text-sm font-semibold text-white">{area.label}</span>
                  </div>
                  <p className="text-xs text-dark-400 leading-relaxed pl-4">{area.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
