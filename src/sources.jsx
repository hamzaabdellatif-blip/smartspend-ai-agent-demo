const SQ_RANGES = { today: 0.09, d7: 0.42, d30: 1, all: 4.8 };
// [source, leads, answer %, qualified % of answered, avg score, attended appts, cost per qualified lead (SAR), color]
const SQ_DATA = [
  ['Meta', 412, 58, 63, 71, 46, 184, '#1877f2'],
  ['Google', 356, 66, 72, 78, 52, 162, '#ea4335'],
  ['TikTok', 248, 49, 41, 56, 14, 311, '#111827'],
  ['Snapchat', 162, 47, 39, 54, 9, 342, '#e3c800'],
  ['QR / Landing page', 131, 81, 79, 83, 31, 58, '#076567'],
  ['Odoo (re-engaged)', 197, 62, 58, 68, 19, 41, '#8b5cf6'],
];

function SourceScatter({ data, lang }) {
  const W = 440, H = 270, P = { l: 46, r: 20, t: 16, b: 40 };
  const maxX = 450, minY = 40, maxY = 90;
  const x = v => P.l + (v / maxX) * (W - P.l - P.r);
  const y = v => P.t + (1 - (v - minY) / (maxY - minY)) * (H - P.t - P.b);
  const midX = x(250), midY = y(65);
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => { const id = setTimeout(() => setReady(true), 80); return () => clearTimeout(id); }, []);
  const ar = lang === 'ar';
  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
      <rect x={midX} y={P.t} width={W - P.r - midX} height={midY - P.t} fill="rgba(33,184,115,0.07)" />
      <text x={W - P.r - 6} y={P.t + 14} textAnchor="end" fontSize="11" fill="var(--ss-green-600)">{ar ? 'حجم كبير · جودة عالية' : 'High volume · high quality'}</text>
      <text x={W - P.r - 6} y={H - P.b - 8} textAnchor="end" fontSize="11" fill="var(--ss-gray-550)">{ar ? 'حجم كبير · جودة منخفضة' : 'High volume · low quality'}</text>
      {[40, 50, 60, 70, 80, 90].map(v => <g key={v}><line x1={P.l} x2={W - P.r} y1={y(v)} y2={y(v)} stroke="var(--ss-gray-120)" /><text x={P.l - 8} y={y(v) + 4} textAnchor="end" fontSize="10" fill="var(--ss-gray-550)">{v}</text></g>)}
      {[0, 100, 200, 300, 400].map(v => <text key={v} x={x(v)} y={H - P.b + 16} textAnchor="middle" fontSize="10" fill="var(--ss-gray-550)">{v}</text>)}
      <line x1={midX} x2={midX} y1={P.t} y2={H - P.b} stroke="var(--ss-gray-300)" strokeDasharray="4 4" />
      <line x1={P.l} x2={W - P.r} y1={midY} y2={midY} stroke="var(--ss-gray-300)" strokeDasharray="4 4" />
      <text x={(P.l + W - P.r) / 2} y={H - 4} textAnchor="middle" fontSize="11" fill="var(--ss-slate-600)">{ar ? 'عدد العملاء' : 'Leads received'}</text>
      <text transform={`translate(12 ${(P.t + H - P.b) / 2}) rotate(-90)`} textAnchor="middle" fontSize="11" fill="var(--ss-slate-600)">{ar ? 'متوسط درجة التأهيل' : 'Avg qualification score'}</text>
      {data.map(([name, leads, , , score, , , color]) => {
        const r = 8 + Math.sqrt(leads) / 2.2;
        return <g key={name} style={{ transition: 'opacity .5s, transform .5s', opacity: ready ? 1 : 0, transformOrigin: `${x(leads)}px ${y(score)}px`, transform: ready ? 'none' : 'scale(.4)' }}>
          <circle cx={x(leads)} cy={y(score)} r={r} fill={color} fillOpacity="0.22" stroke={color} strokeWidth="2" />
          <text x={x(leads)} y={y(score) - r - 6} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--ss-ink)">{name.split(' ')[0]}</text>
        </g>;
      })}
    </svg>
  );
}

function SourceQuality({ t, lang }) {
  const ar = lang === 'ar';
  const [range, setRange] = React.useState('d30');
  const k = SQ_RANGES[range];
  const ranges = [['today', t.today], ['d7', t.d7], ['d30', t.d30], ['all', t.all]];
  const rows = SQ_DATA.map(([s, leads, ans, q, score, att, cpl, color]) => ({ s, leads: Math.round(leads * k), ans, q, score, qualified: Math.round(leads * k * ans / 100 * q / 100), att: Math.round(att * k), cpl, color }));
  const best = [...rows].sort((a, b) => b.score - a.score)[0];
  const cheapest = [...rows].sort((a, b) => a.cpl - b.cpl)[0];
  const worst = [...rows].sort((a, b) => a.score - b.score)[0];
  const mix = { // hot / warm / cold share of scored leads
    'Meta': [21, 46, 33], 'Google': [29, 47, 24], 'TikTok': [9, 34, 57], 'Snapchat': [7, 32, 61], 'QR / Landing page': [38, 44, 18], 'Odoo (re-engaged)': [17, 45, 38],
  };
  const tiers = [[ar ? 'ساخن (٨٠+)' : 'Hot (80+)', 'var(--ss-green-600)'], [ar ? 'دافئ (٥٠–٧٩)' : 'Warm (50–79)', 'var(--ss-orange-400)'], [ar ? 'بارد (<٥٠)' : 'Cold (<50)', 'var(--ss-gray-300)']];
  const H = ar ? ['المصدر', 'العملاء', 'نسبة الرد', 'المؤهلون', 'نسبة التأهل', 'متوسط الدرجة', 'حضروا موعدًا', 'تكلفة العميل المؤهل'] : ['Source', 'Leads', 'Answer rate', 'Qualified', 'Qualified %', 'Avg score', 'Attended appt.', 'Cost per qualified'];
  return (
    <div>
      <PageHead
        title={ar ? 'المصدر مقابل الجودة' : 'Source vs Quality'}
        sub={ar ? 'أي القنوات تجلب عملاء جادين، وليس فقط عددًا أكبر من العملاء.' : 'Which channels bring serious buyers, not just more leads.'}
        right={<DS.ButtonGroup items={ranges.map(r => r[1])} value={ranges.find(r => r[0] === range)[1]} onChange={v => setRange(ranges.find(r => r[1] === v)[0])} activeColor="var(--ss-teal-700)" style={{ background: '#fff' }} />}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 14, marginBottom: 20 }}>
        {[['star', ar ? 'أعلى جودة' : 'Highest quality', best.s, (ar ? 'متوسط الدرجة ' : 'Avg score ') + best.score], ['currency', ar ? 'أقل تكلفة لكل مؤهل' : 'Cheapest qualified lead', cheapest.s, 'SAR ' + cheapest.cpl], ['circle-alert', ar ? 'أقل جودة' : 'Lowest quality', worst.s, (ar ? 'متوسط الدرجة ' : 'Avg score ') + worst.score]].map(([ic, l, v, sub]) => (
          <div key={l} style={{ background: '#fff', borderRadius: 12, padding: '16px 18px', boxShadow: 'var(--ss-shadow-kpi)', display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(7,101,103,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DS.Icon name={ic} size={19} color="var(--ss-teal-700)" /></span>
            <div style={{ minWidth: 0 }}><div style={{ fontSize: 13, color: 'var(--ss-slate-600)' }}>{l}</div><div style={{ fontSize: 18, fontWeight: 600, color: 'var(--ss-ink)' }}>{v}</div><div style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{sub}</div></div>
          </div>))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 20, marginBottom: 20 }}>
        <Panel title={ar ? 'الحجم مقابل الجودة' : 'Volume vs quality'}>
          <SourceScatter key={range} data={SQ_DATA} lang={lang} />
          <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 8 }}>{ar ? 'حجم الدائرة = عدد العملاء' : 'Bubble size = number of leads'}</div>
        </Panel>
        <Panel title={ar ? 'جودة العملاء حسب المصدر' : 'Quality mix by source'} action={<div style={{ display: 'flex', gap: 12, fontSize: 12, color: 'var(--ss-slate-600)', flexWrap: 'wrap' }}>{tiers.map(([l, c]) => <span key={l}><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: c, marginInlineEnd: 6 }} />{l}</span>)}</div>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {rows.map(r => (
              <div key={r.s} style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 160px) 1fr', gap: 12, alignItems: 'center', fontSize: 13 }}>
                <span style={{ color: 'var(--ss-slate-600)' }}>{r.s}</span>
                <div style={{ display: 'flex', height: 18, borderRadius: 5, overflow: 'hidden' }}>
                  {mix[r.s].map((v, i) => <span key={i} style={{ width: v + '%', background: tiers[i][1], color: i === 2 ? 'var(--ss-slate-600)' : '#fff', fontSize: 10, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{v >= 10 ? v + '%' : ''}</span>)}
                </div>
              </div>))}
          </div>
        </Panel>
      </div>
      <Panel title={ar ? 'العملاء والمؤهلون حسب المصدر' : 'Leads vs qualified by source'} style={{ marginBottom: 20 }} action={<div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--ss-slate-600)' }}><span><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: 'var(--ss-teal-700)', marginInlineEnd: 6 }} />{ar ? 'عملاء' : 'Leads'}</span><span><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: 'var(--ss-purple-300)', marginInlineEnd: 6 }} />{ar ? 'مؤهلون' : 'Qualified'}</span></div>}>
        <Bars key={range} data={rows.map(r => ({ label: r.s.split(' ')[0], a: r.leads, b: r.qualified }))} color="var(--ss-teal-700)" color2="var(--ss-purple-300)" height={200} />
      </Panel>
      <div style={{ background: '#fff', borderRadius: 23, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(170px, 1.6fr) repeat(6, minmax(100px, 1fr)) minmax(150px, 1.3fr)', minWidth: 960 }}>
            {H.map(h => <DS.TableCell key={h} type="header">{h}</DS.TableCell>)}
            {rows.map((r, i) => { const col = i % 2 ? 'gray' : 'white'; return (
              <React.Fragment key={r.s}>
                <DS.TableCell color={col}><span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><i style={{ width: 10, height: 10, borderRadius: 5, background: r.color }} />{r.s}</span></DS.TableCell>
                <DS.TableCell color={col}>{r.leads.toLocaleString()}</DS.TableCell>
                <DS.TableCell color={col}>{r.ans}%</DS.TableCell>
                <DS.TableCell color={col}>{r.qualified.toLocaleString()}</DS.TableCell>
                <DS.TableCell color={col}>{r.q}%</DS.TableCell>
                <DS.TableCell color={col} type="tag" tagColor={r.score >= 75 ? 'green' : r.score >= 60 ? 'orange' : 'gray'}>{r.score}</DS.TableCell>
                <DS.TableCell color={col}>{r.att.toLocaleString()}</DS.TableCell>
                <DS.TableCell color={col}>SAR {r.cpl}</DS.TableCell>
              </React.Fragment>); })}
          </div>
        </div>
      </div>
    </div>
  );
}
window.SourceQuality = SourceQuality;
