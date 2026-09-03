"use client";

/**
 * Projekt-Anzeige auf Basis der 21st „Animated Slideshow" (HoverSlider):
 * links alle Projektnamen (kompakt, hover-gesteuert), rechts das Live-iframe des
 * aktiven Projekts (keine Screenshots — Owner-Regel). Text-only-Projekte zeigen
 * im Panel ihre Beschreibung statt eines iframes.
 * v3: alle Projekte in EINER Liste, mit Gruppen-Label (Ursprung · Praxis · Keel)
 * vor dem jeweils ersten Eintrag einer Gruppe; Panel rechts läuft sticky mit.
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  HoverSlider,
  TextStaggerHover,
  HoverSliderImageWrap,
  useHoverSliderContext,
  clipPathVariants,
} from "@/components/blocks/animated-slideshow";
import { cn } from "@/lib/utils";

export type ShowcaseProject = {
  id: string;
  name: string;
  desc: string;
  url?: string; // Vercel-iframe; fehlt bei „nur Text"
  tag: string; // z. B. „iframe · Prototyp" / „nur Text"
  group?: string; // Gruppen-Label, erscheint vor dem ersten Eintrag der Gruppe
};

// Rechtes Panel: iframe des aktiven Projekts (lazy — nur besuchte laden).
function ShowcasePanel({ projects }: { projects: ShowcaseProject[] }) {
  const { activeSlide } = useHoverSliderContext();
  const [loaded, setLoaded] = React.useState<Set<number>>(new Set([0]));

  React.useEffect(() => {
    setLoaded((prev) => (prev.has(activeSlide) ? prev : new Set(prev).add(activeSlide)));
  }, [activeSlide]);

  return (
    <HoverSliderImageWrap className="w-full rounded-xl border border-foreground/12 bg-background shadow-xl">
      {projects.map((p, i) => (
        <motion.div
          key={p.id}
          transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
          variants={clipPathVariants}
          animate={activeSlide === i ? "visible" : "hidden"}
          className="overflow-hidden"
        >
          {p.url ? (
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2 border-b border-foreground/10 bg-foreground/[0.03] px-4 py-2.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-amber-400/70" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                <span className="ml-3 truncate font-mono text-[11px] text-muted-foreground">
                  {p.url.replace(/^https?:\/\//, "")}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
                >
                  live <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
              {loaded.has(i) ? (
                <iframe
                  src={p.url}
                  title={p.name}
                  loading="lazy"
                  className="h-[58vh] min-h-[380px] w-full bg-white"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              ) : (
                <div className="grid h-[58vh] min-h-[380px] w-full place-content-center bg-foreground/[0.02] text-sm text-muted-foreground">
                  Vorschau lädt beim Aufruf…
                </div>
              )}
            </div>
          ) : (
            <div className="grid h-[58vh] min-h-[380px] w-full place-content-center gap-3 bg-foreground/[0.02] px-10 text-center">
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {p.tag}
              </span>
              <p className="mx-auto max-w-[46ch] text-lg leading-relaxed text-foreground/80">
                {p.desc}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </HoverSliderImageWrap>
  );
}

// Beschreibung des aktiven Projekts unter der Namensliste.
function ActiveDesc({ projects }: { projects: ShowcaseProject[] }) {
  const { activeSlide } = useHoverSliderContext();
  const p = projects[Math.min(activeSlide, projects.length - 1)];
  return (
    <div className="mt-8 min-h-[7rem] max-w-[48ch]">
      <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{p.tag}</span>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground">{p.desc}</p>
    </div>
  );
}

export function ProjectHoverShowcase({ projects }: { projects: ShowcaseProject[] }) {
  const compact = projects.length > 6;
  return (
    <HoverSlider className="w-full">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="flex flex-col gap-1.5 md:gap-2">
            {projects.map((p, i) => {
              const newGroup = p.group && (i === 0 || projects[i - 1].group !== p.group);
              return (
                <React.Fragment key={p.id}>
                  {newGroup && (
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.3em] text-primary",
                        i === 0 ? "mb-1" : "mb-1 mt-5"
                      )}
                    >
                      {p.group}
                    </span>
                  )}
                  <TextStaggerHover
                    index={i}
                    text={p.name}
                    className={cn(
                      "cursor-pointer font-black uppercase tracking-tighter text-foreground",
                      compact ? "text-2xl md:text-4xl" : "text-3xl md:text-5xl"
                    )}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <ActiveDesc projects={projects} />
        </div>
        <div className="lg:sticky lg:top-28">
          <ShowcasePanel projects={projects} />
        </div>
      </div>
    </HoverSlider>
  );
}
