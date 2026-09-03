"use client";

/**
 * Cal.com-Buchung inline (Free-Plan, ein Nutzer). Der Link kommt aus
 * portfolio.ts (personal.calLink); das Theme folgt dem Seiten-Theme.
 * Solange kein Termintyp existiert, zeigt das Widget die Profilseite —
 * sobald einer angelegt ist, calLink auf 'leon-posken-4hsbjc/<slug>' setzen.
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
