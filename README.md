# SmartSpend AI Agent — Client Dashboard Demo

Clickable demo of the SmartSpend AI Call Agent dashboard for Diar Developments (mock data).

Two markets from one bundle: KSA at `/smartspend/`, Egypt at `/smartspend/egypt/` (the page sets `window.AA_REGION='eg'`; market-specific copy and data live in `src/region.jsx`). Opening `/` or `/egypt` in a browser redirects there.

`/demo` embeds the Ziila app in a full-screen iframe. Every path that isn't one of our files is proxied to `https://ziila-ai.intella.me` by the rewrite in `vercel.json`, so Ziila runs on our own domain and its login cookies are first-party (a cross-site iframe would have them blocked). That's why our files live under `/smartspend/` and `/demo/`: Ziila uses `/assets/`, `/env.js` and routes like `/dashboard` at the root.

Rebranding: a file under `public/` wins over the proxy at the same path. `public/assets/images/logos/` holds blank SVGs for Ziila's logos, and `public/env.js` replaces Ziila's `/env.js` (which every Ziila page loads first): it loads Ziila's real config via the `/ziila-env.js` rewrite, then hides the logos, rewrites "Ziila" in the copy (English and Arabic) and shows "Xlab Group" instead of intella. Add new text replacements to the `TEXT` list there.

Screens: Overview, Live Calls, Inbound Calls, Leads Pipeline, Lead Detail, Call History, Insights, Qualification Signals, Source vs Quality, WhatsApp Setup.

## Run locally

```bash
./build.sh            # compiles src/*.jsx into public/smartspend/app.js (uses npx esbuild)
npx serve public      # then open http://localhost:3000/smartspend/
```

The Ziila proxy only exists on Vercel, so `/demo` doesn't work under `npx serve`; use a Vercel preview deployment to test it.

## Structure

- `src/` — React screens (JSX), concatenated in order by `build.sh`
- `public/smartspend/` — the dashboard (design-system bundle, tokens, icons, compiled `app.js`)
- `public/demo/` — the Ziila iframe page
- `vercel.json` — serves `public/` as a static site on Vercel, plus the redirects and the Ziila proxy
