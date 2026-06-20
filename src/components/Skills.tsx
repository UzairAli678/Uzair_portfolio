import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/portfolio';
import {
  SiPython, SiCplusplus, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiMongodb, SiNumpy, SiPandas, SiScikitlearn,
  SiTensorflow, SiPytorch, SiOpencv, SiStreamlit, SiGit, SiGithub,
  SiJupyter,
} from 'react-icons/si';
import { FaBrain, FaJava, FaCode, FaRobot, FaEye, FaLanguage, FaDatabase } from 'react-icons/fa';
import { HiChip } from 'react-icons/hi';

type IconComponent = React.ComponentType<{ className?: string }>;

const skillIconMap: Record<string, IconComponent> = {
  Python: SiPython,
  'C++': SiCplusplus,
  SQL: FaDatabase,
  MongoDB: SiMongodb,
  Java: FaJava,
  JavaScript: SiJavascript,
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Machine Learning': FaBrain,
  'Deep Learning': HiChip,
  'Neural Networks': HiChip,
  'Computer Vision': FaEye,
  NLP: FaLanguage,
  'Model Training': FaRobot,
  'Data Analysis': FaCode,
  'Feature Engineering': FaCode,
  NumPy: SiNumpy,
  Pandas: SiPandas,
  Matplotlib: FaCode,
  'Scikit-learn': SiScikitlearn,
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  OpenCV: SiOpencv,
  Streamlit: SiStreamlit,
  Seaborn: FaCode,
  Git: SiGit,
  GitHub: SiGithub,
  'Jupyter Notebook': SiJupyter,
  'VS Code': FaCode,
  'Microsoft Office': FaCode,
};

const categories = [
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    badge: 'Primary',
    badgeColor: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'group-hover:shadow-blue-500/10',
    skills: skills.aiml,
    priority: true,
  },
  {
    id: 'libs',
    title: 'Libraries & Frameworks',
    badge: 'Primary',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30',
    gradient: 'from-cyan-500 to-teal-400',
    glow: 'group-hover:shadow-cyan-500/10',
    skills: skills.librariesFrameworks,
    priority: true,
  },
  {
    id: 'prog',
    title: 'Programming Languages',
    badge: 'Secondary',
    badgeColor: 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
    gradient: 'from-purple-500 to-indigo-400',
    glow: 'group-hover:shadow-purple-500/10',
    skills: skills.programming,
    priority: false,
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    badge: 'Secondary',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
    gradient: 'from-emerald-500 to-green-400',
    glow: 'group-hover:shadow-emerald-500/10',
    skills: skills.tools,
    priority: false,
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="text-white">Technical </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            AI & Machine Learning first — Python is my primary language
          </p>
        </motion.div>

        {/* Primary skills (2-col wide on md+) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {categories.filter(c => c.priority).map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} index={i} isInView={isInView} iconMap={skillIconMap} />
          ))}
        </div>

        {/* Secondary skills */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.filter(c => !c.priority).map((cat, i) => (
            <SkillCard key={cat.id} cat={cat} index={i + 2} isInView={isInView} iconMap={skillIconMap} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  cat: typeof categories[0];
  index: number;
  isInView: boolean;
  iconMap: Record<string, IconComponent>;
}

function SkillCard({ cat, index, isInView, iconMap }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className={`glass p-6 rounded-2xl h-full transition-all duration-300 hover:shadow-xl ${cat.glow}`}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center`}>
              <div className="w-2.5 h-2.5 rounded-full bg-white/90" />
            </div>
            <h3 className="font-display font-semibold text-white">{cat.title}</h3>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${cat.badgeColor}`}>
            {cat.badge}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {cat.skills.map((skill, si) => {
            const Icon = iconMap[skill];
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.08 + si * 0.04 }}
                whileHover={{ scale: 1.05, y: -1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-dark-800/60 border border-dark-700 rounded-lg text-sm text-dark-200 hover:border-primary-500/40 hover:text-white transition-all cursor-default"
              >
                {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
                <span>{skill}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
