import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { achievements } from '../data/portfolio';
import { HiAcademicCap, HiLightningBolt, HiCode, HiCurrencyDollar } from 'react-icons/hi';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  academic: HiAcademicCap,
  leadership: HiLightningBolt,
  hackathon: HiCode,
  freelance: HiCurrencyDollar,
};

const gradients = [
  'from-primary-500 to-cyan-400',
  'from-purple-500 to-primary-500',
  'from-orange-500 to-yellow-400',
  'from-green-500 to-emerald-400',
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <h2 className="section-title">
            <span className="text-white">Key </span>
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Milestones in AI research, academics, and professional development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] ?? HiAcademicCap;
            const gradient = gradients[i % gradients.length];
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="glass p-6 rounded-2xl h-full hover:border-white/15 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm leading-snug group-hover:text-primary-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-dark-400 text-xs leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
