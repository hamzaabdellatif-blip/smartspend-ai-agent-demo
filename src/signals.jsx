const SG_RANGES = { today: 0.09, d7: 0.42, d30: 1, all: 4.8 };

function SignalBars({ rows, color = 'var(--ss-teal-700)', max = 100, unit = '%' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {rows.map(([label, v, sub]) => (
        <div key={label} style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 200px) 1fr 56px', gap: 12, alignItems: 'center', fontSize: 13 }}>
          <span style={{ color: 'var(--ss-slate-600)' }}>{label}{sub ? <span style={{ display: 'block', fontSize: 11, color: 'var(--ss-gray-550)' }}>{sub}</span> : null}</span>
          <div style={{ height: 8, borderRadius: 4, background: 'var(--ss-progress-track)' }}><div style={{ width: (v / max) * 100 + '%', height: '100%', borderRadius: 4, background: color }} /></div>
          <span style={{ textAlign: 'end', fontVariantNumeric: 'tabular-nums' }}>{v}{unit}</span>
        </div>))}
    </div>
  );
}

function Signals({ t, lang }) {
  const ar = lang === 'ar';
  const [range, setRange] = React.useState('d30');
  const k = SG_RANGES[range];
  const n = v => Math.round(v * k).toLocaleString();
  const ranges = [['today', t.today], ['d7', t.d7], ['d30', t.d30], ['all', t.all]];
  const avg = { purpose: 16.4, budget: 15.1, timeline: 13.2, location: 18.3, unit: 8.1 };
  const purpose = [
    { label: ar ? 'سكن للعائلة' : 'Family home', value: 48, color: 'var(--ss-teal-700)' },
    { label: ar ? 'استثمار / تأجير' : 'Investment / rental', value: 31, color: 'var(--ss-purple-300)' },
    { label: ar ? 'منزل ثانٍ قرب الحرم' : 'Second home near Haram', value: 15, color: 'var(--ss-lime-300)' },
    { label: ar ? 'غير محدد' : 'Not sure yet', value: 6, color: 'var(--ss-gray-300)' },
  ];
  const payment = [
    { label: ar ? 'تمويل بنكي' : 'Bank financing', value: 52, color: 'var(--ss-teal-700)' },
    { label: ar ? 'نقدًا' : 'Cash', value: 27, color: 'var(--ss-green-600)' },
    { label: ar ? 'أقساط المطوّر' : 'Developer instalments', value: 17, color: 'var(--ss-purple-300)' },
    { label: ar ? 'لم يُحدد' : 'Undecided', value: 4, color: 'var(--ss-gray-300)' },
  ];
  const budget = [{ label: '<500k', a: 188, b: 22 }, { label: '500–800k', a: 341, b: 131 }, { label: '0.8–1.2M', a: 402, b: 214 }, { label: '1.2–2M', a: 297, b: 168 }, { label: '>2M', a: 121, b: 75 }];
  const scores = [{ label: '0–20', a: 96 }, { label: '20–40', a: 141 }, { label: '40–60', a: 188 }, { label: '60–80', a: 302 }, { label: '80–100', a: 210 }];
  const timeline = ar
    ? [['خلال شهر', 18], ['١–٣ أشهر', 34], ['٣–٦ أشهر', 23], ['٦–١٢ شهرًا', 14], ['يتصفح فقط', 11]]
    : [['Within 1 month', 18], ['1–3 months', 34], ['3–6 months', 23], ['6–12 months', 14], ['Just browsing', 11]];
  const units = ar
    ? [['شقة ٣ غرف', 36], ['شقة غرفتين', 27], ['فيلا', 19], ['تاون هاوس', 11], ['شقة غرفة', 7]]
    : [['3BR apartment', 36], ['2BR apartment', 27], ['Villa', 19], ['Townhouse', 11], ['1BR apartment', 7]];
  const findings = ar ? [
    ['sparkles', 'العملاء الذين يطلبون زيارة الموقع أثناء المكالمة يتأهلون بنسبة أعلى ٢٫٣ مرة.'],
    ['circle-alert', 'الميزانية هي السبب الأول لعدم التأهل: ٤١٪ من غير المؤهلين ميزانيتهم أقل من ٥٠٠ ألف.'],
    ['timer', 'من يخطط للشراء خلال ٣ أشهر يشكلون ٥٢٪ من العملاء لكن ٧٤٪ من المؤهلين.'],
    ['users', 'المشترون بغرض السكن العائلي يحضرون المواعيد بنسبة ٧٩٪ مقابل ٦١٪ للمستثمرين.'],
  ] : [
    ['sparkles', 'Leads who ask for a site visit during the call qualify 2.3× more often.'],
    ['circle-alert', 'Budget is the #1 disqualifier: 41% of unqualified leads are under SAR 500k.'],
    ['timer', 'Buyers ready within 3 months are 52% of leads but 74% of qualified leads.'],
    ['users', 'Family-home buyers attend appointments 79% of the time, vs 61% for investors.'],
  ];
  const legendKey = (color, label) => <span><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: color, marginInlineEnd: 6 }} />{label}</span>;
  const split = (data, total) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 28, flexWrap: 'wrap' }}>
      <Donut size={130} stroke={18} data={data} center={<><span style={{ fontSize: 20, fontWeight: 600 }}>{total}</span><span style={{ fontSize: 10, color: 'var(--ss-gray-550)' }}>{ar ? 'عميل' : 'leads'}</span></>} />
      <div style={{ flex: 1, minWidth: 170 }}><Legend data={data} /></div>
    </div>
  );
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', margin: '40px 0 20px', paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.7, textTransform: 'uppercase', color: 'var(--ss-purple-700)', marginBottom: 6 }}>{ar ? 'تحليلات موسّعة من المكالمات' : 'Extended call insights'}</div>
          <h2 style={{ margin: 0, fontFamily: 'var(--ss-font-display)', fontWeight: 500, fontSize: 28, lineHeight: 1.3, color: 'var(--ss-teal-700)' }}>{ar ? 'إشارات التأهيل' : 'Qualification signals'}</h2>
          <p style={{ margin: '6px 0 0', fontSize: 15, lineHeight: '22px', color: 'var(--ss-slate-600)' }}>{ar ? 'ما يخبرنا به العملاء أثناء كل مكالمة: الغرض، الميزانية، موعد التسليم، الموقع، ونوع الوحدة.' : 'What leads tell the agent on every call: purpose, budget, delivery date, location and the unit they want.'}</p>
        </div>
        <DS.ButtonGroup items={ranges.map(r => r[1])} value={ranges.find(r => r[0] === range)[1]} onChange={v => setRange(ranges.find(r => r[1] === v)[0])} activeColor="var(--ss-teal-700)" style={{ background: '#fff' }} />
      </div>
      <div key={range} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: 14, marginBottom: 20 }}>
        {[[ar ? 'عملاء تم تقييمهم' : 'Leads scored', n(937)], [ar ? 'متوسط الدرجة' : 'Avg score', '73 / 100'], [ar ? 'عملاء ساخنون (٨٠+)' : 'Hot leads (80+)', '22%'], [ar ? 'مشترون نقدًا' : 'Cash buyers', '27%'], [ar ? 'متوسط الميزانية' : 'Median budget', 'SAR 1.05M']].map(([l, v]) => <DS.SummaryCard key={l} label={l} value={v} />)}
      </div>
      <Panel title={ar ? 'الإذن باتصال المبيعات يتجاوز التقييم' : 'Sales-call permission overrides the score'} action={<DS.StatusBadge color="gray" size="small">{ar ? 'قاعدة التأهيل' : 'Qualification rule'}</DS.StatusBadge>} style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: 'var(--ss-slate-600)', marginBottom: 16, maxWidth: 760 }}>{ar ? 'إذا وافق العميل على أن يتصل به فريق المبيعات، يُحوَّل مباشرة إلى Odoo كعميل مؤهل، بغض النظر عن درجة باقي الإشارات.' : 'If a lead agrees to a call from your sales team, they go straight to Odoo as qualified, no matter how the other signals scored.'}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 14 }}>
          {[[ar ? 'وافقوا على اتصال المبيعات' : 'Agreed to a sales call', '71%', ar ? 'من المجيبين' : 'of answered leads'], [ar ? 'تأهلوا بالإذن رغم درجة أقل من ٦٠' : 'Qualified by permission, score under 60', n(118), ar ? 'كانوا سيُصنَّفون للمتابعة' : 'would otherwise be nurture'], [ar ? 'حضروا موعدًا من هؤلاء' : 'Of those, attended an appointment', '38%', ar ? 'مقابل ٧٢٪ للمؤهلين بالتقييم' : 'vs 72% for score-qualified'], [ar ? 'رفضوا اتصال المبيعات' : 'Declined a sales call', '25%', ar ? 'تُرسل لهم متابعة واتساب فقط' : 'get WhatsApp follow-up only']].map(([l, v, sub]) => (
            <div key={l} style={{ padding: 14, borderRadius: 12, background: 'var(--ss-gray-50)' }}>
              <div style={{ fontSize: 12, color: 'var(--ss-slate-600)' }}>{l}</div>
              <div style={{ fontSize: 24, fontWeight: 600, color: 'var(--ss-ink)', margin: '6px 0 2px' }}>{v}</div>
              <div style={{ fontSize: 11, color: 'var(--ss-gray-550)' }}>{sub}</div>
            </div>))}
        </div>
      </Panel>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 20 }}>
        <Panel title={ar ? 'متوسط الدرجة لكل إشارة' : 'Average score per signal'}>
          <SignalBars unit="%" rows={AA_RUBRIC.map(r => [r[lang], Math.round(avg[r.id] / r.max * 100), (ar ? 'متوسط ' : 'avg ') + avg[r.id] + ' / ' + r.max])} />
        </Panel>
        <Panel title={ar ? 'توزيع درجات التأهيل' : 'Score distribution'}>
          <Bars data={scores} color="var(--ss-teal-700)" height={200} />
        </Panel>
        <Panel title={ar ? 'الغرض من الشراء' : 'Purpose of purchase'}>{split(purpose, n(937))}</Panel>
        <Panel title={ar ? 'طريقة الدفع' : 'Payment method'}>{split(payment, n(937))}</Panel>
        <Panel title={ar ? 'الميزانية (ريال)' : 'Budget (SAR)'} action={<div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--ss-slate-600)' }}>{legendKey('var(--ss-teal-700)', ar ? 'عملاء' : 'Leads')}{legendKey('var(--ss-purple-300)', ar ? 'مؤهلون' : 'Qualified')}</div>}>
          <Bars data={budget} color="var(--ss-teal-700)" color2="var(--ss-purple-300)" height={200} />
        </Panel>
        <Panel title={ar ? 'موعد التسليم المفضل' : 'Preferred delivery date'}>
          <SignalBars rows={timeline} max={40} color="var(--ss-purple-700)" />
        </Panel>
        <Panel title={ar ? 'نوع الوحدة المطلوبة' : 'Unit preference'}>
          <SignalBars rows={units} max={40} color="var(--ss-teal-500)" />
        </Panel>
        <Panel title={ar ? 'أين يسكن العملاء' : 'Where leads are based'}>
          <SignalBars rows={ar ? [['مكة المكرمة', 41], ['جدة', 23], ['الرياض', 14], ['مدن أخرى في السعودية', 9], ['خارج السعودية', 13]] : [['Makkah', 41], ['Jeddah', 23], ['Riyadh', 14], ['Other Saudi cities', 9], ['Outside Saudi Arabia', 13]]} max={50} color="var(--ss-teal-700)" />
        </Panel>
        <Panel title={ar ? 'نسبة التأهل حسب الموقع' : 'Qualified rate by location'}>
          <SignalBars rows={ar ? [['مكة المكرمة', 72], ['جدة', 64], ['الرياض', 51], ['مدن أخرى في السعودية', 46], ['خارج السعودية', 38]] : [['Makkah', 72], ['Jeddah', 64], ['Riyadh', 51], ['Other Saudi cities', 46], ['Outside Saudi Arabia', 38]]} color="var(--ss-green-600)" />
        </Panel>
      </div>
    </div>
  );
}
window.Signals = Signals;
