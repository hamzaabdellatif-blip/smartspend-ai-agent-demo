var DS = window.SmartSpendDesignSystem_d4f7b4;

function aaStatus(id) { return AA_STATUSES.find(s => s.id === id) || { id, en: id, ar: id, color: 'gray' }; }

function useCountUp(target, dur = 1200, deps = []) {
  const [v, setV] = React.useState(0);
  React.useEffect(() => {
    const t0 = Date.now();
    const id = setInterval(() => { const p = Math.min(1, (Date.now() - t0) / dur); setV(target * (1 - Math.pow(1 - p, 3))); if (p >= 1) clearInterval(id); }, 30);
    return () => clearInterval(id);
  }, [target, ...deps]);
  return v;
}

function Panel({ title, action, children, style, pad = 24, dark }) {
  return (
    <section style={{ background: dark ? 'rgba(255,255,255,0.06)' : '#fff', border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)', borderRadius: 14, padding: pad, boxShadow: dark ? 'none' : 'var(--ss-shadow-card)', minWidth: 0, ...style }}>
      {title ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 18 }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--ss-font-display)', fontWeight: 500, fontSize: 18, lineHeight: 1.3, color: dark ? '#fff' : 'var(--ss-teal-700)' }}>{title}</h3>
          {action || null}
        </div>) : null}
      {children}
    </section>
  );
}

function LiveDot({ color = '#01db72', size = 8 }) {
  return <span style={{ position: 'relative', display: 'inline-flex', width: size, height: size, flexShrink: 0 }}>
    <span className="aa-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: color, opacity: 0.6 }} />
    <span style={{ position: 'relative', width: size, height: size, borderRadius: '50%', background: color }} />
  </span>;
}

function ScoreRing({ score = 0, size = 64, stroke = 6, dark, label }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const col = score >= 60 ? 'var(--ss-ontrack)' : score >= 35 ? 'var(--ss-purple-300)' : 'var(--ss-offtrack)';
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={dark ? 'rgba(255,255,255,0.15)' : 'var(--ss-progress-track)'} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={col} strokeWidth={stroke} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - Math.min(100, score) / 100)} style={{ transition: 'stroke-dashoffset .6s ease' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: dark ? '#fff' : 'var(--ss-ink)' }}>
        <span style={{ fontWeight: 600, fontSize: size * 0.3, lineHeight: 1 }}>{Math.round(score)}</span>
        {label ? <span style={{ fontSize: 9, opacity: 0.7, marginTop: 2 }}>{label}</span> : null}
      </div>
    </div>
  );
}

const NAV = [['overview', 'layout-dashboard'], ['live', 'phone-call'], ['inbound', 'phone-incoming'], ['pipeline', 'kanban'], ['history', 'history'], ['insights', 'chart-no-axes-combined'], ['signals', 'sparkles'], ['sources', 'chart-column'], ['whatsapp', 'message-circle']];

function AASidebar({ route, go, t, theme, rail: railIn, mobile, open, onClose }) {
  const bg = theme === 'navy' ? '#16202f' : 'var(--ss-teal-700)';
  const rail = mobile ? false : railIn;
  const w = rail ? 76 : mobile ? 260 : 231;
  const goM = id => { go(id); if (mobile && onClose) onClose(); };
  return (
    <>
    {mobile && open ? <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(16,25,52,0.45)', zIndex: 19 }} /> : null}
    <nav style={{ position: mobile ? 'fixed' : 'sticky', top: 0, insetInlineStart: 0, height: mobile ? '100dvh' : '100vh', width: w, flexShrink: 0, background: bg, color: '#fff', display: 'flex', flexDirection: 'column', transition: 'width .2s, transform .25s ease', transform: mobile && !open ? 'translateX(calc(-100% * var(--aa-dir, 1)))' : 'none', overflow: 'hidden', overflowY: 'auto', zIndex: mobile ? 20 : 5, boxShadow: mobile && open ? '0 0 40px rgba(0,0,0,0.3)' : 'none' }}>
      <div style={{ height: 92, display: 'flex', alignItems: 'center', justifyContent: rail ? 'center' : 'flex-start', paddingInline: rail ? 0 : 33 }}>
        {rail ? <span style={{ fontFamily: 'var(--ss-font-display)', fontSize: 22, fontWeight: 600 }}>S</span> : <img src={window.AA_LOGO} alt="SmartSpend" style={{ width: 150, display: 'block' }} />}
      </div>
      <div style={{ paddingInline: rail ? 0 : 33, marginBottom: 18, display: rail ? 'none' : 'block' }}>
        <div style={{ fontSize: 11, letterSpacing: 0.7, textTransform: 'uppercase', opacity: 0.6 }}>AI Call Agent</div>
      </div>
      {NAV.map(([id, icon]) => {
        const on = route === id || (route === 'lead' && id === 'pipeline');
        return (
          <div key={id} onClick={() => goM(id)} title={t.nav[id]} style={{ position: 'relative', height: 52, display: 'flex', alignItems: 'center', gap: 12, paddingInline: rail ? 0 : 33, justifyContent: rail ? 'center' : 'flex-start', cursor: 'pointer', background: on ? 'rgba(28,57,74,0.55)' : 'transparent', fontSize: 16, transition: 'background .15s' }}>
            {on ? <span style={{ position: 'absolute', insetInlineStart: 0, top: 0, width: 6, height: 52, borderStartEndRadius: 8, borderEndEndRadius: 8, background: 'var(--ss-purple-300)' }} /> : null}
            <DS.Icon name={icon} size={19} color="#fff" />
            {rail ? null : <span style={{ whiteSpace: 'nowrap' }}>{t.nav[id]}</span>}
            {id === 'live' && !rail ? <span style={{ marginInlineStart: 'auto', marginInlineEnd: 20, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, background: 'rgba(1,219,114,0.18)', padding: '2px 8px', borderRadius: 20 }}><LiveDot size={6} />6</span> : null}
          </div>);
      })}
      <div style={{ marginTop: 'auto', padding: rail ? 12 : '20px 26px', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', gap: 10, justifyContent: rail ? 'center' : 'flex-start' }}>
        <DS.Avatar initials="D" size={32} color="custom" />
        {rail ? null : <div style={{ lineHeight: 1.3 }}><div style={{ fontSize: 14 }}>Diar Developments</div><div style={{ fontSize: 11, opacity: 0.7 }}>Client workspace</div></div>}
      </div>
    </nav>
    </>
  );
}

function AAHeader({ t, lang, setLang, project, setProject, onMenu, mobile }) {
  const projOpts = [{ value: 'all', label: t.allProjects }, ...AA_PROJECTS.map(p => ({ value: p, label: p }))];
  return (
    <header style={{ display: 'flex', alignItems: 'center', gap: mobile ? 10 : 16, height: mobile ? 60 : 76, paddingInline: 'clamp(16px, 3vw, 40px)', background: 'rgba(239,239,239,0.85)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 4, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <span role="button" onClick={onMenu} style={{ cursor: 'pointer', display: 'inline-flex' }}><DS.Icon name="menu" size={24} color="var(--ss-navy-700)" /></span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 20, background: '#fff', boxShadow: 'var(--ss-shadow-summary)', fontSize: 13, color: 'var(--ss-navy-700)', whiteSpace: 'nowrap' }}><LiveDot />{mobile ? '6/15' : t.agentOnline}{mobile ? null : <span style={{ color: 'var(--ss-gray-550)' }}>· 6/15 {t.slots}</span>}</span>
      <div style={{ flex: 1 }} />
      <DS.TextField kind="pill" options={projOpts} value={project} onChange={setProject} width={mobile ? 132 : 190} />
      {false && <DS.ButtonGroup items={['EN', 'عربي']} value={lang === 'en' ? 'EN' : 'عربي'} onChange={v => setLang(v === 'EN' ? 'en' : 'ar')} activeColor="var(--ss-teal-700)" />}
      <span style={{ position: 'relative', display: 'inline-flex', cursor: 'pointer' }}><DS.Icon name="bell" size={20} color="var(--ss-navy-700)" /><span style={{ position: 'absolute', top: -4, insetInlineEnd: -6 }}><DS.Badge>3</DS.Badge></span></span>
      {mobile ? null : <DS.Avatar initials="FD" size={36} color="green" online />}
    </header>
  );
}

function AAToasts({ toasts }) {
  const sm = typeof window !== 'undefined' && window.innerWidth < 720;
  return (
    <div style={{ position: 'fixed', bottom: sm ? 12 : 24, insetInlineEnd: sm ? 12 : 24, insetInlineStart: sm ? 12 : 'auto', display: 'flex', flexDirection: 'column', gap: 10, zIndex: 50, pointerEvents: 'none' }}>
      {toasts.map(x => (
        <div key={x.id} className="aa-toast" style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: sm ? 0 : 300, padding: '12px 16px', borderRadius: 12, background: 'var(--ss-navy-700)', color: '#fff', boxShadow: '0 12px 32px rgba(16,25,52,0.35)', pointerEvents: 'auto' }}>
          <ScoreRing score={x.score} size={40} stroke={4} dark />
          <div style={{ lineHeight: 1.35 }}><div style={{ fontSize: 14, fontWeight: 500 }}>{x.name}</div><div style={{ fontSize: 12, opacity: 0.75 }}>{x.text}</div></div>
          <DS.Icon name="circle-check" size={18} color="#01db72" style={{ marginInlineStart: 'auto' }} />
        </div>))}
    </div>
  );
}

function OverrideRow({ lang, granted, dark }) {
  const o = AA_OVERRIDE, ar = lang === 'ar';
  const on = granted === true;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 12, background: dark ? (on ? 'rgba(1,219,114,0.1)' : 'rgba(255,255,255,0.05)') : (on ? 'var(--ss-ontrack-bg)' : 'var(--ss-gray-50)'), border: dark ? '1px dashed rgba(255,255,255,0.18)' : '1px dashed var(--ss-gray-300)' }}>
      <DS.Icon name={on ? 'circle-check' : 'key'} size={18} color={on ? (dark ? '#01db72' : 'var(--ss-ontrack)') : (dark ? 'rgba(255,255,255,0.6)' : 'var(--ss-gray-550)')} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', color: dark ? '#fff' : 'var(--ss-ink)' }}>{ar ? o.ar : o.en}<span style={{ fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 10, background: dark ? 'rgba(195,148,255,0.2)' : 'rgba(139,92,246,0.12)', color: dark ? '#c394ff' : 'var(--ss-purple-700)' }}>{ar ? o.tagAr : o.tagEn}</span></div>
        <div style={{ fontSize: 11, marginTop: 2, color: dark ? 'rgba(255,255,255,0.55)' : 'var(--ss-gray-550)' }}>{ar ? o.noteAr : o.noteEn}</div>
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: on ? (dark ? '#01db72' : 'var(--ss-ontrack)') : (dark ? 'rgba(255,255,255,0.5)' : 'var(--ss-gray-550)') }}>{on ? (ar ? 'وافق' : 'Granted') : granted === false ? (ar ? 'لم يوافق' : 'Declined') : (ar ? 'بانتظار' : 'Pending')}</span>
    </div>
  );
}

function PageHead({ title, sub, right }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
      <div style={{ maxWidth: 760 }}>
        <h1 style={{ margin: 0, fontFamily: 'var(--ss-font-display)', fontWeight: 500, fontSize: 'clamp(24px, 3vw, 40px)', lineHeight: 1.3, color: 'var(--ss-teal-700)', textTransform: 'capitalize' }}>{title}</h1>
        {sub ? <p style={{ margin: '6px 0 0', fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.5, color: 'var(--ss-slate-600)' }}>{sub}</p> : null}
      </div>
      {right || null}
    </div>
  );
}

Object.assign(window, { OverrideRow, aaStatus, useCountUp, Panel, LiveDot, ScoreRing, AASidebar, AAHeader, AAToasts, PageHead });
