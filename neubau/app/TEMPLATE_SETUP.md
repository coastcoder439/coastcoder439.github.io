# Projektsetup

Diese Installation ist die deutsche Portfolio-Adaption für Leon Pösken.

- Verbindliche Portfolio-Daten: `src/data/portfolio.ts`
- Deutsche Oberfläche: `messages/de.json`
- Default-Locale: `de`
- GitHub-Nutzer: `coastcoder439`
- Lebenslauf: `public/Leon-Poesken-Lebenslauf.pdf`
- Echte Produktassets: `public/projects/`

WakaTime, Kaggle und Chatbot bleiben ohne Schlüssel ausgeblendet. Es gibt keine Mock-Fallbackwerte.

Installation und Build erfolgen auf Windows reproduzierbar mit:

```powershell
npm.cmd --cache .npm-cache install
npm.cmd --cache .npm-cache run build
```

Die Herkunft der MIT-lizenzierten Designvorlage steht in `ATTRIBUTION.md`.
