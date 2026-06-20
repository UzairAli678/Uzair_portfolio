import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { certifications } from '../data/portfolio';
import { HiBadgeCheck } from 'react-icons/hi';

const issuerColors: Record<string, string> = {
  'IBM / Coursera': 'from-blue-600 to-blue-400',
  Google: 'from-green-600 to-emerald-400',
  NVIDIA: 'from-emerald-600 to-green-400',
  'Cisco Networking Academy': 'from-blue-700 to-cyan-400',
};

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/40 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-white">Certifications & </span>
            <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-subtitle">
            Verified credentials from leading technology organizations
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => {
            const gradient = issuerColors[cert.issuer] ?? 'from-primary-600 to-cyan-500';
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="glass p-5 rounded-xl h-full hover:border-white/15 transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <HiBadgeCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors leading-snug mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-dark-400">{cert.issuer}</p>
                      <p className="text-xs text-dark-600 mt-0.5">{cert.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* More certs note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-dark-500 text-sm mt-8"
        >
          + Additional AI & Data Science certifications. More being added regularly.
        </motion.p>
      </div>
    </section>
  );
}
