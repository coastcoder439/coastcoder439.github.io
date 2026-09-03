"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Nur der freigegebene Stack (identisch mit dem Abschluss-Band ribbon1) — keine
// Template-Werkzeuge (PyTorch, Jupyter, Colab …), die hier nie im Einsatz waren.
// dark = schwarzes Marken-Logo; die Identitaets-Sektion ist in beiden Themes schwarz, daher immer invertiert
type ScrollerEntry = { name: string; icon: string; dark?: boolean };
const STACK: ScrollerEntry[] = [
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', dark: true },
    { name: 'React', icon: 'https://cdn.simpleicons.org/react' },
    { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' },
    { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' },
    { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss' },
];
const TOOLS: ScrollerEntry[] = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python' },
    { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase' },
    { name: 'GSAP', icon: 'https://cdn.simpleicons.org/greensock' },
    { name: 'Framer Motion', icon: 'https://cdn.simpleicons.org/framer' },
    { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', dark: true },
];
const techStackItems = STACK;
const toolItems = TOOLS;

const ScrollerItem = ({ name, icon, dark }: ScrollerEntry) => (
    <div className="flex items-center gap-4 px-12 py-4 transition-all duration-300 group">
        <div className="relative w-10 h-10 flex-shrink-0 transition-all duration-500">
            <Image
                src={icon}
                alt={name}
                fill
                className={cn("object-contain", dark && "invert")}
                unoptimized
            />
        </div>
        <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-500 whitespace-nowrap">
            {name}
        </p>
    </div>
);

export const BrandScroller = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["-50%", "0%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-1-${idx}`} name={item.name} icon={item.icon} dark={item.dark} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {techStackItems.map((item, idx) => (
                        <ScrollerItem key={`tech-2-${idx}`} name={item.name} icon={item.icon} dark={item.dark} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export const BrandScrollerReverse = () => {
    return (
        <div className="relative flex overflow-hidden py-2 w-full px-8 md:px-16 lg:px-24 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
            <motion.div
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap"
            >
                {/* Render twice for seamless loop */}
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-1-${idx}`} name={item.name} icon={item.icon} dark={item.dark} />
                    ))}
                </div>
                <div className="flex shrink-0">
                    {toolItems.map((item, idx) => (
                        <ScrollerItem key={`tool-2-${idx}`} name={item.name} icon={item.icon} dark={item.dark} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};
