'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { Kachel } from '@/data/portfolio-content';

// Die 3D-Boxen der Vorversion, zwei Reihen: Disziplinen und was daraus entsteht.
export function KachelReihe({ kacheln, start = 0 }: { kacheln: Kachel[]; start?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kacheln.map((kachel, i) => (
        <motion.div
          key={kachel.name}
          initial={reduceMotion ? false : { opacity: 0, y: 26, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformPerspective: 900 }}
          className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-foreground/25"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {String(start + i + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-3 text-lg font-bold tracking-tight">{kachel.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/70">{kachel.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
