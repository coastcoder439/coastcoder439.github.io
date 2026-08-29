'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { KeyboardEvent, ReactNode, UIEvent } from 'react';
import { useCallback, useId, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ProjectRailProps = {
  id?: string;
  number: string;
  kicker: string;
  title: ReactNode;
  intro: string;
  count: number;
  className?: string;
  children: ReactNode;
};

export function ProjectRail({ id, number, kicker, title, intro, count, className, children }: ProjectRailProps) {
  const headingId = useId();
  const viewportRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const cards = useCallback(() => {
    if (!viewportRef.current) return [] as HTMLElement[];
    return Array.from(viewportRef.current.querySelectorAll<HTMLElement>('[data-project-card]'));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const items = cards();
      if (!items.length) return;
      const safeIndex = Math.max(0, Math.min(items.length - 1, index));
      items[safeIndex].scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'start',
      });
      setCurrent(safeIndex);
    },
    [cards],
  );

  function handleScroll(event: UIEvent<HTMLElement>) {
    const viewport = event.currentTarget;
    const maximum = viewport.scrollWidth - viewport.clientWidth;
    setProgress(maximum > 0 ? viewport.scrollLeft / maximum : 0);

    const items = cards();
    const nearest = maximum > 0 ? Math.round((viewport.scrollLeft / maximum) * Math.max(0, items.length - 1)) : 0;
    setCurrent(nearest);
  }

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(current + 1);
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(current - 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      goTo(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      goTo(count - 1);
    }
  }

  return (
    <section id={id} aria-labelledby={headingId} className={cn('scroll-mt-4 border-b border-line py-20 sm:py-28', className)}>
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-7 border-t border-current/25 pt-5 lg:grid-cols-[minmax(12rem,0.55fr)_minmax(0,1.45fr)] lg:gap-12">
          <div>
            <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] opacity-55">
              {number} · {kicker}
            </p>
            <p className="mt-5 max-w-[24rem] text-sm leading-relaxed opacity-65">{intro}</p>
          </div>
          <h2
            id={headingId}
            className="font-display text-[clamp(2.7rem,6.6vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.07em]"
          >
            {title}
          </h2>
        </div>

        <div className="mt-11 grid gap-5 sm:mt-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div className="h-px overflow-hidden bg-current/20" aria-hidden="true">
            <div
              className="h-full origin-left bg-current transition-transform duration-200"
              style={{ transform: `scaleX(${Math.max(0.035, progress)})` }}
            />
          </div>
          <div className="flex items-center justify-between gap-5 sm:justify-end">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em]" aria-live="polite">
              {String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                onClick={() => goTo(current - 1)}
                onKeyDown={handleKeys}
                disabled={current === 0}
                aria-label={`Vorheriges Projekt in ${kicker}`}
                className="size-12 rounded-none border-current bg-transparent hover:bg-current hover:text-background"
              >
                <ArrowLeft aria-hidden="true" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                onClick={() => goTo(current + 1)}
                onKeyDown={handleKeys}
                disabled={current === count - 1}
                aria-label={`Nächstes Projekt in ${kicker}`}
                className="size-12 rounded-none border-current bg-transparent hover:bg-current hover:text-background"
              >
                <ArrowRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section
        ref={viewportRef}
        aria-roledescription="Karussell"
        aria-labelledby={headingId}
        onScroll={handleScroll}
        className="project-rail mt-6 overflow-x-auto overscroll-x-contain px-5 pb-7 pt-1 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal sm:px-8 lg:px-[max(3rem,calc((100vw-1600px)/2+3rem))]"
      >
        <ol className="flex w-max items-stretch gap-5 sm:gap-7">{children}</ol>
      </section>
    </section>
  );
}

type ProjectCardProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
};

export function ProjectCard({ children, className, ariaLabel }: ProjectCardProps) {
  return (
    <li
      data-project-card
      aria-label={ariaLabel}
      className={cn(
        'w-[86vw] max-w-[49rem] shrink-0 snap-start scroll-ml-5 border border-current bg-card text-card-foreground sm:w-[72vw] sm:scroll-ml-8 lg:w-[min(49rem,61vw)] lg:scroll-ml-12',
        className,
      )}
    >
      {children}
    </li>
  );
}
