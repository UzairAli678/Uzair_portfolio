import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingScreen({ done }: { done: boolean }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-dark-950 flex flex-col items-center justify-center gap-4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-12 h-12 rounded-full border-2 border-dark-700 border-t-primary-500"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-dark-400 text-sm tracking-widest uppercase"
          >
            Loading Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-6 p-3 bg-primary-600 hover:bg-primary-500 rounded-xl text-white shadow-xl shadow-primary-500/30 z-40 transition-colors"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <LoadingScreen done={loaded} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Certifications />
        <Achievements />
        <GitHubStats />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
