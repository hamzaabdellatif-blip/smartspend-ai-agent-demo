// Lightweight SVG charts for the AI Agent dashboard
function Donut({ data, size = 150, stroke = 22, center }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r;
  const total = data.reduce((a, d) => a + d.value, 0);
  let off = 0;
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => { const id = setTimeout(() => setReady(true), 60); return () => clearTimeout(id); }, []);
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--ss-progress-track)" strokeWidth={stroke} />
        {data.map((d, i) => {
          const len = (d.value / total) * c;
          const el = <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={d.color} strokeWidth={stroke} strokeDasharray={`${ready ? Math.max(0, len - 2) : 0} ${c}`} strokeDashoffset={-off} style={{ transition: `stroke-dasharray .9s ease ${i * 0.12}s` }} />;
          off += len; return el;
        })}
      </svg>
      {center ? <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>{center}</div> : null}
    </div>
  );
}

function Legend({ data, unit = '%' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--ss-slate-600)' }}>
          <span style={{ width: 10, height: 10, borderRadius: 3, background: d.color, flexShrink: 0 }} />
          <span style={{ flex: 1 }}>{d.label}</span><span style={{ color: 'var(--ss-ink)', fontWeight: 500 }}>{d.value}{unit}</span>
        </div>))}
    </div>
  );
}

function Funnel({ steps }) {
  const max = steps[0].value;
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => { const id = setTimeout(() => setReady(true), 80); return () => clearTimeout(id); }, []);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {steps.map((s, i) => {
        const pct = s.value / max;
        const conv = i > 0 ? Math.round((s.value / steps[i - 1].value) * 100) : null;
        return (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'minmax(110px,150px) 1fr 56px', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 13, color: 'var(--ss-slate-600)' }}>{s.label}</span>
            <div style={{ height: 30, background: 'var(--ss-gray-50)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ height: '100%', width: (ready ? pct * 100 : 0) + '%', background: s.color, borderRadius: 8, transition: `width 1s cubic-bezier(.2,.8,.2,1) ${i * 0.1}s`, display: 'flex', alignItems: 'center', paddingInline: 10, boxSizing: 'border-box', color: '#fff', fontSize: 12, fontWeight: 600 }}>{s.value.toLocaleString()}</div>
            </div>
            <span style={{ fontSize: 12, color: conv ? 'var(--ss-green-600)' : 'var(--ss-gray-550)', textAlign: 'end' }}>{conv ? conv + '%' : '100%'}</span>
          </div>);
      })}
    </div>
  );
}

function Bars({ data, height = 170, color = 'var(--ss-teal-700)', color2 }) {
  const max = Math.max(...data.map(d => Math.max(d.a, d.b || 0)));
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => { const id = setTimeout(() => setReady(true), 80); return () => clearTimeout(id); }, []);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height, paddingTop: 10 }}>
      {data.map((d, i) => (
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, height: '100%', justifyContent: 'flex-end', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: '100%', width: '100%', justifyContent: 'center' }}>
            <div title={d.a} style={{ width: '38%', maxWidth: 26, height: (ready ? (d.a / max) * 100 : 0) + '%', background: color, borderRadius: '6px 6px 2px 2px', transition: `height .9s ease ${i * 0.06}s` }} />
            {d.b != null ? <div title={d.b} style={{ width: '38%', maxWidth: 26, height: (ready ? (d.b / max) * 100 : 0) + '%', background: color2 || 'var(--ss-teal-200)', borderRadius: '6px 6px 2px 2px', transition: `height .9s ease ${i * 0.06 + 0.05}s` }} /> : null}
          </div>
          <span style={{ fontSize: 11, color: 'var(--ss-gray-550)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{d.label}</span>
        </div>))}
    </div>
  );
}

function Spark({ points, color = '#01db72', w = 120, h = 34 }) {
  const max = Math.max(...points), min = Math.min(...points);
  const d = points.map((p, i) => `${i ? 'L' : 'M'} ${(i / (points.length - 1)) * w} ${h - ((p - min) / (max - min || 1)) * (h - 4) - 2}`).join(' ');
  return <svg width={w} height={h} style={{ display: 'block' }}><path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Heatmap({ rows, cols, values }) {
  const max = Math.max(...values.flat());
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `44px repeat(${cols.length}, minmax(0,1fr))`, gap: 4, fontSize: 11, color: 'var(--ss-gray-550)' }}>
      <span />{cols.map(c => <span key={c} style={{ textAlign: 'center' }}>{c}</span>)}
      {rows.map((r, ri) => (
        <React.Fragment key={r}>
          <span style={{ alignSelf: 'center' }}>{r}</span>
          {values[ri].map((v, ci) => <span key={ci} title={v + '% answer'} style={{ height: 26, borderRadius: 5, background: `rgba(7,101,103,${0.08 + (v / max) * 0.9})` }} />)}
        </React.Fragment>))}
    </div>
  );
}

function Wave({ active = true, bars = 36, color = 'rgba(255,255,255,0.85)', height = 44 }) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => { if (!active) return; const id = setInterval(() => setTick(x => x + 1), 120); return () => clearInterval(id); }, [active]);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height }}>
      {Array.from({ length: bars }).map((_, i) => {
        const v = active ? 0.25 + Math.abs(Math.sin((i + tick) * 0.55) * Math.cos((i - tick) * 0.21)) * 0.75 : 0.12;
        return <span key={i} style={{ width: 3, height: v * height, borderRadius: 2, background: color, transition: 'height .12s linear' }} />;
      })}
    </div>
  );
}

Object.assign(window, { Donut, Legend, Funnel, Bars, Spark, Heatmap, Wave });
