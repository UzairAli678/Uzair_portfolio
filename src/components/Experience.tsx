import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experience, education } from '../data/portfolio';
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi';

const typeColors: Record<string, string> = {
  Leadership: 'bg-primary-500/15 text-primary-400 border-primary-500/30',
  Ambassador: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  Freelance: 'bg-green-500/15 text-green-400 border-green-500/30',
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/40 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-white">Experience & </span>
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">My professional journey and academic background</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center">
                <HiBriefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Work & Leadership</h3>
            </div>

            <div className="space-y-5">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="relative pl-7"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/60 to-transparent" />
                  <div className="absolute left-0 top-3 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary-500 border-2 border-dark-900" />

                  <div className="glass p-5 rounded-xl hover:border-primary-500/25 transition-all group">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${typeColors[exp.type] ?? 'bg-dark-800 text-dark-400 border-dark-700'}`}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-primary-400 text-sm font-medium">{exp.company}</p>
                      <span className="text-xs text-dark-500">{exp.duration}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a, ai) => (
                        <li key={ai} className="flex items-start gap-2 text-sm text-dark-400">
                          <span className="w-1 h-1 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-primary-500 flex items-center justify-center">
                <HiAcademicCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white">Education</h3>
            </div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.1 }}
                className="relative pl-7"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/60 to-transparent" />
                <div className="absolute left-0 top-3 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-purple-500 border-2 border-dark-900" />

                <div className="glass p-5 rounded-xl hover:border-purple-500/25 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <span className="text-xs text-dark-500">{edu.duration}</span>
                  </div>
                  <p className="text-purple-400 text-sm font-medium mb-2">{edu.institution}</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-500/10 border border-primary-500/20 rounded-lg mb-3">
                    <span className="text-xs text-dark-400">CGPA</span>
                    <span className="text-sm font-bold text-primary-400">{edu.cgpa}</span>
                  </div>
                  <p className="text-dark-400 text-sm">{edu.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Interests Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-5 glass p-5 rounded-xl"
            >
              <h4 className="text-sm font-semibold text-dark-400 uppercase tracking-widest mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Solving Complex Problems', 'AI Research & Trends', 'TED Talks', 'Real-World Experiences'].map(item => (
                  <span key={item} className="text-xs px-3 py-1.5 bg-dark-800 border border-dark-700 rounded-full text-dark-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
