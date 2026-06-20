import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

const BOTPRESS_URL =
  'https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/06/20/08/20260620082430-LLCDFGT4.json';

export default function AIAgentWidget() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [unRead, setUnRead] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Nudge hint after a short delay (first visit)
  useEffect(() => {
    const t1 = setTimeout(() => setShowHint(true), 4000);
    const t2 = setTimeout(() => setShowHint(false), 12000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const toggleOpen = () => {
    setOpen((v) => !v);
    setUnRead(false);
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop (mobile only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="sm:hidden fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="fixed bottom-24 right-3 sm:right-6 z-[60] w-[calc(100vw-1.5rem)] sm:w-[420px] h-[620px] max-h-[78vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 flex flex-col bg-dark-900"
            >
              {/* Header */}
              <div className="relative flex items-center justify-between px-5 py-4 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 flex-shrink-0 overflow-hidden">
                {/* decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-8 w-24 h-24 rounded-full bg-black/10 blur-2xl pointer-events-none" />

                <div className="relative flex items-center gap-3">
                  {/* Avatar with pulse dot */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/20">
                      <FaRobot className="w-5 h-5 text-white" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-primary-600" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm leading-tight">Uzair's AI Agent</p>
                    <p className="text-white/80 text-xs flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                      Online · Typically replies instantly
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="relative p-2 rounded-xl hover:bg-white/15 text-white/80 hover:text-white transition-all active:scale-90"
                  aria-label="Close chat"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Sub-header info bar */}
              <div className="flex items-center gap-2 px-5 py-2.5 bg-dark-850 border-b border-white/5 flex-shrink-0">
                <FaPaperPlane className="w-3 h-3 text-primary-400" />
                <p className="text-dark-300 text-xs">
                  Ask about Uzair's skills, projects, experience, or hire him
                </p>
              </div>

              {/* Iframe */}
              <div className="flex-1 bg-white">
                <iframe
                  ref={iframeRef}
                  src={BOTPRESS_URL}
                  title="Uzair's Personal AI Agent"
                  className="w-full h-full border-0"
                  allow="microphone;"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating bubble with notification badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 18 }}
        className="fixed bottom-5 right-3 sm:right-6 z-[60]"
      >
        {/* Nudge hint label */}
        <AnimatePresence>
          {showHint && !open && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="relative px-4 py-2.5 bg-dark-800 border border-white/10 rounded-2xl shadow-xl shadow-black/30">
                <p className="text-white text-sm font-medium leading-tight">Hi! Need info about Uzair?</p>
                <p className="text-primary-400 text-xs mt-0.5">Ask his AI Agent 🤖</p>
                {/* little arrow pointing right */}
                <span className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-dark-800 border-r border-b border-white/10 rotate-[-45deg]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse rings (only when closed) */}
        {!open && (
          <>
            <motion.span
              animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-primary-500"
            />
            <motion.span
              animate={{ scale: [1, 1.9], opacity: [0.35, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
              className="absolute inset-0 rounded-full bg-primary-400"
            />
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleOpen}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 shadow-2xl shadow-primary-600/40 flex items-center justify-center text-white ring-2 ring-white/20 active:ring-4 active:ring-primary-400/30 transition-all"
          aria-label={open ? 'Close AI Agent' : 'Open AI Agent'}
        >
          {/* glossy highlight */}
          <span className="absolute top-1.5 left-2 w-6 h-3 rounded-full bg-white/25 blur-[3px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative"
              >
                <FaTimes className="w-6 h-6" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="relative"
              >
                <FaRobot className="w-6 h-6" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* notification dot */}
          {unRead && !open && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: 'spring', stiffness: 380, damping: 14 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 ring-2 ring-dark-950 flex items-center justify-center"
            >
              <span className="w-2 h-2 rounded-full bg-white" />
            </motion.span>
          )}
        </motion.button>
      </motion.div>
    </>
  );
}
