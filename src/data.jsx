// SmartSpend AI Agent — demo data + i18n (client: Diar)
const AA_STR = {
  en: {
    nav: { overview: 'Overview', live: 'Live Calls', pipeline: 'Leads Pipeline', inbound: 'Inbound Calls', history: 'Call History', insights: 'Insights', signals: 'Qualification Signals', sources: 'Source vs Quality', whatsapp: 'WhatsApp Setup' },
    client: 'Diar', agentOnline: 'AI Agent online', slots: 'call slots in use', allProjects: 'All projects',
    ovTitle: 'AI Agent Overview', ovSub: 'Every lead reached within seconds, qualified on the call, followed up on WhatsApp — only qualified leads go to Odoo.',
    hello: 'Good morning, Fawzy', liveNow: 'Live now', viewLive: 'Open live monitor',
    kpis: { leads: 'Leads received', answer: 'Answer rate', qualified: 'Qualified of answered', dropped: 'Success rate', aht: 'Avg handling time', csat: 'Customer satisfaction', dial: 'Lead → first dial', odoo: 'Hang-up → Odoo' },
    target: 'Target', onTrack: 'On Track', offTrack: 'Off Track',
    funnel: 'Lead funnel', funnelSteps: ['Leads captured', 'Called', 'Answered', 'Qualified', 'Sent to Odoo', 'Appointment booked', 'Attended appointment'],
    lang: 'Language mix', statusMix: 'Lead status', recentQ: 'Just qualified', seeAll: 'See all', today: 'Today', d7: '7 days', d30: '30 days', all: 'All time',
    liveTitle: 'Live Calls Monitor', liveSub: 'Voice agents on the line right now. Watch a call unfold and get scored in real time.',
    listening: 'Listening in', transcript: 'Live transcript', aiScore: 'AI score', signals: 'Qualification signals', queue: 'Up next in queue', endedQ: 'Call ended · lead qualified',
    pipeTitle: 'Leads Pipeline', pipeSub: 'Where every lead sits right now, from intake to CRM.',
    histTitle: 'Call History & Recordings', histSub: 'Every attempt, inbound and outbound, with recordings retained 90 days.',
    insTitle: 'Insights', insSub: 'What callers talk about, when they answer, and which channels bring qualified leads.',
    journey: 'Lead journey', extracted: 'Extracted by AI', rubric: 'Score breakdown', whatsapp: 'WhatsApp follow-up', odooSync: 'Odoo sync', recording: 'Call recording',
    back: 'Back to pipeline', search: 'Search leads by name, phone or project…',
    toastQ: 'qualified · pushed to Odoo', score: 'Score',
  },
  ar: {
    nav: { overview: 'نظرة عامة', live: 'المكالمات المباشرة', pipeline: 'مسار العملاء', inbound: 'المكالمات الواردة', history: 'سجل المكالمات', insights: 'التحليلات', signals: 'إشارات التأهيل', sources: 'المصدر مقابل الجودة', whatsapp: 'إعدادات واتساب' },
    client: 'ديار', agentOnline: 'الوكيل الذكي متصل', slots: 'خطوط مستخدمة', allProjects: 'كل المشاريع',
    ovTitle: 'نظرة عامة على الوكيل الذكي', ovSub: 'نصل لكل عميل خلال ثوانٍ، نؤهله أثناء المكالمة، نتابع عبر واتساب — والعملاء المؤهلون فقط يصلون إلى Odoo.',
    hello: 'صباح الخير، فوزي', liveNow: 'مباشر الآن', viewLive: 'فتح المراقبة المباشرة',
    kpis: { leads: 'العملاء المستلمون', answer: 'نسبة الرد', qualified: 'المؤهلون من المجيبين', dropped: 'نسبة النجاح', aht: 'متوسط مدة المكالمة', csat: 'رضا العملاء', dial: 'من العميل إلى أول اتصال', odoo: 'من الإنهاء إلى Odoo' },
    target: 'المستهدف', onTrack: 'على المسار', offTrack: 'خارج المسار',
    funnel: 'قمع العملاء', funnelSteps: ['عملاء مستلمون', 'تم الاتصال', 'تم الرد', 'مؤهلون', 'أُرسلوا إلى Odoo', 'حجزوا موعدًا', 'حضروا الموعد'],
    lang: 'توزيع اللغات', statusMix: 'حالة العملاء', recentQ: 'تأهلوا للتو', seeAll: 'عرض الكل', today: 'اليوم', d7: '٧ أيام', d30: '٣٠ يوم', all: 'كل الوقت',
    liveTitle: 'مراقبة المكالمات المباشرة', liveSub: 'الوكلاء الصوتيون على الخط الآن. شاهد المكالمة وتقييمها لحظياً.',
    listening: 'استماع مباشر', transcript: 'النص المباشر', aiScore: 'تقييم الذكاء الاصطناعي', signals: 'مؤشرات التأهيل', queue: 'التالي في الطابور', endedQ: 'انتهت المكالمة · العميل مؤهل',
    pipeTitle: 'مسار العملاء', pipeSub: 'موقع كل عميل الآن، من الاستلام حتى نظام CRM.',
    histTitle: 'سجل المكالمات والتسجيلات', histSub: 'كل محاولة واردة وصادرة، مع حفظ التسجيلات ٩٠ يوماً.',
    insTitle: 'التحليلات', insSub: 'عمّ يتحدث المتصلون، ومتى يردون، وأي القنوات تجلب عملاء مؤهلين.',
    journey: 'رحلة العميل', extracted: 'مستخرج بالذكاء الاصطناعي', rubric: 'تفصيل التقييم', whatsapp: 'متابعة واتساب', odooSync: 'مزامنة Odoo', recording: 'تسجيل المكالمة',
    back: 'العودة للمسار', search: 'ابحث بالاسم أو الهاتف أو المشروع…',
    toastQ: 'مؤهل · أُرسل إلى Odoo', score: 'التقييم',
  },
};

const AA_PROJECTS = ['Diar AlHaram', 'Al-Narjis'];

const AA_STATUSES = [
  { id: 'new', en: 'New', ar: 'جديد', color: 'gray' },
  { id: 'calling', en: 'Queued / Calling', ar: 'في الانتظار / جارٍ الاتصال', color: 'blue' },
  { id: 'qualified', en: 'Qualified', ar: 'مؤهل', color: 'green' },
  { id: 'nurture', en: 'Nurture', ar: 'رعاية', color: 'indigo' },
  { id: 'call_back', en: 'Call back', ar: 'معاودة الاتصال', color: 'orange' },
  { id: 'unreachable', en: 'Unreachable', ar: 'تعذر الوصول', color: 'danger' },
  { id: 'not_qualified', en: 'Not qualified', ar: 'غير مؤهل', color: 'gray' },
];

const AA_LEADS = [
  { id: 'L-20931', name: 'Ahmed Al-Qahtani', ar: 'أحمد القحطاني', phone: '+966 55 214 8830', project: 'Diar AlHaram', channel: 'Meta Lead Ads', lang: 'AR', status: 'qualified', score: 86, attempts: 1, unit: '3BR', when: '2m ago', odoo: 'CRM-48211' },
  { id: 'L-20930', name: 'Sara Al-Otaibi', ar: 'سارة العتيبي', phone: '+966 50 771 0921', project: 'Al-Narjis', channel: 'Google Ads', lang: 'EN', status: 'qualified', score: 74, attempts: 2, unit: 'Villa', when: '9m ago', odoo: 'CRM-48207' },
  { id: 'L-20929', name: 'Faisal Al-Harbi', ar: 'فيصل الحربي', phone: '+966 53 902 4417', project: 'Diar AlHaram', channel: 'Landing page (QR)', lang: 'AR', status: 'calling', score: null, attempts: 1, unit: '—', when: 'now' },
  { id: 'L-20928', name: 'Nora Al-Shehri', ar: 'نورة الشهري', phone: '+966 54 330 1187', project: 'Al-Narjis', channel: 'TikTok', lang: 'AR', status: 'nurture', score: 52, attempts: 1, unit: '2BR', when: '14m ago' },
  { id: 'L-20927', name: 'Khalid Al-Dosari', ar: 'خالد الدوسري', phone: '+966 56 118 2290', project: 'Diar AlHaram', channel: 'Odoo (recycled)', lang: 'AR', status: 'call_back', score: null, attempts: 1, unit: '—', when: '21m ago', callback: 'Today 18:30' },
  { id: 'L-20926', name: 'Laila Mansour', ar: 'ليلى منصور', phone: '+966 59 640 7712', project: 'Al-Narjis', channel: 'Meta Lead Ads', lang: 'FR', status: 'unreachable', score: null, attempts: 3, unit: '—', when: '33m ago' },
  { id: 'L-20925', name: 'Omar Bakr', ar: 'عمر بكر', phone: '+966 55 009 3341', project: 'Diar AlHaram', channel: 'Google Ads', lang: 'EN', status: 'qualified', score: 68, attempts: 1, unit: '2BR', when: '41m ago', odoo: 'CRM-48199' },
  { id: 'L-20924', name: 'Reem Al-Zahrani', ar: 'ريم الزهراني', phone: '+966 50 482 6650', project: 'Al-Narjis', channel: 'Snapchat', lang: 'AR', status: 'not_qualified', score: 22, attempts: 1, unit: 'Studio', when: '58m ago' },
  { id: 'L-20923', name: 'Yousef Al-Malki', ar: 'يوسف المالكي', phone: '+966 53 774 1029', project: 'Diar AlHaram', channel: 'Landing page (QR)', lang: 'AR', status: 'new', score: null, attempts: 0, unit: '—', when: 'just now' },
  { id: 'L-20922', name: 'Hana Al-Ghamdi', ar: 'هناء الغامدي', phone: '+966 54 201 8873', project: 'Al-Narjis', channel: 'Meta Lead Ads', lang: 'AR', status: 'calling', score: null, attempts: 2, unit: '—', when: 'now' },
  { id: 'L-20921', name: 'Mark Ellison', ar: 'مارك إليسون', phone: '+966 56 551 0042', project: 'Diar AlHaram', channel: 'LinkedIn', lang: 'EN', status: 'nurture', score: 47, attempts: 1, unit: '1BR', when: '1h ago' },
  { id: 'L-20920', name: 'Abdullah Al-Saud', ar: 'عبدالله السعود', phone: '+966 55 873 2201', project: 'Al-Narjis', channel: 'Odoo (recycled)', lang: 'AR', status: 'qualified', score: 91, attempts: 1, unit: 'Villa', when: '1h ago', odoo: 'CRM-48190' },
  { id: 'L-20919', name: 'Mona Fahad', ar: 'منى فهد', phone: '+966 59 110 7623', project: 'Diar AlHaram', channel: 'TikTok', lang: 'AR', status: 'unreachable', score: null, attempts: 3, unit: '—', when: '2h ago' },
  { id: 'L-20918', name: 'Tariq Nasser', ar: 'طارق ناصر', phone: '+966 50 338 9014', project: 'Al-Narjis', channel: 'Google Ads', lang: 'EN', status: 'new', score: null, attempts: 0, unit: '—', when: 'just now' },
];

// Simulated live call — Faisal, Diar AlHaram (Arabic with English gloss)
const AA_SCRIPT = [
  { who: 'agent', ar: 'السلام عليكم أستاذ فيصل، معك المساعد الذكي من ديار. المكالمة مسجلة لضمان الجودة.', en: 'Hello Mr. Faisal, this is the Diar AI assistant. This call is recorded for quality.' },
  { who: 'lead', ar: 'وعليكم السلام، أهلاً.', en: 'Hello, hi.' },
  { who: 'agent', ar: 'سجلت معنا عن مشروع ديار الحرم من خلال رمز QR. هل الوقت مناسب لدقيقتين؟', en: 'You registered about Diar AlHaram via our QR code. Do you have two minutes?' },
  { who: 'lead', ar: 'إيه تفضل.', en: 'Yes, go ahead.' },
  { who: 'agent', ar: 'هل الشراء للسكن أو للاستثمار؟', en: 'Is the purchase for living or for investment?', signal: 'purpose' },
  { who: 'lead', ar: 'للسكن، أنا وعائلتي.', en: 'To live in, me and my family.', gain: { purpose: 20 } },
  { who: 'agent', ar: 'وين تسكن حالياً؟', en: 'Where are you based at the moment?', signal: 'location' },
  { who: 'lead', ar: 'في مكة، حي العوالي.', en: 'In Makkah, Al-Awali district.', gain: { location: 10 } },
  { who: 'agent', ar: 'ممتاز. أي نوع وحدة تفضل؟', en: 'Great. Which unit type do you prefer?', signal: 'unit' },
  { who: 'lead', ar: 'شقة ثلاث غرف.', en: 'A three-bedroom apartment.', gain: { unit: 10 } },
  { who: 'agent', ar: 'وكم الميزانية التقريبية؟', en: 'And roughly what budget?', signal: 'budget' },
  { who: 'lead', ar: 'بين ثمانمئة ألف ومليون ريال.', en: 'Between 800 thousand and one million riyals.', gain: { budget: 15 } },
  { who: 'agent', ar: 'متى تخطط للشراء؟', en: 'When are you planning to buy?', signal: 'timeline' },
  { who: 'lead', ar: 'خلال شهرين إن شاء الله. وأبي أزور المشروع.', en: 'Within two months, God willing. And I want to visit the project.', gain: { timeline: 20, engagement: 15 } },
  { who: 'agent', ar: 'رائع. سيتصل بك مستشار المبيعات اليوم بين ٤ و٦ مساءً، وتصلك التفاصيل على واتساب. موافق؟', en: 'Wonderful. An advisor will call you today 4–6 pm, details on WhatsApp. Agreed?', signal: 'permission' },
  { who: 'lead', ar: 'موافق، شكراً.', en: 'Agreed, thanks.', override: true },
];

const AA_RUBRIC = [
  { id: 'purpose', en: 'Purpose', ar: 'الغرض', max: 20 },
  { id: 'budget', en: 'Budget fit', ar: 'ملاءمة الميزانية', max: 25 },
  { id: 'timeline', en: 'Timeline', ar: 'الجدول الزمني', max: 20 },
  { id: 'location', en: 'Location', ar: 'الموقع', max: 10 },
  { id: 'unit', en: 'Unit preference', ar: 'نوع الوحدة', max: 10 },
  { id: 'engagement', en: 'Engagement', ar: 'التفاعل', max: 15 },
];
// Not scored: if the lead agrees to a sales call, they go straight to sales whatever the score.
const AA_OVERRIDE = { en: 'Permission for a sales call', ar: 'الإذن باتصال من المبيعات', tagEn: 'Overrides score', tagAr: 'يتجاوز التقييم', noteEn: 'Lead goes straight to sales, whatever the score', noteAr: 'يُحوَّل العميل للمبيعات مباشرة مهما كان التقييم' };

const AA_LIVE = [
  { name: 'Hana Al-Ghamdi', project: 'Al-Narjis', lang: 'AR', sec: 74, stage: 'Budget' },
  { name: 'Mark Ellison', project: 'Diar AlHaram', lang: 'EN', sec: 131, stage: 'Timeline' },
  { name: 'Salem Al-Anazi', project: 'Diar AlHaram', lang: 'AR', sec: 12, stage: 'Greeting' },
  { name: 'Dana Youssef', project: 'Al-Narjis', lang: 'EN', sec: 96, stage: 'Unit type' },
  { name: 'Majed Al-Rashid', project: 'Al-Narjis', lang: 'AR', sec: 48, stage: 'Purpose' },
  { name: 'Inbound · IVR', project: 'Generic Agent', lang: 'AR', sec: 21, stage: 'Language select' },
];

const AA_TICKER = [
  ['Abdullah Al-Saud', 'qualified', 91, 'Al-Narjis'], ['Nora Al-Shehri', 'nurture', 52, 'Al-Narjis'], ['Omar Bakr', 'qualified', 68, 'Diar AlHaram'],
  ['Khalid Al-Dosari', 'call_back', null, 'Diar AlHaram'], ['Laila Mansour', 'unreachable', null, 'Al-Narjis'], ['Sara Al-Otaibi', 'qualified', 74, 'Al-Narjis'],
];

const AA_CALLS = [
  { id: 'C-88412', lead: 'Ahmed Al-Qahtani', dir: 'Outbound', project: 'Diar AlHaram', lang: 'AR', start: 'Oct 4, 09:12', dur: '3:08', outcome: 'qualified', csat: 4.5, attempt: '1/3' },
  { id: 'C-88409', lead: 'Sara Al-Otaibi', dir: 'Outbound', project: 'Al-Narjis', lang: 'EN', start: 'Oct 4, 09:03', dur: '2:41', outcome: 'qualified', csat: 4.0, attempt: '2/3' },
  { id: 'C-88405', lead: 'Inbound caller', dir: 'Inbound', project: 'Generic Agent', lang: 'AR', start: 'Oct 4, 08:55', dur: '1:12', outcome: 'generic', csat: 3.5, attempt: '—' },
  { id: 'C-88401', lead: 'Nora Al-Shehri', dir: 'Outbound', project: 'Al-Narjis', lang: 'AR', start: 'Oct 4, 08:47', dur: '2:19', outcome: 'nurture', csat: 3.8, attempt: '1/3' },
  { id: 'C-88398', lead: 'Khalid Al-Dosari', dir: 'Outbound', project: 'Diar AlHaram', lang: 'AR', start: 'Oct 4, 08:40', dur: '0:27', outcome: 'call_back', csat: null, attempt: '1/3' },
  { id: 'C-88392', lead: 'Laila Mansour', dir: 'Outbound', project: 'Al-Narjis', lang: 'FR', start: 'Oct 4, 08:31', dur: '0:00', outcome: 'unreachable', csat: null, attempt: '3/3' },
  { id: 'C-88388', lead: 'Omar Bakr', dir: 'Outbound', project: 'Diar AlHaram', lang: 'EN', start: 'Oct 4, 08:22', dur: '3:34', outcome: 'qualified', csat: 4.2, attempt: '1/3' },
  { id: 'C-88380', lead: 'Reem Al-Zahrani', dir: 'Outbound', project: 'Al-Narjis', lang: 'AR', start: 'Oct 4, 08:10', dur: '1:46', outcome: 'not_qualified', csat: 2.9, attempt: '1/3' },
  { id: 'C-88371', lead: 'Abdullah Al-Saud', dir: 'Inbound', project: 'Al-Narjis', lang: 'AR', start: 'Oct 3, 20:41', dur: '4:02', outcome: 'qualified', csat: 4.8, attempt: '—' },
];

Object.assign(window, { AA_STR, AA_PROJECTS, AA_STATUSES, AA_LEADS, AA_SCRIPT, AA_RUBRIC, AA_OVERRIDE, AA_LIVE, AA_TICKER, AA_CALLS });
