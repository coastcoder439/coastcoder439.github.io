"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Linkedin, FileText } from "lucide-react";
import { CalBooking } from "@/components/sections/CalBooking";
import { MagneticButton } from "@/components/ui/magnetic-button";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
    const sectionRef = useRef<HTMLElement>(null);
    const t = useTranslations('ctaSection');

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-content',
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="buchen" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden bg-background">



            <div className="max-w-[1600px] mx-auto relative z-10 px-6 md:px-12 lg:px-24 text-center cta-content mt-0">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-0">
                    {t('title')}{' '}
                    <span className="text-gradient whitespace-nowrap">{t('together')}</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-4 mb-4 text-center">
                    {t('subtitle').split('. ').map((sentence, i, arr) => (
                        <span key={i}>
                            {sentence}{i < arr.length - 1 ? '.' : ''}
                            {i < arr.length - 1 && <br className="hidden md:block" />}
                            {i < arr.length - 1 && " "}
                        </span>
                    ))}
                </p>

                <CalBooking />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <MagneticButton href="https://www.linkedin.com/in/leonpoesken/" external variant="primary" className="text-lg px-10 py-5">
                        <Linkedin className="w-5 h-5" />
                        <span>{t('start')}</span>
                    </MagneticButton>
                    <MagneticButton href="/Leon-Poesken-Lebenslauf.pdf" download="Leon-Poesken-Lebenslauf.pdf" variant="outline" className="text-lg px-10 py-5">
                        <FileText className="w-5 h-5" />
                        <span>{t('work')}</span>
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
