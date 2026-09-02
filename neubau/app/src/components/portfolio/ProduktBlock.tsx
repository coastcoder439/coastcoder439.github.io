'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Produkt } from '@/data/portfolio-content';
import { ShowcaseFrame } from '@/components/portfolio/ShowcaseFrame';

// Ein Produkt = ein Block im Scrollfluss (kein Slider, Storyboard v4.6).
// Zeigt entweder den eingebetteten Showcase oder ehrlich nur Text.
export function ProduktBlock({ produkt, index }: { produkt: Produkt; index: number }) {
  const reduceMotion = useReducedMotion();
  const hatFrame = produkt.showcase.kind === 'iframe';

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`grid items-start gap-8 border-t border-foreground/10 py-12 md:py-16 ${
        hatFrame ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]' : 'md:grid-cols-[minmax(0,1fr)]'
      }`}
    >
      <div className={hatFrame ? '' : 'max-w-[70ch]'}>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">{produkt.name}</h3>
        <p className="mt-4 max-w-[60ch] text-base leading-relaxed text-foreground/75">
          {produkt.text}
        </p>
      </div>

      {produkt.showcase.kind === 'iframe' ? (
        <ShowcaseFrame
          url={produkt.showcase.url}
          title={produkt.showcase.title}
          note={produkt.showcase.note}
        />
      ) : null}
    </motion.article>
  );
}
