function CallHistory({ t, lang, project }) {
  const [dir, setDir] = React.useState(0);
  const [playing, setPlaying] = React.useState(null);
  const dirs = lang === 'ar' ? ['الكل', 'صادرة', 'واردة'] : ['All', 'Outbound', 'Inbound'];
  const calls = AA_CALLS.filter(c => (dir === 0 || c.dir === ['', 'Outbound', 'Inbound'][dir]) && (project === 'all' || c.project === project || c.project === 'Generic Agent'));
  const H = lang === 'ar' ? ['المكالمة', 'العميل', 'الاتجاه', 'المشروع', 'اللغة', 'البدء', 'المدة', 'المحاولة', 'النتيجة', 'الرضا', 'التسجيل'] : ['Call', 'Lead', 'Direction', 'Project', 'Lang', 'Started', 'Duration', 'Attempt', 'Outcome', 'CSAT', 'Recording'];
  return (
    <div>
      <PageHead title={t.histTitle} sub={t.histSub} right={<DS.Button variant="outline" icon="download">{lang === 'ar' ? 'تصدير التقرير اليومي' : 'Export daily report'}</DS.Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: 14, marginBottom: 20 }}>
        {[[lang === 'ar' ? 'إجمالي المحاولات' : 'Total attempts', '1,506'], [lang === 'ar' ? 'تم الرد' : 'Answered', '937'], [lang === 'ar' ? 'نسبة النجاح' : 'Success rate', '91%'], [lang === 'ar' ? 'واردة' : 'Inbound', '212'], [lang === 'ar' ? 'متوسط المدة' : 'Avg duration', '2m 55s']].map(([l, v]) => <DS.SummaryCard key={l} label={l} value={v} />)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap' }}>
        <DS.SegmentedControls tabs={dirs} value={dir} onChange={setDir} />
        <div style={{ flex: '1 1 240px', maxWidth: 360, minWidth: 0 }}><DS.SearchInput placeholder={lang === 'ar' ? 'ابحث برقم المكالمة أو العميل…' : 'Search by call ID or lead…'} width="100%" /></div>
      </div>
      <div className="aa-mob" style={{ flexDirection: 'column', background: '#fff', borderRadius: 16, overflow: 'hidden' }}>
        {calls.map((c, i) => { const s = c.outcome === 'generic' ? { color: 'gray', en: 'Generic inquiry', ar: 'استفسار عام' } : aaStatus(c.outcome); const on = playing === c.id; return (
          <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: '1px solid var(--ss-gray-120)' }}>
            <DS.Icon name={c.dir === 'Inbound' ? 'phone-incoming' : 'phone-outgoing'} size={18} color="var(--ss-teal-700)" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}><span style={{ fontSize: 14, color: 'var(--ss-ink)' }}>{c.lead}</span><DS.Tag color={s.color} size="sm">{s[lang]}</DS.Tag></div>
              <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 3 }}>{c.project} · {c.start} · {c.dur}{c.csat ? ' · ★ ' + c.csat.toFixed(1) : ''}</div>
            </div>
            {c.dur !== '0:00' ? <span role="button" onClick={() => setPlaying(on ? null : c.id)} style={{ width: 44, height: 44, borderRadius: 22, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: on ? 'var(--ss-teal-700)' : 'var(--ss-gray-50)', cursor: 'pointer', flexShrink: 0 }}><DS.Icon name={on ? 'pause' : 'play'} size={16} color={on ? '#fff' : 'var(--ss-teal-700)'} /></span> : null}
          </div>); })}
      </div>
      <div className="aa-desk" style={{ background: '#fff', borderRadius: 23, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(100px, 100fr) minmax(180px, 180fr) minmax(130px, 130fr) minmax(140px, 140fr) minmax(70px, 70fr) minmax(130px, 130fr) minmax(90px, 90fr) minmax(90px, 90fr) minmax(140px, 140fr) minmax(80px, 80fr) minmax(120px, 120fr)', minWidth: 1270 }}>
            {H.map(h => <DS.TableCell key={h} type="header">{h}</DS.TableCell>)}
            {calls.map((c, i) => {
              const col = i % 2 ? 'gray' : 'white';
              const s = c.outcome === 'generic' ? { color: 'gray', en: 'Generic inquiry', ar: 'استفسار عام' } : aaStatus(c.outcome);
              const on = playing === c.id;
              return (
                <React.Fragment key={c.id}>
                  <DS.TableCell color={col}>{c.id}</DS.TableCell>
                  <DS.TableCell color={col}>{c.lead}</DS.TableCell>
                  <DS.TableCell color={col}><DS.IconTextSet icon={c.dir === 'Inbound' ? 'phone-incoming' : 'phone-outgoing'} size={14} style={{ fontSize: 13, color: 'var(--ss-gray-700)' }}>{c.dir === 'Inbound' ? (lang === 'ar' ? 'واردة' : 'Inbound') : (lang === 'ar' ? 'صادرة' : 'Outbound')}</DS.IconTextSet></DS.TableCell>
                  <DS.TableCell color={col}>{c.project}</DS.TableCell>
                  <DS.TableCell color={col}>{c.lang}</DS.TableCell>
                  <DS.TableCell color={col}>{c.start}</DS.TableCell>
                  <DS.TableCell color={col}>{c.dur}</DS.TableCell>
                  <DS.TableCell color={col}>{c.attempt}</DS.TableCell>
                  <DS.TableCell color={col} type="tag" tagColor={s.color}>{s[lang]}</DS.TableCell>
                  <DS.TableCell color={col}>{c.csat ? c.csat.toFixed(1) : '—'}</DS.TableCell>
                  <DS.TableCell color={col}>{c.dur !== '0:00' ? <span role="button" onClick={() => setPlaying(on ? null : c.id)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: 'var(--ss-teal-700)' }}><DS.Icon name={on ? 'pause' : 'play'} size={14} />{on ? <Wave bars={10} height={16} color="var(--ss-teal-500)" /> : (lang === 'ar' ? 'تشغيل' : 'Play')}</span> : '—'}</DS.TableCell>
                </React.Fragment>);
            })}
          </div>
        </div>
        <DS.Pagination page={1} pages={151} shown={calls.length} total={1506} style={{ padding: '20px 32px' }} />
      </div>
    </div>
  );
}

function Insights({ t, lang }) {
  const topics = lang === 'ar'
    ? [['خطط السداد', 34], ['موعد التسليم', 27], ['الموقع والقرب من الحرم', 22], ['مساحة الوحدات', 18], ['رسوم الخدمات', 11], ['زيارة الموقع', 9]]
    : [['Payment plans', 34], ['Handover date', 27], ['Location & distance to Haram', 22], ['Unit sizes', 18], ['Service charges', 11], ['Site visit', 9]];
  const objections = lang === 'ar' ? [['السعر أعلى من الميزانية', 41], ['ليس الوقت المناسب', 26], ['يقارن مع مطور آخر', 19], ['يحتاج استشارة العائلة', 14]] : [['Price above budget', 41], ['Not the right time', 26], ['Comparing other developers', 19], ['Needs to consult family', 14]];
  const channels = [{ label: 'Meta', a: 412, b: 168 }, { label: 'Google', a: 356, b: 171 }, { label: 'TikTok', a: 248, b: 64 }, { label: 'Snapchat', a: 162, b: 41 }, { label: 'QR', a: 131, b: 79 }, { label: 'Odoo ↻', a: 197, b: 87 }];
  const days = lang === 'ar' ? ['سبت', 'أحد', 'اثن', 'ثلا', 'أرب', 'خمي'] : ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
  const hours = ['09', '11', '13', '15', '17', '19', '21'];
  const heat = [[48, 55, 41, 52, 66, 71, 58], [51, 58, 44, 55, 69, 74, 61], [46, 54, 39, 50, 64, 70, 57], [50, 57, 43, 53, 67, 73, 60], [47, 53, 40, 51, 65, 68, 55], [42, 49, 37, 46, 58, 62, 49]];
  return (
    <div>
      <PageHead title={t.insTitle} sub={t.insSub} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 20 }}>
        <Panel title={lang === 'ar' ? 'العملاء والمؤهلون حسب القناة' : 'Leads vs qualified by channel'} action={<div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--ss-slate-600)' }}><span><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: 'var(--ss-teal-700)', marginInlineEnd: 6 }} />{lang === 'ar' ? 'عملاء' : 'Leads'}</span><span><i style={{ display: 'inline-block', width: 8, height: 8, borderRadius: 2, background: 'var(--ss-purple-300)', marginInlineEnd: 6 }} />{lang === 'ar' ? 'مؤهلون' : 'Qualified'}</span></div>}>
          <Bars data={channels} color="var(--ss-teal-700)" color2="var(--ss-purple-300)" height={200} />
        </Panel>
        <Panel title={lang === 'ar' ? 'أفضل أوقات الرد (نسبة الرد)' : 'Best time to call (answer rate)'}>
          <Heatmap rows={days} cols={hours} values={heat} />
          <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 12 }}>{lang === 'ar' ? 'النافذة: سبت–خميس ٠٩:٠٠–٢١:٠٠ بتوقيت السعودية · ذروة ١٧–١٩' : 'Window Sat–Thu 09:00–21:00 KSA · peak 17:00–19:00'}</div>
        </Panel>
        <Panel title={lang === 'ar' ? 'المواضيع الأكثر نقاشاً' : 'Topics discussed'} action={<DS.StatusBadge color="gray" size="small">AI Batch QA</DS.StatusBadge>}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {topics.map(([n, v], i) => <span key={n} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 20, background: i < 2 ? 'var(--ss-teal-700)' : 'rgba(7,101,103,' + (0.14 - i * 0.015) + ')', color: i < 2 ? '#fff' : 'var(--ss-teal-800)', fontSize: 12 + Math.round(v / 10) }}>{n}<b style={{ fontWeight: 600, fontSize: 12 }}>{v}%</b></span>)}
          </div>
        </Panel>
        <Panel title={lang === 'ar' ? 'أبرز الاعتراضات' : 'Top objections'}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {objections.map(([n, v]) => <div key={n} style={{ display: 'grid', gridTemplateColumns: 'minmax(150px, 220px) 1fr 40px', gap: 12, alignItems: 'center', fontSize: 13 }}><span style={{ color: 'var(--ss-slate-600)' }}>{n}</span><div style={{ height: 8, borderRadius: 4, background: 'var(--ss-progress-track)' }}><div style={{ width: v * 2 + '%', height: '100%', borderRadius: 4, background: 'var(--ss-purple-700)' }} /></div><span style={{ textAlign: 'end' }}>{v}%</span></div>)}
          </div>
        </Panel>
        <Panel title={lang === 'ar' ? 'الأداء حسب المشروع' : 'Performance by project'}>
          {[['Diar AlHaram', 884, 64, 3.8, 'Project Agent'], ['Al-Narjis', 622, 61, 3.6, 'Project Agent']].map(([p, n, q, cs, ag]) => (
            <div key={p} style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--ss-gray-120)', fontSize: 13 }}>
              <div><div style={{ color: 'var(--ss-ink)', fontSize: 14 }}>{p}</div><div style={{ color: 'var(--ss-gray-550)', fontSize: 11 }}>{ag}</div></div>
              <div><div style={{ color: 'var(--ss-gray-550)', fontSize: 11 }}>{lang === 'ar' ? 'عملاء' : 'Leads'}</div>{n}</div>
              <div><div style={{ color: 'var(--ss-gray-550)', fontSize: 11 }}>{lang === 'ar' ? 'مؤهلون' : 'Qualified'}</div>{q}%</div>
              <div><div style={{ color: 'var(--ss-gray-550)', fontSize: 11 }}>CSAT</div>{cs}</div>
            </div>))}
        </Panel>
        <Panel title={lang === 'ar' ? 'نتائج الرسائل على واتساب' : 'WhatsApp follow-up results'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <Donut size={130} stroke={18} data={[{ value: 71, color: 'var(--ss-green-600)' }, { value: 18, color: 'var(--ss-teal-200)' }, { value: 8, color: 'var(--ss-orange-400)' }, { value: 3, color: 'var(--ss-red-400)' }]} center={<><span style={{ fontSize: 20, fontWeight: 600 }}>1,284</span><span style={{ fontSize: 10, color: 'var(--ss-gray-550)' }}>{lang === 'ar' ? 'رسالة' : 'sent'}</span></>} />
            <div style={{ flex: 1, minWidth: 170 }}><Legend data={[{ label: lang === 'ar' ? 'تمت القراءة' : 'Read', value: 71, color: 'var(--ss-green-600)' }, { label: lang === 'ar' ? 'تم التسليم' : 'Delivered', value: 18, color: 'var(--ss-teal-200)' }, { label: lang === 'ar' ? '“اتصل بي الآن”' : '“Call me now” taps', value: 8, color: 'var(--ss-orange-400)' }, { label: lang === 'ar' ? 'إيقاف' : 'Opt-out (STOP)', value: 3, color: 'var(--ss-red-400)' }]} /></div>
          </div>
        </Panel>
      </div>
    </div>
  );
}
Object.assign(window, { CallHistory, Insights });
