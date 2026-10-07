// Demo entry: the handoff's index.html App, minus the prototype-only Tweaks panel.
const DEMO = { hero: 'navy', sidebar: 'teal', speed: 1, toasts: true };
const store = {
  get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} },
};

function App() {
  const tw = DEMO;
  const [route, setRoute] = React.useState(() => store.get('aa-route') || 'overview');
  const [leadId, setLeadId] = React.useState(() => store.get('aa-lead') || 'L-20931');
  const [lang, setLang] = React.useState('en');
  const [project, setProject] = React.useState('all');
  const [rail, setRail] = React.useState(false);
  const [mobile, setMobile] = React.useState(() => window.innerWidth < 720);
  const [drawer, setDrawer] = React.useState(false);
  React.useEffect(() => { const m = window.matchMedia('(max-width: 719px)'); const f = () => { setMobile(m.matches); if (!m.matches) setDrawer(false); }; m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const [toasts, setToasts] = React.useState([]);
  const t = AA_STR[lang];
  React.useEffect(() => { document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; document.documentElement.lang = lang; store.set('aa-lang', lang); }, [lang]);
  React.useEffect(() => { const m = window.matchMedia('(max-width: 1100px)'); const f = () => setRail(m.matches); f(); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const go = r => { setRoute(r); store.set('aa-route', r); setDrawer(false); window.scrollTo(0, 0); };
  const openLead = id => { setLeadId(id); store.set('aa-lead', id); go('lead'); };
  const toast = x => { if (!tw.toasts) return; const id = Date.now() + Math.random(); setToasts(ts => [...ts, { ...x, id, text: x.text || t.toastQ }]); setTimeout(() => setToasts(ts => ts.filter(y => y.id !== id)), 4800); };
  React.useEffect(() => {
    if (!tw.toasts) return;
    const pool = AA_LEADS.filter(l => l.status === 'qualified');
    let i = 0;
    const iv = setInterval(() => { const l = pool[i++ % pool.length]; toast({ name: (lang === 'ar' ? l.ar : l.name) + ' · ' + l.project, score: l.score }); }, 22000);
    return () => clearInterval(iv);
  }, [lang]);
  const props = { t, lang, go, openLead, project };
  let screen;
  if (route === 'live') screen = <LiveCalls {...props} speed={tw.speed} onQualified={x => toast(x)} />;
  else if (route === 'inbound') screen = <InboundCalls {...props} />;
  else if (route === 'pipeline') screen = <Pipeline {...props} />;
  else if (route === 'lead') screen = <LeadDetail {...props} id={leadId} back={() => go('pipeline')} />;
  else if (route === 'history') screen = <CallHistory {...props} />;
  else if (route === 'whatsapp') screen = <WhatsAppConfig {...props} />;
  else if (route === 'sources') screen = <SourceQuality {...props} />;
  else if (route === 'insights' || route === 'signals') screen = <Insights {...props} />;
  else screen = <Overview {...props} hero={tw.hero} />;
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AASidebar route={route} go={go} t={t} theme={tw.sidebar} rail={rail} mobile={mobile} open={drawer} onClose={() => setDrawer(false)} />
      <main style={{ flex: 1, minWidth: 0 }}>
        <AAHeader t={t} lang={lang} setLang={setLang} project={project} setProject={setProject} mobile={mobile} onMenu={() => mobile ? setDrawer(!drawer) : setRail(!rail)} />
        <div key={route + lang} className="aa-screen" style={{ padding: 'clamp(14px, 3vw, 40px)', paddingTop: mobile ? 16 : 24, maxWidth: 1600, boxSizing: 'border-box' }} data-screen-label={route}>{screen}</div>
      </main>
      <AAToasts toasts={toasts} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
