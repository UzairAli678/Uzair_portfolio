import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { projects } from '../data/portfolio';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const CATEGORY_COLORS: Record<string, string> = {
  'Full Stack': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'AI / ML': 'bg-primary-500/20 text-primary-400 border-primary-500/30',
  'Data Science': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI / ML' | 'Data Science'>('All');

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const featured = filtered.filter(p => p.featured);
  const others = filtered.filter(p => !p.featured);
  const visibleOthers = showAll ? others : others.slice(0, 2);

  const filters = ['All', 'Full Stack', 'AI / ML', 'Data Science'] as const;

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Full-stack web apps, AI/ML systems, and data science solutions — built end-to-end
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setShowAll(false); }}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
                filter === f
                  ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/25'
                  : 'bg-dark-800 text-dark-400 border-dark-700 hover:text-white hover:border-dark-500'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
            ))}
          </div>
        )}

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-sm font-semibold text-dark-400 uppercase tracking-widest mb-5 text-center"
            >
              More Projects
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {visibleOthers.map((project, i) => (
                <SmallProjectCard key={project.id} project={project} index={i + featured.length} isInView={isInView} />
              ))}
            </div>
            {others.length > 2 && (
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2.5 bg-dark-800 border border-dark-700 rounded-xl text-sm text-dark-300 hover:text-white hover:border-dark-500 transition-all"
                >
                  {showAll ? 'Show Less' : `Show ${others.length - 2} More`}
                </motion.button>
              </div>
            )}
          </>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <motion.a
            href="https://github.com/UzairAli678"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white text-sm hover:border-primary-500/50 hover:bg-primary-500/5 transition-all"
          >
            <FaGithub className="w-4 h-4" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  category: string;
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const catStyle = CATEGORY_COLORS[project.category] ?? 'bg-dark-700 text-dark-300 border-dark-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />

          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="px-2.5 py-1 bg-primary-500/90 text-xs font-semibold text-white rounded-full">
              Featured
            </span>
            <span className={`px-2.5 py-1 border text-xs font-semibold rounded-full backdrop-blur-sm ${catStyle}`}>
              {project.category}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            className="absolute inset-0 bg-dark-900/75 flex items-center justify-center gap-3"
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            {project.demo && project.demo !== project.github && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-semibold text-white group-hover:text-primary-400 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-dark-400 text-sm leading-relaxed flex-1 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map(t => (
              <span key={t} className="px-2 py-0.5 bg-dark-800 border border-dark-700 rounded text-xs text-dark-400">
                {t}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 bg-dark-800 border border-dark-700 rounded text-xs text-dark-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5" />
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function SmallProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const catStyle = CATEGORY_COLORS[project.category] ?? 'bg-dark-700 text-dark-300 border-dark-600';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -3 }}
      className="group"
    >
      <div className="glass p-5 rounded-xl hover:border-primary-500/25 transition-all h-full">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors text-sm">
                {project.title}
              </h4>
              <span className={`px-2 py-0.5 border text-xs rounded-full ${catStyle}`}>
                {project.category}
              </span>
            </div>
            <p className="text-dark-400 text-xs leading-relaxed mb-3 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map(t => (
                <span key={t} className="px-2 py-0.5 bg-dark-800 rounded text-xs text-dark-500">{t}</span>
              ))}
            </div>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-dark-500 hover:text-white transition-colors flex-shrink-0"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
