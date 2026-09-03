"use client";

/**
 * Terminbuchung über Cal.com (Free-Plan, ein Nutzer).
 *
 * Zwei-Klick-Lösung: Der Kalender wird erst nach ausdrücklichem Klick geladen.
 * Vorher geht keine einzige Anfrage an Cal.com — sonst erhielte ein Dritter die
 * IP-Adresse jedes Besuchers, ohne dass dieser den Kalender überhaupt sehen will.
 * Wer nicht klicken mag, bucht über den direkten Link daneben.
 */

import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const NAMESPACE = "portfolio";

function CalFrame({ calLink, theme }: { calLink: string; theme: "dark" | "light" }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", { theme, hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [theme]);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme }}
    />
  );
}

export function CalBooking() {
  const { resolvedTheme } = useTheme();
  const theme: "dark" | "light" = resolvedTheme === "dark" ? "dark" : "light";
  const calLink = portfolioData.personal.calLink ?? "leon-posken-4hsbjc";
  const [geladen, setGeladen] = useState(false);

  return (
    <div
      id="cal-booking"
      className="mx-auto mt-6 mb-12 w-full max-w-5xl overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl"
    >
      {geladen ? (
        <CalFrame calLink={calLink} theme={theme} />
      ) : (
        <div className="flex min-h-[380px] flex-col items-center justify-center gap-5 px-8 py-16 text-center">
          <CalendarDays className="h-8 w-8 text-primary" aria-hidden="true" />
          <p className="max-w-[52ch] text-base leading-relaxed text-muted-foreground">
            Der Kalender kommt von Cal.com. Beim Laden erhält Cal.com deine IP-Adresse —
            deshalb startet er erst auf deinen Klick.
          </p>
          <button
            type="button"
            onClick={() => setGeladen(true)}
            className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-black uppercase tracking-widest text-background shadow-xl transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            Kalender laden
          </button>
          <a
            href={`https://cal.com/${calLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
          >
            Oder direkt bei Cal.com öffnen <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  );
}
