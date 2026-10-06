const IN_RANGES = { today: 0.09, d7: 0.42, d30: 1, all: 4.8 };
const IN_RECENT = [
  { id: 'C-88405', who: 'Inbound caller', ar: 'متصل وارد', project: 'Generic Agent', lang: 'AR', start: 'Oct 4, 08:55', dur: '1:12', reason: 'generic', outcome: 'generic', csat: 3.5 },
  { id: 'C-88371', who: 'Abdullah Al-Saud', ar: 'عبدالله آل سعود', project: 'Al-Narjis', lang: 'AR', start: 'Oct 3, 20:41', dur: '4:02', reason: 'project', outcome: 'qualified', csat: 4.8 },
  { id: 'C-88366', who: 'Majed Al-Harthi', ar: 'ماجد الحارثي', project: 'Diar AlHaram', lang: 'AR', start: 'Oct 3, 19:12', dur: '2:47', reason: 'visit', outcome: 'transferred', csat: 4.4 },
  { id: 'C-88359', who: 'James Porter', ar: 'جيمس بورتر', project: 'Diar AlHaram', lang: 'EN', start: 'Oct 3, 17:58', dur: '3:21', reason: 'pricing', outcome: 'nurture', csat: 4.1 },
  { id: 'C-88350', who: 'Inbound caller', ar: 'متصل وارد', project: 'Generic Agent', lang: 'AR', start: 'Oct 3, 16:30', dur: '0:58', reason: 'existing', outcome: 'resolved', csat: 4.0 },
  { id: 'C-88344', who: 'Hessa Al-Mutairi', ar: 'حصة المطيري', project: 'Al-Narjis', lang: 'AR', start: 'Oct 3, 15:05', dur: '2:09', reason: 'project', outcome: 'qualified', csat: 4.6 },
];

function InboundCalls({ t, lang, project }) {
  const ar = lang === 'ar';
  const [range, setRange] = React.useState('d30');
  const k = IN_RANGES[range];
  const n = v => Math.round(v * k).toLocaleString();
  const ranges = [['today', t.today], ['d7', t.d7], ['d30', t.d30], ['all', t.all]];
  const reasons = {
    project: ar ? 'معلومات المشروع' : 'Project information',
    pricing: ar ? 'الأسعار وخطط السداد' : 'Pricing & payment plans',
    visit: ar ? 'حجز زيارة للموقع' : 'Book a site visit',
    existing: ar ? 'متابعة حجز قائم' : 'Existing booking follow-up',
    generic: ar ? 'استفسار عام' : 'General inquiry',
    complaint: ar ? 'شكوى' : 'Complaint',
  };
  const reasonMix = [['project', 33], ['pricing', 24], ['visit', 17], ['existing', 12], ['generic', 10], ['complaint', 4]];
  const outcomes = {
    qualified: aaStatus('qualified'), nurture: aaStatus('nurture'),
    transferred: { color: 'orange', en: 'Transferred to sales', ar: 'حُوّل للمبيعات' },
    resolved: { color: 'blue', en: 'Resolved by AI', ar: 'حُلّ آليًا' },
    generic: { color: 'gray', en: 'Generic inquiry', ar: 'استفسار عام' },
  };
  const routing = [
    { label: ar ? 'وكيل المشروع' : 'Routed to project agent', value: 54, color: 'var(--ss-teal-700)' },
    { label: ar ? 'الوكيل العام' : 'Handled by generic agent', value: 28, color: 'var(--ss-purple-300)' },
    { label: ar ? 'تحويل لموظف مبيعات' : 'Transferred to a human', value: 13, color: 'var(--ss-orange-400)' },
    { label: ar ? 'خارج أوقات العمل / بريد صوتي' : 'After hours / voicemail', value: 5, color: 'var(--ss-gray-300)' },
  ];
  const daily = (ar ? ['سبت', 'أحد', 'اثن', 'ثلا', 'أرب', 'خمي', 'جمع'] : ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']).map((label, i) => ({ label, a: [34, 38, 29, 31, 33, 27, 20][i], b: [11, 13, 9, 10, 11, 8, 5][i] }));
  const days = ar ? ['سبت', 'أحد', 'اثن', 'ثلا', 'أرب', 'خمي', 'جمع'] : ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hours = ['09', '11', '13', '15', '17', '19', '21', '23'];
  const heat = [[3, 5, 4, 5, 8, 9, 7, 2], [4, 6, 4, 6, 9, 10, 8, 3], [3, 4, 3, 5, 7, 8, 6, 2], [3, 5, 4, 5, 7, 9, 6, 2], [3, 5, 3, 4, 8, 8, 7, 3], [2, 4, 3, 4, 6, 8, 7, 3], [1, 2, 2, 3, 5, 6, 5, 2]];
  const calls = IN_RECENT.filter(c => project === 'all' || c.project === project || c.project === 'Generic Agent');
  const legendKey = (color, label) => <span><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: color, marginInlineEnd: 6 }} />{label}</span>;
  return (
    <div>
      <PageHead
        title={ar ? 'المكالمات الواردة' : 'Inbound Calls'}
        sub={ar ? 'كل مكالمة واردة يرد عليها الوكيل خلال ثوانٍ، ويوجّهها للمشروع الصحيح أو لفريق المبيعات.' : 'Every inbound call answered in seconds, routed to the right project agent or handed to your sales team.'}
        right={<DS.ButtonGroup items={ranges.map(r => r[1])} value={ranges.find(r => r[0] === range)[1]} onChange={v => setRange(ranges.find(r => r[1] === v)[0])} activeColor="var(--ss-teal-700)" style={{ background: '#fff' }} />}
      />
      <div key={range} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: 14, marginBottom: 20 }}>
        {[[ar ? 'مكالمات واردة' : 'Inbound calls', n(212)], [ar ? 'رد عليها الوكيل' : 'Answered by AI', '98%'], [ar ? 'متوسط وقت الرد' : 'Avg pickup time', '3 s'], [ar ? 'حُلّت آليًا' : 'Resolved by AI', '64%'], [ar ? 'عملاء مؤهلون' : 'Qualified leads', n(71)], [ar ? 'رضا المتصلين' : 'Caller CSAT', '4.1 / 5']].map(([l, v]) => <DS.SummaryCard key={l} label={l} value={v} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 20, marginBottom: 20 }}>
        <Panel title={ar ? 'لماذا يتصل العملاء' : 'Why people call'} action={<DS.StatusBadge color="gray" size="small">AI Batch QA</DS.StatusBadge>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {reasonMix.map(([id, v]) => <div key={id} style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, 210px) 1fr 40px', gap: 12, alignItems: 'center', fontSize: 13 }}><span style={{ color: 'var(--ss-slate-600)' }}>{reasons[id]}</span><div style={{ height: 8, borderRadius: 4, background: 'var(--ss-progress-track)' }}><div style={{ width: v * 2.5 + '%', height: '100%', borderRadius: 4, background: 'var(--ss-teal-700)' }} /></div><span style={{ textAlign: 'end' }}>{v}%</span></div>)}
          </div>
        </Panel>
        <Panel title={ar ? 'توجيه المكالمات' : 'Call routing'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
            <Donut data={routing} center={<><span style={{ fontSize: 22, fontWeight: 600 }}>{n(212)}</span><span style={{ fontSize: 11, color: 'var(--ss-gray-550)' }}>{ar ? 'مكالمة' : 'calls'}</span></>} />
            <div style={{ flex: 1, minWidth: 170 }}><Legend data={routing} /></div>
          </div>
        </Panel>
        <Panel title={ar ? 'المكالمات الواردة والمؤهلون حسب اليوم' : 'Inbound calls vs qualified, by day'} action={<div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--ss-slate-600)' }}>{legendKey('var(--ss-teal-700)', ar ? 'مكالمات' : 'Calls')}{legendKey('var(--ss-purple-300)', ar ? 'مؤهلون' : 'Qualified')}</div>}>
          <Bars data={daily} color="var(--ss-teal-700)" color2="var(--ss-purple-300)" height={200} />
        </Panel>
        <Panel title={ar ? 'متى يتصل العملاء' : 'When people call'}>
          <Heatmap rows={days} cols={hours} values={heat} />
          <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 12 }}>{ar ? 'الذروة ١٧:٠٠–٢١:٠٠ · ٢١٪ من المكالمات بعد ساعات عمل فريق المبيعات' : 'Peak 17:00–21:00 · 21% of calls arrive after your sales team has left'}</div>
        </Panel>
      </div>
      <Panel title={ar ? 'أحدث المكالمات الواردة' : 'Latest inbound calls'} pad={12}>
        {calls.map(c => { const s = outcomes[c.outcome]; return (
          <div key={c.id} className="aa-row" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px', borderRadius: 10, flexWrap: 'wrap' }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(7,101,103,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DS.Icon name="phone-incoming" size={18} color="var(--ss-teal-700)" /></span>
            <div style={{ flex: '1 1 220px', minWidth: 0 }}>
              <div style={{ fontSize: 14, color: 'var(--ss-ink)' }}>{ar ? c.ar : c.who} · <span style={{ color: 'var(--ss-gray-550)' }}>{c.id}</span></div>
              <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 2 }}>{reasons[c.reason]} · {c.project} · {c.lang} · {c.start} · {c.dur}</div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--ss-slate-600)' }}>★ {c.csat.toFixed(1)}</span>
            <DS.Tag color={s.color}>{s[lang]}</DS.Tag>
          </div>); })}
      </Panel>
    </div>
  );
}
window.InboundCalls = InboundCalls;
