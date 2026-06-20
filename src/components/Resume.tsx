import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import { downloadPdf } from '../utils/downloadPdf';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    { label: 'CGPA', value: '3.76 / 4.00' },
    { label: 'Degree', value: 'BS Computer Science' },
    { label: 'Institution', value: 'Sukkur IBA University' },
    { label: 'Focus', value: 'AI & Machine Learning' },
  ];

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/40 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-white">My </span>
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subtitle">
            A summary of my academic background, skills, and project experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="glass p-4 rounded-xl"
                >
                  <p className="text-xs text-dark-500 mb-1">{h.label}</p>
                  <p className="text-sm font-semibold text-white">{h.value}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-dark-300 text-sm leading-relaxed">
              My resume details my academic background at Sukkur IBA University, professional roles at AICP and ETL Pakistan, and hands-on AI/ML projects including AQI prediction, travel budget planning, and data science analyses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => downloadPdf(personalInfo.resume, 'Uzair_Ali_Resume.pdf')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FaDownload className="w-4 h-4" />
                Download Resume
              </motion.button>
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FaEye className="w-4 h-4" />
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Visual Resume Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="glass p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-cyan to-accent-purple" />

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-white">UZAIR ALI</h3>
                <p className="text-primary-400 text-sm mt-1">Python Developer · AI & ML Engineer</p>
              </div>

              <div className="space-y-3">
                {[
                  { section: 'EDUCATION', text: 'BS Computer Science · Sukkur IBA (CGPA 3.76)' },
                  { section: 'EXPERIENCE', text: 'AICP Co-Lead · ETL Ambassador · Fiverr Freelancer' },
                  { section: 'SKILLS', text: 'Python · Scikit-learn · TensorFlow · Pandas · Streamlit' },
                  { section: 'PROJECTS', text: 'DevSync Platform · AQI Predictor · AI Budget Planner · Task Manager' },
                  { section: 'CERTS', text: 'Google AI Essentials · ML with Python · NVIDIA GenAI' },
                ].map((row) => (
                  <div key={row.section} className="flex gap-3 text-sm">
                    <span className="text-primary-400 font-semibold w-24 flex-shrink-0 text-xs pt-0.5">{row.section}</span>
                    <span className="text-dark-300 leading-relaxed">{row.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-dark-700 flex justify-center">
                <motion.button
                  onClick={() => downloadPdf(personalInfo.resume, 'Uzair_Ali_Resume.pdf')}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg text-sm font-semibold text-white shadow-lg shadow-primary-500/25"
                >
                  <FaDownload className="w-3.5 h-3.5" />
                  Download Full Resume
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
