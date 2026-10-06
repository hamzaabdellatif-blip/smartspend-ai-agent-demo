#!/bin/sh
# Concatenate the prototype screens (they share globals, as in the original <script> tags) and compile JSX.
set -e
cd "$(dirname "$0")"
cp src/logo.js public/logo.js
cat src/data.jsx src/shell.jsx src/charts.jsx src/overview.jsx src/live.jsx src/pipeline.jsx src/lead.jsx src/history-insights.jsx src/inbound.jsx src/signals.jsx src/sources.jsx src/whatsapp.jsx src/app.jsx > .app.jsx
npx -y esbuild@0.24.0 .app.jsx --loader:.jsx=jsx --jsx=transform --target=es2018 --minify --outfile=public/app.js
rm .app.jsx
