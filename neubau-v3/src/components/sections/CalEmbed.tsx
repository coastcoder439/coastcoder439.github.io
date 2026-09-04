"use client";

/**
 * Der echte Cal.com-Kalender. Bewusst in einer eigenen Datei: CalBooking lädt ihn per
 * next/dynamic erst NACH dem Klick auf „Termin buchen" nach. Solange diese Datei nicht
 * gerendert wird, geht keine einzige Anfrage an cal.com hinaus — das ist die technische
 * Seite der Einwilligung (siehe cal-attrappe.tsx).
 *
 * Der Link kommt aus portfolio.ts (personal.calLink); das Theme folgt dem Seiten-Theme.
 */

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";

const NAMESPACE = "portfolio";

export function CalEmbed() {
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
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme }}
    />
  );
}
