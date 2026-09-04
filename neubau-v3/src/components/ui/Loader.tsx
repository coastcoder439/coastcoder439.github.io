'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Layers, Shield, Lightbulb, MessageSquare, Workflow, Globe, Smartphone, Filter,
  Bot, Database, LayoutDashboard, Sparkles,
} from 'lucide-react';

type LoaderType = 'disziplinen' | 'ergebnisse';

interface LoaderProps {
  type?: LoaderType;
  /** Welche Seite nach vorn zeigt (0–3). Ohne Angabe dreht der Würfel frei weiter. */
  activeFace?: number;
}

// Die vier Schritte liegen NICHT alle auf der Hochachse, sondern verteilt:
// Schritt 1 vorne, Schritt 2 OBEN, Schritt 3 rechts, Schritt 4 UNTEN. Dadurch kippt der
// Würfel beim Umschalten nach oben oder unten, statt immer nur seitlich zu schwenken.
// WICHTIG: Diese Liste bleibt bei vier Einträgen — `faceColors` färbt damit die vier
// Ablauf-Schritte. Deckel und Boden stehen getrennt darunter.
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

// Deckel und Boden sind jetzt ebenfalls richtige Felder (vorher: graue Blindflächen).
// [0] = oben, [1] = unten. Sie gehören NICHT zu den vier Ablauf-Schritten.
const deckel: Record<LoaderType, { icon: any; label: string; color: string }[]> = {
  disziplinen: [
    { icon: Bot, label: 'AGENT', color: '#ec4899' },
    { icon: Database, label: 'MEMORY', color: '#14b8a6' },
  ],
  ergebnisse: [
    { icon: LayoutDashboard, label: 'DASHBOARDS', color: '#8b5cf6' },
    { icon: Sparkles, label: 'AGENTEN', color: '#eab308' },
  ],
};

export const faceColors = (type: LoaderType) => config[type].map((f) => f.color);

// Wohin der Würfel gedreht werden muss, damit Schritt [i] zur Kamera zeigt.
// Schritt 2 und 4 liegen auf Deckel und Boden — dorthin KIPPT er (X), zu Schritt 3
// DREHT er (Y). So bewegt sich der Würfel räumlich statt nur nach links und rechts.
const ZIEL_ROTATION = [
  { x: 0, y: 0 },     // Schritt 1 — vorne
  { x: -90, y: 0 },   // Schritt 2 — oben
  { x: 0, y: -90 },   // Schritt 3 — rechts
  { x: 90, y: 0 },    // Schritt 4 — unten
];

const Loader = ({ type = 'disziplinen', activeFace }: LoaderProps) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const faces = config[type];
  const kappen = deckel[type];
  const gesteuert = typeof activeFace === 'number';

  // Freies Schweben und, ohne Steuerung, freies Taumeln um ZWEI Achsen.
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

    // Ohne Steuerung: um Y UND X drehen, mit ungleichen Dauern. Dadurch taumelt der
    // Würfel echt räumlich und zeigt auch Deckel und Boden, statt sich nur seitlich
    // im Kreis zu drehen.
    const frei: gsap.core.Tween[] = [];
    if (!gesteuert) {
      frei.push(gsap.to(cubeRef.current, { rotateY: 360, duration: 14, ease: 'none', repeat: -1 }));
      frei.push(gsap.to(cubeRef.current, { rotateX: 360, duration: 21, ease: 'none', repeat: -1 }));
    }

    return () => {
      schweben.kill();
      schatten.kill();
      frei.forEach((t) => t.kill());
    };
  }, [gesteuert]);

  // Gesteuerte Drehung: der Würfel dreht sich dorthin, wo der gewählte Schritt liegt.
  // Weil Schritt 2 oben und Schritt 4 unten sitzt, ist das je nach Ziel ein Kippen (X)
  // oder ein Drehen (Y) — und zwischen zwei schrägen Zielen beides zugleich.
  useEffect(() => {
    if (!gesteuert || !cubeRef.current) return;
    const ziel = ((activeFace as number) % 4 + 4) % 4;
    const r = ZIEL_ROTATION[ziel];
    const sanft =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.to(cubeRef.current, {
      rotateX: r.x,
      rotateY: r.y,
      duration: sanft ? 0.3 : 1.05,
      ease: 'power3.inOut',
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
            {/* Schritt 1 — vorne */}
            <Face {...faces[0]} transform="rotateY(0deg) translateZ(90px)" />
            {/* Schritt 2 — OBEN: dorthin kippt der Würfel */}
            <Face {...faces[1]} transform="rotateX(90deg) translateZ(90px)" />
            {/* Schritt 3 — rechts */}
            <Face {...faces[2]} transform="rotateY(90deg) translateZ(90px)" />
            {/* Schritt 4 — UNTEN: dorthin kippt er in die andere Richtung */}
            <Face {...faces[3]} transform="rotateX(-90deg) translateZ(90px)" />
            {/* Zusatzfelder auf den beiden Seiten, die kein Schritt belegt. Sie stehen
                nie vorn, darum dürfen sie dauerhaft etwas zurückgenommen sein. */}
            <Face {...kappen[0]} licht={0.82} transform="rotateY(180deg) translateZ(90px)" />
            <Face {...kappen[1]} licht={0.82} transform="rotateY(270deg) translateZ(90px)" />
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

// Eine Würfelseite: randlos (Owner: die schwarzen Ränder und der schwarze Schlagschatten
// sind raus). Die Flächen trennen sich über ihre Farben; Tiefe gibt der Bodenschatten.
function Face({
  icon: Icon,
  label,
  color,
  transform,
  licht = 1,
}: {
  icon: any;
  label: string;
  color: string;
  transform: string;
  licht?: number;
}) {
  return (
    <div
      className="absolute box-border flex h-full w-full flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundColor: color,
        // Kein Rand mehr: Tiefe kommt aus Licht. Ein Verlauf gibt jeder Flaeche
        // Materialwirkung, der Licht-Faktor hebt den Deckel und senkt den Boden.
        backgroundImage: 'linear-gradient(155deg, rgba(255,255,255,0.20), rgba(0,0,0,0.18))',
        filter: `brightness(${licht})`,
        transform,
        backfaceVisibility: 'visible',
      }}
    >
      {/* Glanzstreifen statt des früheren schwarzen Balkens. */}
      <div className="absolute h-[20px] w-[150%] -translate-y-10 -rotate-45 bg-white opacity-20" />
      <Icon className="z-10 mb-1 h-10 w-10 text-black" strokeWidth={2.5} />
      <span className="z-10 mt-1 rounded-sm bg-black px-2 font-['Arial_Black',sans-serif] text-[10px] uppercase tracking-widest text-white">
        {label}
      </span>
    </div>
  );
}

export default Loader;
