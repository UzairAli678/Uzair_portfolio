import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { FaGithub, FaCodeBranch, FaStar, FaCode } from 'react-icons/fa';

export default function GitHubStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cells = useMemo(() =>
    Array.from({ length: 91 }, () => Math.random()),
  []);

  const stats = [
    { icon: FaCode, value: '150+', label: 'Commits', color: 'from-blue-500 to-cyan-400' },
    { icon: FaCodeBranch, value: '15+', label: 'Repositories', color: 'from-purple-500 to-pink-400' },
    { icon: FaStar, value: '10+', label: 'Stars Received', color: 'from-yellow-500 to-orange-400' },
    { icon: FaGithub, value: '6+', label: 'ML Projects', color: 'from-green-500 to-teal-400' },
  ];

  return (
    <section id="github" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-white">GitHub </span>
            <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">Open-source contributions and coding activity</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass p-5 rounded-xl text-center group cursor-default"
              >
                <div className={`w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-dark-400 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-white text-sm">Contribution Graph</h3>
              <a
                href="https://github.com/UzairAli678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-dark-400 hover:text-primary-400 transition-colors"
              >
                <FaGithub className="w-3.5 h-3.5" /> View Profile
              </a>
            </div>

            <div className="grid grid-cols-13 gap-[3px]" style={{ gridTemplateColumns: 'repeat(13, minmax(0, 1fr))' }}>
              {cells.map((v, i) => {
                const bg = v < 0.25 ? 'bg-dark-800'
                  : v < 0.50 ? 'bg-primary-900/70'
                  : v < 0.70 ? 'bg-primary-700/70'
                  : v < 0.85 ? 'bg-primary-500/80'
                  : 'bg-primary-400';
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.003 }}
                    className={`w-full aspect-square rounded-sm ${bg} hover:ring-1 hover:ring-white/20 transition-all`}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-1.5 mt-4 text-xs text-dark-600">
              <span>Less</span>
              {['bg-dark-800', 'bg-primary-900/70', 'bg-primary-700/70', 'bg-primary-500', 'bg-primary-400'].map((bg, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${bg}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
