function useTicker(ms = 1000) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => { const id = setInterval(() => setN(x => x + 1), ms); return () => clearInterval(id); }, [ms]);
  return n;
}
const fmtSec = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');

function LiveCall({ t, lang, speed, onQualified, openLead }) {
  const [step, setStep] = React.useState(0);
  const [phase, setPhase] = React.useState('call'); // call → scoring → done
  const [post, setPost] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const boxRef = React.useRef(null);
  const interval = 2300 / speed;
  React.useEffect(() => {
    if (phase !== 'call') return;
    if (step >= AA_SCRIPT.length) { setPhase('scoring'); return; }
    const id = setTimeout(() => setStep(s => s + 1), step === 0 ? 600 : interval);
    return () => clearTimeout(id);
  }, [step, phase, interval]);
  React.useEffect(() => { if (phase !== 'call') return; const id = setInterval(() => setSec(s => s + 1), 1000 / speed); return () => clearInterval(id); }, [phase, speed]);
  React.useEffect(() => {
    if (phase !== 'scoring') return;
    if (post >= 4) { setPhase('done'); onQualified && onQualified({ name: lang === 'ar' ? 'فيصل الحربي' : 'Faisal Al-Harbi', score: 90 }); return; }
    const id = setTimeout(() => setPost(p => p + 1), 900 / speed);
    return () => clearTimeout(id);
  }, [phase, post, speed]);
  React.useEffect(() => { if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight; }, [step]);
  const lines = AA_SCRIPT.slice(0, step);
  const gains = {};
  lines.forEach(l => l.gain && Object.assign(gains, l.gain));
  const score = Object.values(gains).reduce((a, b) => a + b, 0);
  const override = lines.some(l => l.override);
  const current = AA_SCRIPT[Math.max(0, step - 1)];
  const replay = () => { setStep(0); setPhase('call'); setPost(0); setSec(0); };
  const postSteps = lang === 'ar' ? ['تحويل النص إلى JSON', 'حساب التقييم ← مؤهل', 'إنشاء فرصة في Odoo', 'إرسال قالب واتساب WA-01'] : ['Transcript → JSON', 'Score computed → qualified', 'Odoo opportunity created', 'WhatsApp WA-01 sent'];
  return (
    <div style={{ background: '#1b2738', borderRadius: 22, color: '#fff', padding: 'clamp(18px, 2.4vw, 28px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 24, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', insetInlineStart: -140, bottom: -180, width: 420, height: 420, borderRadius: '50%', background: 'rgba(7,101,103,0.4)', filter: 'blur(70px)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <DS.Avatar initials="FH" size={48} color="custom" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, opacity: 0.65, display: 'flex', alignItems: 'center', gap: 6 }}>{phase === 'call' ? <LiveDot /> : null}{phase === 'call' ? t.listening : t.endedQ}</div>
            <div style={{ fontSize: 18, fontWeight: 500 }}>{lang === 'ar' ? 'فيصل الحربي' : 'Faisal Al-Harbi'}</div>
            <div style={{ fontSize: 12, opacity: 0.65 }}>Diar AlHaram · Landing page (QR) · AR · Outbound 1/3</div>
          </div>
          <span style={{ fontSize: 22, fontVariantNumeric: 'tabular-nums', fontWeight: 600 }}>{fmtSec(sec)}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px', borderRadius: 14, background: 'rgba(255,255,255,0.06)' }}>
          <DS.Icon name={current && current.who === 'agent' ? 'bot' : 'user'} size={18} color="#c394ff" />
          <Wave active={phase === 'call'} color={current && current.who === 'agent' ? '#c394ff' : 'rgba(255,255,255,0.85)'} />
        </div>
        <div style={{ fontSize: 12, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 0.6 }}>{t.transcript}</div>
        <div ref={boxRef} style={{ height: 300, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10, paddingInlineEnd: 6 }}>
          {lines.map((l, i) => (
            <div key={i} className="aa-fade" style={{ alignSelf: l.who === 'agent' ? 'flex-start' : 'flex-end', maxWidth: '86%', padding: '10px 14px', borderRadius: 14, background: l.who === 'agent' ? 'rgba(195,148,255,0.16)' : 'rgba(255,255,255,0.1)', border: l.signal ? '1px solid rgba(195,148,255,0.35)' : '1px solid transparent' }}>
              <div style={{ fontSize: 14, lineHeight: 1.55 }} dir={lang === 'ar' ? 'rtl' : 'ltr'}>{lang === 'ar' ? l.ar : l.en}</div>
              <div style={{ fontSize: 11, opacity: 0.55, marginTop: 4 }} dir={lang === 'ar' ? 'ltr' : 'rtl'}>{lang === 'ar' ? l.en : l.ar}</div>
            </div>))}
          {phase === 'call' && step < AA_SCRIPT.length ? <div style={{ fontSize: 12, opacity: 0.5 }}>…</div> : null}
        </div>
      </div>
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: 18, borderRadius: 16, background: 'rgba(255,255,255,0.06)' }}>
          <ScoreRing score={score} size={92} stroke={8} dark label="/100" />
          <div>
            <div style={{ fontSize: 12, opacity: 0.65 }}>{t.aiScore}</div>
            <div style={{ fontSize: 18, fontWeight: 500, margin: '4px 0' }}>{override ? (lang === 'ar' ? 'مؤهل · وافق على اتصال المبيعات' : 'Qualified · sales call approved') : score >= 60 ? aaStatus('qualified')[lang] : score >= 35 ? aaStatus('nurture')[lang] : (lang === 'ar' ? 'جارٍ التقييم' : 'Scoring…')}</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>{lang === 'ar' ? 'مؤهل عند ٦٠ أو أكثر، أو بموافقته على اتصال المبيعات' : 'Qualified at ≥ 60, or with sales-call permission'}</div>
          </div>
        </div>
        <div style={{ fontSize: 12, opacity: 0.6, textTransform: 'uppercase', letterSpacing: 0.6 }}>{t.signals}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {AA_RUBRIC.map(r => {
            const g = gains[r.id] || 0;
            return (
              <div key={r.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(84px, 120px) 1fr 48px', alignItems: 'center', gap: 12, fontSize: 13 }}>
                <span style={{ opacity: 0.8 }}>{r[lang]}</span>
                <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.12)', overflow: 'hidden' }}><div style={{ width: (g / r.max) * 100 + '%', height: '100%', background: g ? '#5fe0a3' : 'transparent', borderRadius: 3, transition: 'width .7s ease' }} /></div>
                <span style={{ textAlign: 'end', fontVariantNumeric: 'tabular-nums', opacity: g ? 1 : 0.5 }}>{g}/{r.max}</span>
              </div>);
          })}
          <OverrideRow lang={lang} granted={override ? true : null} dark />
        </div>
        {phase !== 'call' ? (
          <div className="aa-fade" style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 16, borderRadius: 14, background: 'rgba(1,219,114,0.08)', border: '1px solid rgba(1,219,114,0.25)' }}>
            {postSteps.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, opacity: i < post ? 1 : 0.4, transition: 'opacity .3s' }}>
                <DS.Icon name={i < post ? 'circle-check' : 'loader'} size={16} color={i < post ? '#01db72' : '#fff'} />{s}
              </div>))}
            {phase === 'done' ? <div style={{ display: 'flex', gap: 10, marginTop: 6, flexWrap: 'wrap' }}><DS.Button variant="pill" icon="user" onClick={() => openLead('L-20929')}>{lang === 'ar' ? 'فتح ملف العميل' : 'Open lead'}</DS.Button><DS.Button variant="text" icon="rotate-ccw" onClick={replay} style={{ color: '#fff' }}>{lang === 'ar' ? 'إعادة' : 'Replay call'}</DS.Button></div> : null}
          </div>) : null}
      </div>
    </div>
  );
}

function LiveCalls({ t, lang, speed, onQualified, openLead, project }) {
  const tick = useTicker(1000);
  const calls = AA_LIVE.filter(c => project === 'all' || c.project === project || c.project === 'Generic Agent');
  const queue = AA_LEADS.filter(l => l.status === 'new' || l.status === 'call_back');
  return (
    <div>
      <PageHead title={t.liveTitle} sub={t.liveSub} right={<div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}><DS.Tag size="md" color="green" dot>{lang === 'ar' ? 'نافذة الاتصال مفتوحة · سبت–خميس ٩–٢١' : 'Calling window open · Sat–Thu 09:00–21:00 KSA'}</DS.Tag></div>} />
      <LiveCall t={t} lang={lang} speed={speed} onQualified={onQualified} openLead={openLead} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20, marginTop: 24 }}>
        <Panel title={lang === 'ar' ? 'مكالمات أخرى جارية' : 'Other calls in progress'}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 150px), 1fr))', gap: 12 }}>
            {calls.map((c, i) => (
              <div key={i} style={{ padding: 14, borderRadius: 12, border: '1px solid var(--ss-gray-120)', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><LiveDot /><span style={{ fontSize: 14, color: 'var(--ss-ink)', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span><span style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums', color: 'var(--ss-slate-600)' }}>{fmtSec(c.sec + tick)}</span></div>
                <div style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{c.project} · {c.lang}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Wave bars={22} height={20} color="var(--ss-teal-500)" /><DS.Tag color="blue">{c.stage}</DS.Tag></div>
              </div>))}
          </div>
        </Panel>
        <Panel title={t.queue} pad={14}>
          {queue.map(l => (
            <div key={l.id} onClick={() => openLead(l.id)} className="aa-row" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 10px', borderRadius: 10, cursor: 'pointer' }}>
              <DS.Avatar initials={l.name.split(' ').map(x => x[0]).slice(0, 2).join('')} size={36} color={l.status === 'call_back' ? 'orange' : 'gray'} />
              <div style={{ flex: 1, minWidth: 0 }}><div style={{ fontSize: 14, color: 'var(--ss-ink)' }}>{lang === 'ar' ? l.ar : l.name}</div><div style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{l.project} · {l.channel}</div></div>
              <span style={{ fontSize: 12, color: 'var(--ss-slate-600)', whiteSpace: 'nowrap' }}>{l.callback || (lang === 'ar' ? 'خلال ٦٠ ث' : 'Dial in < 60 s')}</span>
            </div>))}
        </Panel>
      </div>
    </div>
  );
}
Object.assign(window, { LiveCalls, fmtSec });
