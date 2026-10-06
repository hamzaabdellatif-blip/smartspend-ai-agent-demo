// WhatsApp template ↔ lead status mapping (demo state, kept in localStorage).
const WA_TEMPLATES = [
  { id: 'new_lead_welcome', cat: 'Utility', status: 'approved', button: null,
    en: 'Hi {{name}}, thanks for your interest in {{project}}. Our assistant will call you in the next few minutes from this number.',
    ar: 'مرحباً {{name}}، شكراً لاهتمامك بمشروع {{project}}. سيتصل بك مساعدنا خلال دقائق من هذا الرقم.' },
  { id: 'lead_qualified_followup', cat: 'Utility', status: 'approved', button: ['Call me now', 'اتصل بي الآن'],
    en: 'Hi {{name}}, great speaking with you! An advisor from {{project}} will call you {{callback_time}}. The brochure is attached.',
    ar: 'أهلاً {{name}}، سعدنا بالحديث معك! سيتصل بك مستشار من {{project}} {{callback_time}}. مرفق لك البروشور.' },
  { id: 'lead_nurture_brochure', cat: 'Marketing', status: 'approved', button: ['Book a site visit', 'احجز زيارة'],
    en: 'Hi {{name}}, here is the {{project}} brochure with payment plans. Reply anytime when you are ready to visit.',
    ar: 'مرحباً {{name}}، هذا بروشور {{project}} مع خطط السداد. راسلنا متى ما كنت جاهزاً للزيارة.' },
  { id: 'lead_callback_confirm', cat: 'Utility', status: 'approved', button: ['Change time', 'تغيير الموعد'],
    en: 'Hi {{name}}, as requested we will call you back {{callback_time}} about {{project}}.',
    ar: 'مرحباً {{name}}، كما طلبت سنعاود الاتصال بك {{callback_time}} بخصوص {{project}}.' },
  { id: 'lead_unreachable_notice', cat: 'Utility', status: 'approved', button: ['Call me now', 'اتصل بي الآن'],
    en: 'Hi {{name}}, we tried to reach you about {{project}}. Tap below and we will call you right away.',
    ar: 'مرحباً {{name}}، حاولنا التواصل معك بخصوص {{project}}. اضغط أدناه وسنتصل بك فوراً.' },
  { id: 'lead_not_qualified_thanks', cat: 'Utility', status: 'approved', button: null,
    en: 'Thank you {{name}} for your time. We will keep you posted on new offers at {{project}}.',
    ar: 'شكراً {{name}} على وقتك. سنبقيك على اطلاع بالعروض الجديدة في {{project}}.' },
  { id: 'site_visit_reminder', cat: 'Utility', status: 'pending', button: ['Get directions', 'الاتجاهات'],
    en: 'Reminder: your visit to {{project}} is {{visit_time}}. See you there!',
    ar: 'تذكير: زيارتك لمشروع {{project}} {{visit_time}}. بانتظارك!' },
];
const WA_DEFAULT = {
  new: { on: true, tpl: 'new_lead_welcome', when: 'now' },
  calling: { on: false, tpl: 'new_lead_welcome', when: 'now' },
  qualified: { on: true, tpl: 'lead_qualified_followup', when: 'now' },
  nurture: { on: true, tpl: 'lead_nurture_brochure', when: '15m' },
  call_back: { on: true, tpl: 'lead_callback_confirm', when: 'now' },
  unreachable: { on: true, tpl: 'lead_unreachable_notice', when: 'last' },
  not_qualified: { on: false, tpl: 'lead_not_qualified_thanks', when: 'next' },
};
const WA_VARS = { name: 'Faisal', project: 'Diar AlHaram', callback_time: 'today 4–6 pm', visit_time: 'tomorrow at 5 pm' };
const WA_VARS_AR = { name: 'فيصل', project: 'ديار الحرم', callback_time: 'اليوم بين ٤ و٦ مساءً', visit_time: 'غداً الساعة ٥ مساءً' };

function WhatsAppConfig({ lang }) {
  const ar = lang === 'ar';
  const [map, setMap] = React.useState(() => { try { return { ...WA_DEFAULT, ...JSON.parse(localStorage.getItem('aa-wa') || '{}') }; } catch (e) { return WA_DEFAULT; } });
  const [sel, setSel] = React.useState('qualified');
  const [saved, setSaved] = React.useState(false);
  const [dirty, setDirty] = React.useState(false);
  const [narrow, setNarrow] = React.useState(() => window.matchMedia('(max-width: 900px)').matches);
  React.useEffect(() => { const m = window.matchMedia('(max-width: 900px)'); const f = () => setNarrow(m.matches); m.addEventListener('change', f); return () => m.removeEventListener('change', f); }, []);
  const cols = 'minmax(100px, 0.7fr) minmax(215px, 1.7fr) minmax(160px, 1fr) 52px';
  const set = (st, patch) => { setMap(m => ({ ...m, [st]: { ...m[st], ...patch } })); setDirty(true); setSaved(false); setSel(st); };
  const save = () => { try { localStorage.setItem('aa-wa', JSON.stringify(map)); } catch (e) {} setDirty(false); setSaved(true); setTimeout(() => setSaved(false), 2500); };
  const reset = () => { setMap(WA_DEFAULT); setDirty(true); setSaved(false); };
  const whenOpts = [
    { value: 'now', label: ar ? 'فوراً' : 'Instantly' },
    { value: '15m', label: ar ? 'بعد ١٥ دقيقة' : 'After 15 min' },
    { value: 'next', label: ar ? 'اليوم التالي ١٠:٠٠' : 'Next day 10:00' },
    { value: 'last', label: ar ? 'بعد آخر محاولة' : 'After last attempt' },
  ];
  const tplOpts = WA_TEMPLATES.map(x => ({ value: x.id, label: x.id }));
  const cur = WA_TEMPLATES.find(x => x.id === map[sel].tpl);
  const vars = ar ? WA_VARS_AR : WA_VARS;
  const body = (ar ? cur.ar : cur.en).replace(/\{\{(\w+)\}\}/g, (_, v) => vars[v] || v);
  const active = AA_STATUSES.filter(s => map[s.id].on).length;
  return (
    <div>
      <PageHead
        title={ar ? 'إعدادات واتساب' : 'WhatsApp Configuration'}
        sub={ar ? 'اختر القالب الذي يُرسل تلقائياً لكل حالة عميل، ومتى يُرسل.' : 'Choose which template is sent automatically for each lead status, and when.'}
        right={<div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {saved ? <DS.Tag color="green" dot>{ar ? 'تم الحفظ' : 'Saved'}</DS.Tag> : dirty ? <DS.Tag color="orange" dot>{ar ? 'تغييرات غير محفوظة' : 'Unsaved changes'}</DS.Tag> : null}
          <DS.Button variant="outline" icon="rotate-ccw" onClick={reset}>{ar ? 'استعادة الافتراضي' : 'Reset to default'}</DS.Button>
          <DS.Button variant="primary" icon="check" onClick={save}>{ar ? 'حفظ' : 'Save changes'}</DS.Button>
        </div>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: 14, marginBottom: 20 }}>
        {[[ar ? 'رقم الإرسال' : 'Sender number', '+966 11 520 4400'], [ar ? 'حالات مفعّلة' : 'Active rules', active + ' / ' + AA_STATUSES.length], [ar ? 'قوالب معتمدة' : 'Approved templates', WA_TEMPLATES.filter(x => x.status === 'approved').length + ' / ' + WA_TEMPLATES.length], [ar ? 'رسائل هذا الشهر' : 'Sent this month', '1,284']].map(([l, v]) => <DS.SummaryCard key={l} label={l} value={v} />)}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-start' }}>
        <Panel title={ar ? 'الحالة ← القالب' : 'Status → template'} style={{ flex: '2 1 640px', minWidth: 0 }} pad={12}>
          {narrow ? null : <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 14, padding: '4px 12px 10px', fontSize: 12, color: 'var(--ss-gray-550)' }}>
            <span>{ar ? 'حالة العميل' : 'Lead status'}</span><span>{ar ? 'القالب' : 'Template'}</span><span>{ar ? 'وقت الإرسال' : 'Send'}</span><span style={{ textAlign: 'end' }}>{ar ? 'مفعّل' : 'On'}</span>
          </div>}
          {AA_STATUSES.map(s => { const r = map[s.id]; const on = sel === s.id; return (
            <div key={s.id} onClick={() => setSel(s.id)} style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr 52px' : cols, alignItems: 'center', gap: narrow ? 10 : 14, padding: 12, borderRadius: 12, cursor: 'pointer', background: on ? 'rgba(7,101,103,0.06)' : 'transparent', border: on ? '1px solid rgba(7,101,103,0.25)' : '1px solid transparent', opacity: r.on ? 1 : 0.6 }}>
              <div style={{ minWidth: 0, gridColumn: narrow ? '1' : 'auto' }}><DS.Tag color={s.color}>{s[lang]}</DS.Tag></div>
              <div style={{ minWidth: 0, gridColumn: narrow ? '1 / -1' : 'auto', gridRow: narrow ? '2' : 'auto' }} onClick={e => e.stopPropagation()}><DS.TextField kind="field" options={tplOpts} value={r.tpl} onChange={v => set(s.id, { tpl: v })} width="100%" /></div>
              <div style={{ minWidth: 0, gridColumn: narrow ? '1 / -1' : 'auto', gridRow: narrow ? '3' : 'auto' }} onClick={e => e.stopPropagation()}><DS.TextField kind="field" options={whenOpts} value={r.when} onChange={v => set(s.id, { when: v })} width="100%" /></div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gridColumn: narrow ? '2' : 'auto', gridRow: narrow ? '1' : 'auto' }} onClick={e => e.stopPropagation()}><DS.Switch on={r.on} onChange={v => set(s.id, { on: v })} /></div>
            </div>); })}
          <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', padding: '10px 12px 4px' }}>{ar ? 'تُرسل الرسائل بلغة المكالمة. لا تُرسل أي رسالة إذا رفض العميل التواصل عبر واتساب.' : 'Messages go out in the language of the call. Nothing is sent if the lead opted out of WhatsApp.'}</div>
        </Panel>
        <Panel title={ar ? 'معاينة' : 'Preview'} style={{ flex: '1 1 300px', minWidth: 0, position: 'sticky', top: 96 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
            <DS.Tag color={aaStatus(sel).color}>{aaStatus(sel)[lang]}</DS.Tag>
            <span style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>→ {cur.id}</span>
          </div>
          <div style={{ borderRadius: 18, padding: 16, background: '#e9e2d8', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ alignSelf: 'flex-start', maxWidth: '92%', background: '#fff', borderRadius: '4px 14px 14px 14px', boxShadow: '0 1px 1px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              <div style={{ padding: '10px 12px 6px', fontSize: 14, lineHeight: 1.5, color: '#111' }} dir={ar ? 'rtl' : 'ltr'}>{body}</div>
              <div style={{ fontSize: 10, color: '#8696a0', textAlign: 'end', padding: '0 10px 6px' }}>16:02</div>
              {cur.button ? <div style={{ borderTop: '1px solid #eee', padding: 10, textAlign: 'center', fontSize: 14, color: '#027eb5', fontWeight: 500 }}>{ar ? cur.button[1] : cur.button[0]}</div> : null}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
            <DS.Tag color="gray">{cur.cat}</DS.Tag>
            <DS.Tag color={cur.status === 'approved' ? 'green' : 'orange'} dot>{cur.status === 'approved' ? (ar ? 'معتمد من Meta' : 'Approved by Meta') : (ar ? 'قيد المراجعة' : 'Pending review')}</DS.Tag>
            <DS.Tag color={map[sel].on ? 'green' : 'gray'}>{map[sel].on ? (ar ? 'مفعّل' : 'Active') : (ar ? 'متوقف' : 'Off')}</DS.Tag>
          </div>
          {cur.status !== 'approved' ? <div style={{ fontSize: 12, color: 'var(--ss-offtrack)', marginTop: 10 }}>{ar ? 'لن يُرسل هذا القالب حتى تعتمده Meta.' : 'This template will not send until Meta approves it.'}</div> : null}
        </Panel>
      </div>
      <Panel title={ar ? 'القوالب' : 'Templates'} style={{ marginTop: 20 }} pad={12}>
        {WA_TEMPLATES.map(x => { const used = AA_STATUSES.filter(s => map[s.id].on && map[s.id].tpl === x.id); return (
          <div key={x.id} className="aa-row" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 12, borderRadius: 10, flexWrap: 'wrap' }}>
            <span style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(37,211,102,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DS.Icon name="message-circle" size={17} color="#128c7e" /></span>
            <div style={{ flex: '1 1 260px', minWidth: 0 }}>
              <div style={{ fontSize: 14, color: 'var(--ss-ink)', fontFamily: 'var(--fontfamily-mono, monospace)' }}>{x.id}</div>
              <div style={{ fontSize: 12, color: 'var(--ss-gray-550)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ar ? x.ar : x.en}</div>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{used.length ? used.map(s => <DS.Tag key={s.id} color={s.color} size="sm">{s[lang]}</DS.Tag>) : <span style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{ar ? 'غير مستخدم' : 'Not used'}</span>}</div>
            <DS.Tag color="gray">{x.cat}</DS.Tag>
            <DS.Tag color={x.status === 'approved' ? 'green' : 'orange'} dot>{x.status === 'approved' ? (ar ? 'معتمد' : 'Approved') : (ar ? 'قيد المراجعة' : 'Pending')}</DS.Tag>
          </div>); })}
      </Panel>
    </div>
  );
}
window.WhatsAppConfig = WhatsAppConfig;
