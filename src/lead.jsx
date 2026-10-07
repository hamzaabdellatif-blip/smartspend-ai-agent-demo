function LeadDetail({ t, lang, id, back }) {
  const l = AA_LEADS.find(x => x.id === id) || AA_LEADS[0];
  const [playing, setPlaying] = React.useState(false);
  const [pos, setPos] = React.useState(0);
  const total = 188;
  React.useEffect(() => { if (!playing) return; const iv = setInterval(() => setPos(p => { if (p >= total) { setPlaying(false); return total; } return p + 1; }), 250); return () => clearInterval(iv); }, [playing]);
  const isQ = l.status === 'qualified' || l.id === 'L-20929';
  const score = l.score != null ? l.score : (l.id === 'L-20929' ? 90 : 0);
  const st = aaStatus(l.id === 'L-20929' ? 'qualified' : l.status);
  const name = lang === 'ar' ? l.ar : l.name;
  const journey = [
    ['circle-plus', lang === 'ar' ? 'الاستلام' : 'Captured', l.channel, '09:09:14'],
    ['git-branch', lang === 'ar' ? 'التوجيه' : 'Routed', lang === 'ar' ? 'رقم موحد · بدون تكرار · نافذة مفتوحة' : 'E.164 · no duplicate · window open', '09:09:16'],
    ['phone-outgoing', lang === 'ar' ? 'الاتصال' : 'AI call', l.project + ' Agent · 3:08', '09:09:52'],
    ['sparkles', lang === 'ar' ? 'التقييم' : 'Scored', score + '/100 · conf 0.92', '09:13:07'],
    ['database', 'Odoo', isQ ? (l.odoo || 'CRM-48214') + ' · AI Qualified' : (lang === 'ar' ? 'غير مرسل' : 'Not sent'), '09:13:41'],
    ['message-circle', 'WhatsApp', isQ ? 'lead_qualified_followup · ' + (lang === 'ar' ? 'تم القراءة' : 'Read') : 'lead_unreachable_notice', '09:13:58'],
  ];
  const fields = [
    ['purpose', lang === 'ar' ? 'سكن' : 'residence'], ['location', lang === 'ar' ? 'مكة · العوالي' : 'Makkah · Al-Awali'], ['unit_type', l.unit === '—' ? '3br' : l.unit.toLowerCase()], ['budget_sar', '800,000 – 1,000,000'], ['timeline_months', '2'],
    ['financing', 'bank'], ['viewing_requested', 'true'], ['consent_whatsapp', 'true'], ['consent_sales_call', isQ ? 'true' : 'false'], ['preferred_callback', lang === 'ar' ? 'اليوم ١٦:٠٠–١٨:٠٠' : 'Today 16:00–18:00'], ['sentiment', 'positive'], ['next_action', 'advisor_call'],
  ];
  const rubric = { purpose: 20, budget: 15, timeline: 20, location: 25, unit: 10 };
  const scale = score / 90;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <DS.Link onClick={e => { e.preventDefault(); back(); }} icon={lang === 'ar' ? 'arrow-right' : 'arrow-left'}>{t.back}</DS.Link>
      <div style={{ background: '#1b2738', color: '#fff', borderRadius: 22, padding: 'clamp(18px, 2.4vw, 28px)', display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
        <ScoreRing score={score} size={96} stroke={8} dark label={t.score} />
        <div style={{ flex: 1, minWidth: 'min(100%, 240px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}><h1 style={{ margin: 0, fontFamily: 'var(--ss-font-display)', fontWeight: 500, fontSize: 'clamp(22px, 3vw, 30px)' }}>{name}</h1><DS.Tag color={st.color} variant="filled" size="md">{st[lang]}</DS.Tag></div>
          <div style={{ fontSize: 14, opacity: 0.75, marginTop: 6 }}><span dir="ltr">{l.phone}</span> · {l.project} · {l.channel} · {l.lang}</div>
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 12, maxWidth: 720, lineHeight: 1.6 }}>{lang === 'ar' ? 'يرغب في شقة ٣ غرف للسكن العائلي، الميزانية ٨٠٠ ألف–١ مليون ريال، الشراء خلال شهرين بتمويل بنكي، وطلب زيارة الموقع. يفضل اتصال المستشار اليوم ٤–٦ مساءً.' : 'Wants a 3BR for family living, budget SAR 800k–1M, buying within 2 months via bank financing, asked to visit the site. Prefers advisor call today 4–6 pm.'}</div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}><DS.Button variant="pill" icon="phone">{lang === 'ar' ? 'اتصال الآن' : 'Call now'}</DS.Button><DS.Button variant="outline" icon="external-link" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Odoo</DS.Button></div>
      </div>

      <Panel title={t.journey}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 0, position: 'relative' }}>
          {journey.map(([ic, lb, sub, tm], i) => {
            const done = isQ || i < 4;
            return (
              <div key={i} className="aa-fade" style={{ animationDelay: i * 0.12 + 's', display: 'flex', flexDirection: 'column', gap: 8, padding: '0 10px 6px 0', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: done ? 'var(--ss-teal-700)' : 'var(--ss-gray-120)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DS.Icon name={ic} size={17} color={done ? '#fff' : 'var(--ss-gray-450)'} /></span>
                  {i < journey.length - 1 ? <span style={{ flex: 1, height: 2, background: done ? 'var(--ss-teal-200)' : 'var(--ss-gray-120)' }} /> : null}
                </div>
                <div style={{ fontSize: 14, color: 'var(--ss-ink)', fontWeight: 500 }}>{lb}</div>
                <div style={{ fontSize: 12, color: 'var(--ss-slate-600)', lineHeight: 1.4 }}>{sub}</div>
                <div style={{ fontSize: 11, color: 'var(--ss-gray-550)', fontVariantNumeric: 'tabular-nums' }}>{tm}</div>
              </div>);
          })}
        </div>
      </Panel>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20 }}>
        <Panel title={t.recording}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 14, borderRadius: 12, background: 'var(--ss-gray-50)', marginBottom: 16 }}>
            <span role="button" onClick={() => setPlaying(!playing)} style={{ width: 42, height: 42, borderRadius: '50%', background: 'var(--ss-teal-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}><DS.Icon name={playing ? 'pause' : 'play'} size={18} color="#fff" /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ height: 6, borderRadius: 3, background: 'var(--ss-gray-120)', overflow: 'hidden', cursor: 'pointer' }} onClick={e => { const r = e.currentTarget.getBoundingClientRect(); const x = lang === 'ar' ? r.right - e.clientX : e.clientX - r.left; setPos(Math.round((x / r.width) * total)); }}><div style={{ width: (pos / total) * 100 + '%', height: '100%', background: 'var(--ss-teal-700)' }} /></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ss-gray-550)', marginTop: 6 }}><span>{fmtSec(pos)}</span><span>{fmtSec(total)}</span></div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 280, overflowY: 'auto' }}>
            {AA_SCRIPT.map((s, i) => {
              const active = playing && Math.floor((pos / total) * AA_SCRIPT.length) === i;
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '44px 1fr', gap: 10, padding: '6px 8px', borderRadius: 8, background: active ? 'rgba(7,101,103,0.08)' : 'transparent' }}>
                  <span style={{ fontSize: 11, color: s.who === 'agent' ? 'var(--ss-purple-700)' : 'var(--ss-teal-700)', fontWeight: 600, paddingTop: 2 }}>{s.who === 'agent' ? 'AI' : (lang === 'ar' ? 'العميل' : 'Lead')}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ss-ink)' }}>{lang === 'ar' ? s.ar : s.en}</span>
                </div>);
            })}
          </div>
        </Panel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
          <Panel title={t.rubric}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {AA_RUBRIC.map(r => { const g = Math.round((rubric[r.id] || 0) * scale); return (
                <div key={r.id} style={{ display: 'grid', gridTemplateColumns: 'minmax(90px, 130px) 1fr 50px', gap: 12, alignItems: 'center', fontSize: 13 }}>
                  <span style={{ color: 'var(--ss-slate-600)' }}>{r[lang]}</span>
                  <div style={{ height: 6, borderRadius: 3, background: 'var(--ss-progress-track)', overflow: 'hidden' }}><div style={{ width: (g / r.max) * 100 + '%', height: '100%', background: 'var(--ss-ontrack)', borderRadius: 3 }} /></div>
                  <span style={{ textAlign: 'end', color: 'var(--ss-ink)' }}>{g}/{r.max}</span>
                </div>); })}
              <OverrideRow lang={lang} granted={isQ} />
            </div>
          </Panel>
          <Panel title={t.extracted} action={<DS.StatusBadge color="green" size="small">confidence 0.92</DS.StatusBadge>}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px 18px' }}>
              {fields.map(([k, v]) => <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ fontFamily: 'var(--fontfamily-mono, monospace)', fontSize: 11, color: 'var(--ss-gray-550)' }}>{k}</span><span style={{ fontSize: 14, color: 'var(--ss-ink)' }}>{v}</span></div>)}
            </div>
          </Panel>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 20 }}>
        <Panel title={t.whatsapp} action={<DS.Tag color="green" dot>{lang === 'ar' ? 'تمت القراءة' : 'Read'} 09:15</DS.Tag>}>
          <div style={{ background: '#e9e3d8', borderRadius: 14, padding: 16 }}>
            <div style={{ maxWidth: 340, background: '#fff', borderRadius: '4px 12px 12px 12px', padding: 10, boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div style={{ height: 70, borderRadius: 8, background: 'var(--ss-teal-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: '#fff', fontSize: 13, marginBottom: 8 }}><DS.Icon name="file-text" size={20} color="#fff" />{l.project} Brochure.pdf</div>
              <div style={{ fontSize: 13, lineHeight: 1.55, color: '#111' }}>{lang === 'ar' ? `مرحباً ${name.split(' ')[0]}، شكراً لاهتمامك بمشروع ${l.project}. مرفق الكتيب، وسيتصل بك مستشارنا اليوم بين ٤ و٦ مساءً.` : `Hi ${name.split(' ')[0]}, thanks for your interest in ${l.project}. The brochure is attached and our advisor will call you today between 4 and 6 pm.`}</div>
              <div style={{ fontSize: 10, color: '#8a8a8a', textAlign: 'end', marginTop: 4 }}>09:13 ✓✓</div>
              <div style={{ borderTop: '1px solid #eee', marginTop: 8, paddingTop: 8, textAlign: 'center', color: '#0a7cff', fontSize: 13 }}>{lang === 'ar' ? 'عرض المشروع' : 'View project'}</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 10 }}>Template lead_qualified_followup · Utility · {lang === 'ar' ? 'ar' : 'en'}</div>
        </Panel>
        <Panel title={t.odooSync}>
          {[['09:13:22', 'POST Zapier Z1 · catch hook', '200 · 310 ms'], ['09:13:31', 'Find partner by +966 phone', lang === 'ar' ? 'لا يوجد · إنشاء' : 'none · create'], ['09:13:41', 'crm.lead create · stage “AI Qualified”', (l.odoo || 'CRM-48214')], ['09:13:42', 'mail.activity · Call · advisor Rania', 'due 16:00']].map(([tm, a, r], i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '64px minmax(0, 1fr) auto', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: i < 3 ? '1px solid var(--ss-gray-120)' : 'none', fontSize: 13 }}>
              <span style={{ color: 'var(--ss-gray-550)', fontVariantNumeric: 'tabular-nums' }}>{tm}</span><span style={{ color: 'var(--ss-ink)' }}>{a}</span><DS.Tag color="green">{r}</DS.Tag>
            </div>))}
          <div style={{ marginTop: 14 }}><DS.Alert variant="success" width="100%" title={lang === 'ar' ? 'وصل إلى Odoo خلال ٣٤ ثانية من إنهاء المكالمة' : 'Reached Odoo 34 s after hang-up'}>{lang === 'ar' ? 'المستهدف ≤ دقيقتين' : 'Target ≤ 2 min · no duplicates'}</DS.Alert></div>
        </Panel>
      </div>
    </div>
  );
}
window.LeadDetail = LeadDetail;
