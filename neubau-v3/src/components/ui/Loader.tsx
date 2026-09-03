'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Layers, Shield, Lightbulb, MessageSquare, Workflow, Globe, Smartphone, Filter } from 'lucide-react';

type LoaderType = 'disziplinen' | 'ergebnisse';

interface LoaderProps {
  type?: LoaderType;
  /** Welche Seite nach vorn zeigt (0–3). Ohne Angabe dreht der Würfel frei weiter. */
  activeFace?: number;
}

// Die vier Y-Seiten liegen auf 0°, 90°, 180°, 270°. Damit bringt eine Drehung des
// Würfels auf -90° * index genau Seite [index] nach vorn — Schritt 1 bis 4 in einer
// durchgehenden Vierteldrehung, ohne Rückwärtssprung.
const config: Record<LoaderType, { icon: any; label: string; color: string }[]> = {
  disziplinen: [
    { icon: MessageSquare, label: 'PROMPT', color: '#3b82f6' },
    { icon: Layers, label: 'CONTEXT', color: '#22c55e' },
    { icon: Shield, label: 'HARNESS', color: '#a855f7' },
    { icon: Lightbulb, label: 'SKILL', color: '#eab308' },
  ],
  ergebnisse: [
    { icon: Globe, label: 'WEBSITES', color: '#ef4444' },
    { icon: Smartphone, label: 'APPS', color: '#06b6d4' },
    { icon: Filter, label: 'FUNNELS', color: '#f97316' },
    { icon: Workflow, label: 'AUTOMATIONS', color: '#22c55e' },
  ],
};

export const faceColors = (type: LoaderType) => config[type].map((f) => f.color);

const Loader = ({ type = 'disziplinen', activeFace }: LoaderProps) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  // Merkt sich die absolute Drehung, damit der Würfel von Seite 4 auf Seite 1
  // nicht rückwärts durch alle Seiten rauscht.
  const drehung = useRef(0);
  const letzterIndex = useRef(0);

  const faces = config[type];
  const gesteuert = typeof activeFace === 'number';

  // Freies Schweben und, ohne Steuerung, freies Drehen.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.set(stageRef.current, { rotateX: -14, rotateY: 0 });
    const schweben = gsap.to(stageRef.current, {
      y: -16,
      rotateX: -22,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    gsap.set(shadowRef.current, { scale: 1, opacity: 0.45 });
    const schatten = gsap.to(shadowRef.current, {
      scale: 0.75,
      opacity: 0.18,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    let frei: gsap.core.Tween | null = null;
    if (!gesteuert) {
      frei = gsap.to(cubeRef.current, { rotateY: 360, duration: 14, ease: 'none', repeat: -1 });
    }

    return () => {
      schweben.kill();
      schatten.kill();
      frei?.kill();
    };
  }, [gesteuert]);

  // Gesteuerte Drehung: immer den kürzesten Weg zur gewünschten Seite.
  useEffect(() => {
    if (!gesteuert || !cubeRef.current) return;
    const ziel = ((activeFace as number) % 4 + 4) % 4;
    let schritte = ziel - letzterIndex.current;
    if (schritte > 2) schritte -= 4;
    if (schritte < -2) schritte += 4;
    letzterIndex.current = ziel;
    drehung.current -= schritte * 90;
    gsap.to(cubeRef.current, {
      rotateY: drehung.current,
      duration: 0.9,
      ease: 'power3.out',
    });
  }, [activeFace, gesteuert]);

  return (
    <div
      className="relative flex h-full min-h-[380px] w-full items-center justify-center overflow-hidden bg-transparent"
      style={{ perspective: 1500 }}
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center">
        <div ref={stageRef} className="relative h-[180px] w-[180px]" style={{ transformStyle: 'preserve-3d' }}>
          <div ref={cubeRef} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            <Face {...faces[0]} transform="rotateY(0deg) translateZ(90px)" />
            <Face {...faces[1]} transform="rotateY(90deg) translateZ(90px)" />
            <Face {...faces[2]} transform="rotateY(180deg) translateZ(90px)" />
            <Face {...faces[3]} transform="rotateY(270deg) translateZ(90px)" />
            {/* Deckel und Boden bleiben neutral — Farbe tragen nur die vier Schritte. */}
            <Deckel transform="rotateX(90deg) translateZ(90px)" />
            <Deckel transform="rotateX(-90deg) translateZ(90px)" />
          </div>
        </div>

        <div
          ref={shadowRef}
          className="absolute -bottom-[90px] h-[30px] w-[140px] rounded-[100%] bg-black/40 blur-[8px] dark:bg-white/10"
        />
      </div>
    </div>
  );
};

// Deckel und Boden: geschlossen, aber ohne eigene Aussage.
function Deckel({ transform }: { transform: string }) {
  return (
    <div
      className="absolute box-border h-full w-full border-[5px] border-black bg-zinc-800"
      style={{ transform, backfaceVisibility: 'visible' }}
    />
  );
}

function Face({
  icon: Icon,
  label,
  color,
  transform,
}: {
  icon: any;
  label: string;
  color: string;
  transform: string;
}) {
  return (
    <div
      className="absolute box-border flex h-full w-full flex-col items-center justify-center overflow-hidden border-[5px] border-black"
      style={{ background: color, transform, backfaceVisibility: 'visible', boxShadow: '12px 12px 0 black' }}
    >
      <div className="absolute h-[20px] w-[150%] -translate-y-10 -rotate-45 bg-black opacity-20" />
      <Icon className="z-10 mb-1 h-10 w-10 text-black" strokeWidth={2.5} />
      <span className="z-10 mt-1 rounded-sm bg-black px-2 font-['Arial_Black',sans-serif] text-[10px] uppercase tracking-widest text-white">
        {label}
      </span>
    </div>
  );
}

export default Loader;
