import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/portfolio';
import { FaBrain, FaChartBar, FaPython, FaRobot, FaGlobe } from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  web: FaGlobe,
  ml: FaBrain,
  data: FaChartBar,
  python: FaPython,
  ai: FaRobot,
};

const gradients = [
  'from-teal-500 to-emerald-400',
  'from-blue-500 to-cyan-400',
  'from-yellow-500 to-orange-400',
  'from-pink-500 to-rose-400',
  'from-green-500 to-teal-400',
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/40 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-white">Services I </span>
            <span className="gradient-text">Offer</span>
          </h2>
          <p className="section-subtitle">
            Specialized AI & Python development services for internships and freelance work
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] ?? FaBrain;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass p-6 rounded-2xl h-full hover:border-white/15 transition-all relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
