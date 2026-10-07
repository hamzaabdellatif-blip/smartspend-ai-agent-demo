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
const WA_DEFAULT = { qualified: 'lead_qualified_followup', unreachable: 'lead_unreachable_notice', call_back: 'lead_callback_confirm' };
const WA_VARS = { name: 'Faisal', project: 'Diar AlHaram', callback_time: 'today 4–6 pm', visit_time: 'tomorrow at 5 pm' };
const WA_VARS_AR = { name: 'فيصل', project: 'ديار الحرم', callback_time: 'اليوم بين ٤ و٦ مساءً', visit_time: 'غداً الساعة ٥ مساءً' };

const WA_SITUATIONS = [
  { id: 'qualified', icon: 'circle-check', en: 'Sent right after a lead qualifies on the call.', ar: 'يُرسل فور تأهل العميل في المكالمة.' },
  { id: 'unreachable', icon: 'phone-call', en: 'Sent after the last call attempt goes unanswered.', ar: 'يُرسل بعد آخر محاولة اتصال لم يُرد عليها.' },
  { id: 'call_back', icon: 'calendar', en: 'Sent when a lead asks to be called back later.', ar: 'يُرسل عندما يطلب العميل معاودة الاتصال لاحقاً.' },
];

function WaPreview({ tpl, lang }) {
  const ar = lang === 'ar';
  const vars = ar ? WA_VARS_AR : WA_VARS;
  const body = (ar ? tpl.ar : tpl.en).replace(/\{\{(\w+)\}\}/g, (_, v) => vars[v] || v);
  return (
    <div style={{ borderRadius: 16, padding: 14, background: '#e9e2d8', minHeight: 170, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <div style={{ alignSelf: 'flex-start', maxWidth: '94%', background: '#fff', borderRadius: '4px 14px 14px 14px', boxShadow: '0 1px 1px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
        <div style={{ padding: '10px 12px 6px', fontSize: 14, lineHeight: 1.5, color: '#111' }} dir={ar ? 'rtl' : 'ltr'}>{body}</div>
        <div style={{ fontSize: 10, color: '#8696a0', textAlign: 'end', padding: '0 10px 6px' }}>16:02</div>
        {tpl.button ? <div style={{ borderTop: '1px solid #eee', padding: 10, textAlign: 'center', fontSize: 14, color: '#027eb5', fontWeight: 500 }}>{ar ? tpl.button[1] : tpl.button[0]}</div> : null}
      </div>
    </div>
  );
}

function WhatsAppConfig({ lang }) {
  const ar = lang === 'ar';
  const [map, setMap] = React.useState(() => { try { const v = JSON.parse(localStorage.getItem('aa-wa3') || '{}'); return { ...WA_DEFAULT, ...v }; } catch (e) { return WA_DEFAULT; } });
  const [state, setState] = React.useState('clean'); // clean | dirty | saved
  const set = (id, tpl) => { setMap(m => ({ ...m, [id]: tpl })); setState('dirty'); };
  const save = () => { try { localStorage.setItem('aa-wa3', JSON.stringify(map)); } catch (e) {} setState('saved'); setTimeout(() => setState(s => s === 'saved' ? 'clean' : s), 2500); };
  const reset = () => { setMap(WA_DEFAULT); setState('dirty'); };
  const opts = WA_TEMPLATES.map(x => ({ value: x.id, label: x.id }));
  return (
    <div>
      <PageHead
        title={ar ? 'إعدادات واتساب' : 'WhatsApp Configuration'}
        sub={ar ? 'اختر قالب واتساب الذي يُرسل للعميل تلقائياً في كل حالة.' : 'Choose which WhatsApp template is sent to the lead automatically in each situation.'}
        right={<div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          {state === 'saved' ? <DS.Tag color="green" dot>{ar ? 'تم الحفظ' : 'Saved'}</DS.Tag> : state === 'dirty' ? <DS.Tag color="orange" dot>{ar ? 'تغييرات غير محفوظة' : 'Unsaved changes'}</DS.Tag> : null}
          <DS.Button variant="outline" icon="rotate-ccw" onClick={reset}>{ar ? 'استعادة الافتراضي' : 'Reset'}</DS.Button>
          <DS.Button variant="primary" icon="check" onClick={save}>{ar ? 'حفظ' : 'Save changes'}</DS.Button>
        </div>}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 20, alignItems: 'start' }}>
        {WA_SITUATIONS.map(sit => { const st = aaStatus(sit.id); const tpl = WA_TEMPLATES.find(x => x.id === map[sit.id]) || WA_TEMPLATES[0]; return (
          <section key={sit.id} style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 14, padding: 20, boxShadow: 'var(--ss-shadow-card)', display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(7,101,103,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><DS.Icon name={sit.icon} size={19} color="var(--ss-teal-700)" /></span>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--ss-font-display)', fontSize: 18, fontWeight: 500, color: 'var(--ss-teal-700)' }}>{st[lang]}</div>
                <div style={{ fontSize: 12, color: 'var(--ss-gray-550)' }}>{ar ? sit.ar : sit.en}</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--ss-slate-600)', marginBottom: 6 }}>{ar ? 'قالب واتساب' : 'WhatsApp template'}</div>
              <DS.TextField kind="field" options={opts} value={tpl.id} onChange={v => set(sit.id, v)} width="100%" />
            </div>
            <div style={{ fontSize: 12, color: 'var(--ss-slate-600)', marginBottom: -6 }}>{ar ? 'معاينة' : 'Preview'}</div>
            <WaPreview tpl={tpl} lang={lang} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <DS.Tag color="gray">{tpl.cat}</DS.Tag>
              <DS.Tag color={tpl.status === 'approved' ? 'green' : 'orange'} dot>{tpl.status === 'approved' ? (ar ? 'معتمد من Meta' : 'Approved by Meta') : (ar ? 'قيد المراجعة لدى Meta' : 'Pending Meta review')}</DS.Tag>
            </div>
            {tpl.status !== 'approved' ? <div style={{ fontSize: 12, color: 'var(--ss-offtrack)' }}>{ar ? 'لن يُرسل هذا القالب حتى تعتمده Meta.' : 'This template will not send until Meta approves it.'}</div> : null}
          </section>); })}
      </div>
    </div>
  );
}
window.WhatsAppConfig = WhatsAppConfig;
