const OV_RANGES = { today: 0.09, d7: 0.42, d30: 1, all: 4.8 };

function HeroKpi({ label, value, fmt, target, good, dark, delay = 0 }) {
  const v = useCountUp(value, 1300, [delay]);
  return (
    <div style={{ padding: '18px 20px', borderRadius: 14, background: dark ? 'rgba(255,255,255,0.07)' : '#fff', border: dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)', boxShadow: dark ? 'none' : 'var(--ss-shadow-summary)', display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
      <span style={{ fontSize: 13, color: dark ? 'rgba(255,255,255,0.72)' : 'var(--ss-slate-600)' }}>{label}</span>
      <span style={{ fontSize: 'clamp(26px, 2.6vw, 34px)', fontWeight: 600, lineHeight: 1, color: dark ? '#fff' : 'var(--ss-ink)', fontVariantNumeric: 'tabular-nums' }}>{fmt(v)}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: dark ? 'rgba(255,255,255,0.6)' : 'var(--ss-gray-550)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', height: 20, padding: '0 9px', borderRadius: 10, fontFamily: 'var(--ss-font-ui)', fontWeight: 600, fontSize: 10, background: good ? (dark ? 'rgba(33,184,115,0.2)' : 'var(--ss-ontrack-bg)') : (dark ? 'rgba(232,77,61,0.2)' : 'var(--ss-offtrack-bg)'), color: good ? (dark ? '#5fe0a3' : 'var(--ss-ontrack)') : (dark ? '#ff8a7d' : 'var(--ss-offtrack)') }}>{good ? 'On Track' : 'Off Track'}</span>
        {target}
      </span>
    </div>
  );
}

function Ticker({ t, lang, dark }) {
  const items = [...AA_TICKER, ...AA_TICKER];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, overflow: 'hidden', borderRadius: 12, padding: '10px 14px', background: dark ? 'rgba(0,0,0,0.18)' : '#fff', border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase', color: dark ? '#fff' : 'var(--ss-navy-700)', flexShrink: 0 }}><LiveDot />{t.liveNow}</span>
      <div style={{ overflow: 'hidden', flex: 1, maskImage: 'linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)' }}>
        <div className={lang === 'ar' ? 'aa-marquee-rtl' : 'aa-marquee'} style={{ display: 'flex', gap: 28, width: 'max-content' }}>
          {items.map(([n, s, sc, p], i) => {
            const st = aaStatus(s);
            return <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: dark ? 'rgba(255,255,255,0.85)' : 'var(--ss-slate-600)', whiteSpace: 'nowrap' }}>
              <DS.Icon name="phone" size={13} color={dark ? 'rgba(255,255,255,0.5)' : 'var(--ss-gray-450)'} />{n} · {p}
              <DS.Tag color={st.color} variant={dark ? 'filled' : 'bordered'}>{st[lang]}{sc ? ' · ' + sc : ''}</DS.Tag>
            </span>;
          })}
        </div>
      </div>
    </div>
  );
}

function Overview({ t, lang, hero, go, openLead, project }) {
  const [range, setRange] = React.useState('d30');
  const k = OV_RANGES[range];
  const dark = hero !== 'light';
  const heroBg = hero === 'navy' ? '#1b2738' : hero === 'teal' ? 'var(--ss-teal-700)' : 'transparent';
  const leads = Math.round(1506 * k), answered = Math.round(937 * k), qualified = Math.round(610 * k);
  const pf = l => project === 'all' || l.project === project;
  const recent = AA_LEADS.filter(l => l.status === 'qualified' && pf(l)).slice(0, 4);
  const statusData = [
    { label: aaStatus('qualified')[lang], value: 41, color: 'var(--ss-green-600)' },
    { label: aaStatus('nurture')[lang], value: 17, color: 'var(--ss-purple-300)' },
    { label: aaStatus('call_back')[lang], value: 9, color: 'var(--ss-orange-400)' },
    { label: aaStatus('unreachable')[lang], value: 21, color: 'var(--ss-red-400)' },
    { label: aaStatus('not_qualified')[lang], value: 12, color: 'var(--ss-gray-300)' },
  ];
  const ranges = [['today', t.today], ['d7', t.d7], ['d30', t.d30], ['all', t.all]];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ background: heroBg, borderRadius: dark ? 22 : 0, padding: dark ? 'clamp(20px, 3vw, 36px)' : 0, color: dark ? '#fff' : 'inherit', position: 'relative', overflow: 'hidden' }}>
        {dark ? <div style={{ position: 'absolute', insetInlineEnd: -120, top: -160, width: 420, height: 420, borderRadius: '50%', background: hero === 'navy' ? 'rgba(7,101,103,0.35)' : 'rgba(195,148,255,0.22)', filter: 'blur(60px)', pointerEvents: 'none' }} /> : null}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap', marginBottom: 22 }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{ fontSize: 14, opacity: 0.75, marginBottom: 6 }}>{t.hello}</div>
            <h1 style={{ margin: 0, fontFamily: 'var(--ss-font-display)', fontWeight: 500, fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.3, color: dark ? '#fff' : 'var(--ss-teal-700)' }}>{t.ovTitle}</h1>
            <p style={{ margin: '8px 0 0', fontSize: 16, lineHeight: '24px', color: dark ? 'rgba(255,255,255,0.75)' : 'var(--ss-slate-600)' }}>{t.ovSub}</p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <DS.ButtonGroup items={ranges.map(r => r[1])} value={ranges.find(r => r[0] === range)[1]} onChange={v => setRange(ranges.find(r => r[1] === v)[0])} activeColor="var(--ss-teal-700)" style={{ background: '#fff' }} />
            <DS.Button variant={dark ? 'pill' : 'primary'} icon="radio" onClick={() => go('live')}>{t.viewLive}</DS.Button>
          </div>
        </div>
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: 14, marginBottom: 16 }}>
          <HeroKpi dark={dark} label={t.kpis.answer} value={62} fmt={v => Math.round(v) + '%'} target={t.target + ' ≥ 55%'} good delay={range} />
          <HeroKpi dark={dark} label={t.kpis.qualified} value={65} fmt={v => Math.round(v) + '%'} target={t.target + ' ≥ 50%'} good delay={range} />
          <HeroKpi dark={dark} label={t.kpis.dropped} value={91} fmt={v => Math.round(v) + '%'} target={t.target + ' ≥ 88%'} good delay={range} />
          <HeroKpi dark={dark} label={t.kpis.aht} value={175} fmt={v => Math.floor(v / 60) + 'm ' + String(Math.round(v % 60)).padStart(2, '0') + 's'} target={t.target + ' ≤ 3m 30s'} good delay={range} />
        </div>
        <div style={{ position: 'relative' }}><Ticker t={t} lang={lang} dark={dark} /></div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16 }}>
        {[[t.kpis.leads, leads.toLocaleString(), 'users', [12, 18, 15, 22, 26, 24, 31]], [t.kpis.csat, '3.7 / 5', 'smile', [3.4, 3.5, 3.6, 3.5, 3.7, 3.8, 3.7]], [t.kpis.dial, '42 s', 'timer', [58, 51, 47, 49, 44, 41, 42]], [t.kpis.odoo, '4m 12s', 'briefcase-business', [330, 301, 288, 276, 270, 259, 252]]].map(([l, v, ic, sp]) => (
          <div key={l} style={{ background: '#fff', borderRadius: 12, padding: '16px 18px', boxShadow: 'var(--ss-shadow-kpi)', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(7,101,103,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DS.Icon name={ic} size={19} color="var(--ss-teal-700)" /></span>
            <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 13, color: 'var(--ss-slate-600)' }}>{l}</div><div style={{ fontSize: 20, fontWeight: 600, color: 'var(--ss-ink)' }}>{v}</div></div>
            <Spark points={sp} color="var(--ss-teal-500)" w={70} h={28} />
          </div>))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20 }}>
        <Panel title={t.funnel}>
          <Funnel key={range} steps={[
            { label: t.funnelSteps[0], value: leads, color: 'var(--ss-navy-700)' },
            { label: t.funnelSteps[1], value: Math.round(1452 * k), color: 'var(--ss-teal-800)' },
            { label: t.funnelSteps[2], value: answered, color: 'var(--ss-teal-500)' },
            { label: t.funnelSteps[3], value: qualified, color: 'var(--ss-green-600)' },
            { label: t.funnelSteps[5], value: Math.round(236 * k), color: 'var(--ss-purple-300)' },
          ]} />
        </Panel>
        <Panel title={t.lang}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <Donut data={[{ value: 62, color: 'var(--ss-teal-700)' }, { value: 30, color: 'var(--ss-purple-300)' }, { value: 8, color: 'var(--ss-lime-300)' }]} center={<><span style={{ fontSize: 22, fontWeight: 600 }}>{answered.toLocaleString()}</span><span style={{ fontSize: 11, color: 'var(--ss-gray-550)' }}>{t.funnelSteps[2]}</span></>} />
            <div style={{ flex: 1, minWidth: 160 }}><Legend data={[{ label: lang === 'ar' ? 'العربية (سعودي)' : 'Arabic (Saudi)', value: 62, color: 'var(--ss-teal-700)' }, { label: lang === 'ar' ? 'الإنجليزية' : 'English', value: 30, color: 'var(--ss-purple-300)' }, { label: lang === 'ar' ? 'الفرنسية' : 'French', value: 8, color: 'var(--ss-lime-300)' }]} /></div>
          </div>
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20 }}>
        <Panel title={lang === 'ar' ? 'الجنسية' : 'Nationality'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <Donut data={[{ value: 78, color: 'var(--ss-teal-700)' }, { value: 22, color: 'var(--ss-lime-300)' }]} center={<><span style={{ fontSize: 22, fontWeight: 600 }}>{answered.toLocaleString()}</span><span style={{ fontSize: 11, color: 'var(--ss-gray-550)' }}>{t.funnelSteps[2]}</span></>} />
            <div style={{ flex: 1, minWidth: 160 }}><Legend data={[{ label: lang === 'ar' ? 'سعودي' : 'Saudi', value: 78, color: 'var(--ss-teal-700)' }, { label: lang === 'ar' ? 'غير سعودي' : 'Non-Saudi', value: 22, color: 'var(--ss-lime-300)' }]} /></div>
          </div>
        </Panel>
        <Panel title={lang === 'ar' ? 'نسبة التأهل حسب الجنسية' : 'Qualified rate by nationality'}>
          {[[lang === 'ar' ? 'سعودي' : 'Saudi', 68, Math.round(answered * 0.78), 'var(--ss-teal-700)'], [lang === 'ar' ? 'غير سعودي' : 'Non-Saudi', 54, Math.round(answered * 0.22), 'var(--ss-lime-300)']].map(([l, q, cnt, c]) => (
            <div key={l} style={{ padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 8 }}><span style={{ color: 'var(--ss-ink)' }}>{l} <span style={{ color: 'var(--ss-gray-550)' }}>· {cnt.toLocaleString()} {lang === 'ar' ? 'مجيب' : 'answered'}</span></span><b style={{ fontWeight: 600 }}>{q}%</b></div>
              <div style={{ height: 10, borderRadius: 5, background: 'var(--ss-progress-track)' }}><div style={{ width: q + '%', height: '100%', borderRadius: 5, background: c }} /></div>
            </div>))}
          <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 8 }}>{lang === 'ar' ? 'نسبة المؤهلين من المجيبين' : 'Share of answered calls that qualified'}</div>
        </Panel>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20 }}>
        <Panel title={t.statusMix} action={<DS.Button variant="text" onClick={() => go('pipeline')}>{t.seeAll}</DS.Button>}>
          <div style={{ display: 'flex', height: 14, borderRadius: 7, overflow: 'hidden', marginBottom: 18 }}>
            {statusData.map((s, i) => <span key={i} style={{ width: s.value + '%', background: s.color }} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 10 }}><Legend data={statusData.slice(0, 3)} /><Legend data={statusData.slice(3)} /></div>
        </Panel>
        <Panel title={t.recentQ} action={<DS.Button variant="text" onClick={() => go('pipeline')}>{t.seeAll}</DS.Button>} pad={12}>
          {recent.map(l => (
            <div key={l.id} onClick={() => openLead(l.id)} className="aa-row" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '10px 12px', borderRadius: 10, cursor: 'pointer' }}>
              <ScoreRing score={l.score} size={42} stroke={4} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, color: 'var(--ss-ink)' }}>{lang === 'ar' ? l.ar : l.name} · {l.unit}</div>
                <div style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{l.project} · {l.channel} · {l.when}</div>
              </div>
              <DS.Tag color="green" dot>Odoo {l.odoo}</DS.Tag>
            </div>))}
        </Panel>
      </div>
    </div>
  );
}
window.Overview = Overview;
