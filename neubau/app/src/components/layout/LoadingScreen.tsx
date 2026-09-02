'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
  onExitStart?: () => void;
  /** Gesamtdauer der Einblendung in ms — Storyboard: unter 1,5 s */
  duration?: number;
  /** Text des Preloader-Moments — Storyboard: die Hero-Headline statt "Hallo" */
  text?: string;
}

export function LoadingScreen({
  onComplete,
  onExitStart,
  duration = 1100,
  text = 'Technik mit Auftrag.',
}: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const reduceMotion = useReducedMotion();

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsLoading(false);
      onExitStart?.();
      setTimeout(() => onComplete?.(), reduceMotion ? 0 : 900);
    }, reduceMotion ? 0 : 200);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: reduceMotion ? 0 : 0.9, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-background will-change-transform"
          aria-hidden="true"
        >
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.4 } }}
            transition={{ duration: reduceMotion ? 0 : Math.min(1.1, duration / 1000), ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={handleAnimationComplete}
            className="text-shiny px-6 text-center text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl"
          >
            {text}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
