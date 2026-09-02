# Content-Spec — Leons Portfolio AUF der arfazrll-Vorlage

Basis ist die echte arfazrll-Next.js-Vorlage (liegt im Bau-Ordner als `app/`). Das DESIGN
bleibt (WebGL/3D, GSAP, Framer Motion, Dark-Mode). Du tauschst nur INHALT und Assets gegen
Leons echtes Material und machst die Seite deutsch.

## Wo der Inhalt liegt (Vorlage)
- `app/src/data/portfolio.ts` — Hauptinhalt (Name, Bio, Projekte, Kontakt, Social).
- `app/messages/*.json` — UI-Texte pro Sprache. **Deutsch (`de.json`) anlegen und zur
  Default-Sprache machen**; `id.json` (Indonesisch) entfernen, `en.json` optional behalten.
- `app/public/**` — Bilder/Assets (Projekte, Foto, Zertifikate) → durch Leons echte
  Produkt-Screenshots ersetzen.
- Live-Integrationen (`api/github-stats`, `wakatime` …): GitHub-User `coastcoder439`
  setzen (`NEXT_PUBLIC_GITHUB_USERNAME`); WakaTime/Kaggle/Chatbot ohne Keys deaktivieren
  oder ausblenden, nichts erfinden.

## Person
Leon Pösken — KI-Systeme, Automatisierung, Webentwicklung. Bio: „Vom Vertrieb zum
Systembauer. Ich rede nicht über KI, ich baue damit." Marke **Keel**, nie „Flowcode".
LinkedIn https://www.linkedin.com/in/leonpoesken/. GitHub coastcoder439. Kontakt „Auf ein
Gespräch", E-Mail Platzhalter `[E-MAIL EINSETZEN]`. Lebenslauf-Download →
`Leon-Poesken-Lebenslauf.pdf` (liegt im Bau-Ordner; als Resume/Download der Vorlage einbinden).

## Projekte = ECHTE Produkte mit ECHTEM Repo-Material (kein Mockup)
Für jedes Projekt: echtes Bild/Frontend/Dashboard/Deploy aus dem Repo + Live-Link, als
**App-Preview** in der Projektsektion. Kein echtes Bild → ehrlich als Text.
- **Oasis Simulator** — live https://world-eden-era.org; `oasis-simulation-app` (echte Frames/Screens).
- **WEE CRM** — echtes Frontend `wee-crm/drive-inhalt/` (React .tsx, Design & UI).
- **Drive-Automatisierung** — `google-drive-management` (echte Skripte/Inventur).
- **keel-showcase** — live https://keel-showcase.vercel.app; Screens `keel-showcase/abnahme/2026-08-21/screenshots/`.
- **Keel-Harness (mit Dashboard)** — `keel-harness-standalone-setup/payload/dashboard`.
- **FlowVoice** — `voiceai` (echter App-Code).
- **E-Bike-Vermietung** — `wl-bikerental`.
- **Shopify-Shop** — `shopify-x-paperclip` (echte Preview-Bilder).
RAUS: **Keel-System (Paperclip-Fork)** und **Brain** — nicht fertig. Ebenso enerbolt,
whitelabel-web-base, website-stefan-heine, interne Labore.

## Sprache/Look
Deutsch. Design der Vorlage bleibt erhalten (matte Farben, 3D, Animationen). Owner-Notiz:
den vertikalen Projekt-Slider mag der Owner nicht — wenn ohne Designbruch möglich, Projekte
horizontal/als Grid; sonst Vorlage-Layout beibehalten.

## Technik
Es ist eine echte Next.js-Fullstack-App (npm install, build). Deploy-Ziel klärt der Owner
später (Vercel für Fullstack); Repo/Ordner: der Bau liegt in `coastcoder439.github.io/neubau/app`.
