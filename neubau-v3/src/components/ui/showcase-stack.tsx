'use client';

/**
 * ShowcaseStack — das Template-Muster für die Showcase-Boxen (github-/kaggle-showcase):
 * ein vertikaler Sticky-Stack. Jede Karte ist h-screen sticky top-0; beim Runterscrollen
 * legt sich die nächste Box über die vorige und die vorige skaliert leicht herunter.
 * 1:1 aus dem Original (ba9c9ef^), unverändert.
 */

import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, ReactNode, Children, createContext, useContext } from 'react';

// Keep context export for compatibility
export const StackContext = createContext(false);
export const useIsInStack = () => useContext(StackContext);

const StackCard = ({ children, index, totalCards, scrollProgress }: {
  children: ReactNode;
  index: number;
  totalCards: number;
  scrollProgress: MotionValue<number>;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  // Sanfter als im Original (0.05), weil bei fünf Karten die unterste sonst auf 0.75
  // schrumpft und der Stapel unruhig wirkt.
  const targetScale = 1 - (totalCards - index) * 0.03;
  const scale = useTransform(scrollProgress, [index * (1 / totalCards), 1], [1, targetScale]);

  // VERSATZ: jede Karte startet 72 px tiefer als die vorige, damit von jeder
  // darunterliegenden die oberste Zeile (Icon + Kicker) sichtbar bleibt — der Stapel
  // soll als Stapel lesbar sein. Der negative Startwert hält ihn dabei mittig.
  const versatz = index * 72;

  return (
    <div
      ref={container}
      data-stack-card
      className="h-screen flex items-center justify-center sticky top-0"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-12vh + ${versatz}px)`,
        }}
        className="relative w-full origin-top"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ShowcaseStack = ({ children }: { children: ReactNode }) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const childArray = Children.toArray(children);

  return (
    <div ref={container} className="relative w-full">
      {childArray.map((child, i) => (
        <StackCard
          key={i}
          index={i}
          totalCards={childArray.length}
          scrollProgress={scrollYProgress}
        >
          {child}
        </StackCard>
      ))}
    </div>
  );
};

export default ShowcaseStack;
