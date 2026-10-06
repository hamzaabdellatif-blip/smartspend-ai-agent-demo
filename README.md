# SmartSpend AI Agent — Client Dashboard Demo

Clickable demo of the SmartSpend AI Call Agent dashboard for Diar Developments (mock data).

Screens: Overview, Live Calls, Inbound Calls, Leads Pipeline, Lead Detail, Call History, Insights, Qualification Signals, Source vs Quality, WhatsApp Setup.

## Run locally

```bash
./build.sh            # compiles src/*.jsx into public/app.js (uses npx esbuild)
npx serve public      # then open http://localhost:3000
```

## Structure

- `src/` — React screens (JSX), concatenated in order by `build.sh`
- `public/` — the deployable static site (design-system bundle, tokens, icons, compiled `app.js`)
- `vercel.json` — serves `public/` as a static site on Vercel
