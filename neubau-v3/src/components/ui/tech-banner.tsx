"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Fullstack-Banner aus dem Template (BrandScroller + BrandScrollerReverse): ZWEI
// gegenläufige Reihen mit vielen Logos. Auf Leons echten Stack gesetzt; Logos liegen
// lokal in public/tech (kein Fremd-CDN beim Aufruf), simpleicons in Markenfarbe —
// die schwarzen (Next.js, Vercel, Three.js) in Grau, damit sie in beiden Themes sitzen.
const REIHE_1 = [
  { name: "Next.js", icon: "/tech/nextdotjs.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "JavaScript", icon: "/tech/javascript.svg" },
  { name: "Node.js", icon: "/tech/nodedotjs.svg" },
  { name: "Python", icon: "/tech/python.svg" },
  { name: "Tailwind", icon: "/tech/tailwindcss.svg" },
  { name: "Vite", icon: "/tech/vite.svg" },
];
const REIHE_2 = [
  { name: "Supabase", icon: "/tech/supabase.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "GSAP", icon: "/tech/greensock.svg" },
  { name: "Framer Motion", icon: "/tech/framer.svg" },
  { name: "Three.js", icon: "/tech/threedotjs.svg" },
  { name: "Vercel", icon: "/tech/vercel.svg" },
  { name: "Git", icon: "/tech/git.svg" },
  { name: "Figma", icon: "/tech/figma.svg" },
];

const Item = ({ name, icon }: { name: string; icon: string }) => (
  <div className="group flex items-center gap-3 px-7 py-3">
    <span className="relative h-7 w-7 flex-shrink-0">
      <Image src={icon} alt={name} fill sizes="28px" className="object-contain" unoptimized />
    </span>
    <span className="whitespace-nowrap text-base font-bold text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
      {name}
    </span>
  </div>
);

function Reihe({ items, reverse = false }: { items: { name: string; icon: string }[]; reverse?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex w-full overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        // Bei "weniger Bewegung" laeuft das Band nicht: Der CSS-Reset dafuer greift nur
        // auf CSS-Animationen, dieses Band wird aber von JavaScript bewegt und lief
        // deshalb unveraendert weiter — gemessen identisch schnell in beiden Modi.
        animate={reduce ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 34, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        <div className="flex shrink-0" aria-hidden="true">
          {items.map((it, i) => (
            <Item key={`a-${i}`} {...it} />
          ))}
        </div>
        <div className="flex shrink-0">
          {items.map((it, i) => (
            <Item key={`b-${i}`} {...it} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function TechBanner() {
  return (
    <div className="flex flex-col gap-2">
      <Reihe items={REIHE_1} />
      <Reihe items={REIHE_2} reverse />
    </div>
  );
}
