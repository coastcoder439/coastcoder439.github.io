"use client";

/**
 * Terminbuchung über Cal.com (Free-Plan, ein Nutzer). Der Kalender lädt direkt
 * (Owner-Wunsch), damit der Kunde ohne Zwischenklick einen Termin sieht. Der Link
 * kommt aus portfolio.ts (personal.calLink); das Theme folgt dem Seiten-Theme.
 */

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";

const NAMESPACE = "portfolio";

export function CalBooking() {
  const { resolvedTheme } = useTheme();
  const theme: "dark" | "light" = resolvedTheme === "dark" ? "dark" : "light";
  const calLink = portfolioData.personal.calLink ?? "leon-posken-4hsbjc";

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", { theme, hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [theme]);

  return (
    <div
      id="cal-booking"
      className="mx-auto mt-6 mb-12 w-full max-w-5xl overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-xl"
    >
      <Cal
        namespace={NAMESPACE}
        calLink={calLink}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme }}
      />
    </div>
  );
}
