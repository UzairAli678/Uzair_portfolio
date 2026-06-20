import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import { HiPaperAirplane } from 'react-icons/hi';
import { socialLinks, personalInfo } from '../data/portfolio';

const contactChannels = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: personalInfo.email,
    href: socialLinks.email,
    desc: 'Reach me directly',
    gradient: 'from-red-500 to-orange-400',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+92-305-8044434',
    href: socialLinks.whatsapp,
    desc: 'Quick replies on WhatsApp',
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    icon: SiFiverr,
    label: 'Fiverr',
    value: 'ml_by_uzair',
    href: socialLinks.fiverr,
    desc: 'Hire me for ML projects',
    gradient: 'from-green-600 to-teal-400',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Uzair Ali',
    href: socialLinks.linkedin,
    desc: 'Connect professionally',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'UzairAli678',
    href: socialLinks.github,
    desc: 'View my open-source work',
    gradient: 'from-gray-600 to-gray-400',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, freelance AI/ML projects, and collaboration opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-xl font-display font-semibold text-white mb-6">Contact Channels</h3>
            {contactChannels.map((ch, i) => (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.07 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-white/15 transition-all group"
              >
                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${ch.gradient} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <ch.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-dark-500 mb-0.5">{ch.label}</p>
                  <p className="text-white text-sm font-medium truncate">{ch.value}</p>
                  <p className="text-dark-500 text-xs">{ch.desc}</p>
                </div>
                <svg className="w-4 h-4 text-dark-600 group-hover:text-primary-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="glass p-6 rounded-2xl space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-dark-400 mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs text-dark-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-dark-400 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={e => setForm(p => ({ ...p, subject: e.target.value }))}
                  className="w-full px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 transition-colors"
                  placeholder="Project Inquiry / Internship Opportunity"
                />
              </div>

              <div>
                <label className="block text-xs text-dark-400 mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-2.5 bg-dark-800/60 border border-dark-700 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 transition-colors resize-none"
                  placeholder="Describe your project or opportunity..."
                />
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm text-center"
                >
                  Message sent! I'll get back to you shortly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <HiPaperAirplane className="w-4 h-4" />
                )}
                {submitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
