// Market localisation. The page sets window.AA_REGION before app.js loads: unset = KSA (/), 'eg' = Egypt (/egypt/).
const AA_EG = window.AA_REGION === 'eg';

// Inline copy that differs per market, keyed by language where it is shown in both.
const AA_RG = AA_EG ? {
  projectsAr: ['ديار القاهرة الجديدة', 'ديار الساحل'],
  dialect: { en: 'Arabic (Egyptian)', ar: 'العربية (مصري)' },
  local: { en: 'Egyptian', ar: 'مصري' }, foreign: { en: 'Non-Egyptian', ar: 'غير مصري' },
  window: { en: 'Window Sat–Thu 09:00–21:00 Cairo time · peak 17:00–19:00', ar: 'النافذة: سبت–خميس ٠٩:٠٠–٢١:٠٠ بتوقيت القاهرة · ذروة ١٧–١٩' },
  liveWindow: { en: 'Calling window open · Sat–Thu 09:00–21:00 Cairo', ar: 'نافذة الاتصال مفتوحة · سبت–خميس ٩–٢١' },
  topicLocation: { en: 'Location & access roads', ar: 'الموقع والطرق المؤدية' },
  purposeThird: { en: 'Summer home on the North Coast', ar: 'مصيف في الساحل الشمالي' },
  currency: { en: 'EGP', ar: 'جنيه' }, phonePrefix: '+20',
  budgetBuckets: ['<5M', '5–8M', '8–12M', '12–20M', '>20M'],
  medianBudget: 'EGP 10.5M',
  budgetFinding: { en: 'Budget is the #1 disqualifier: 41% of unqualified leads are under EGP 5M.', ar: 'الميزانية هي السبب الأول لعدم التأهل: ٤١٪ من غير المؤهلين ميزانيتهم أقل من ٥ ملايين جنيه.' },
  // [bank financing, cash, developer instalments, undecided]
  payment: [9, 24, 61, 6],
  cities: { en: ['New Cairo', 'Sheikh Zayed & October', 'Alexandria', 'Other Egyptian cities', 'Egyptians abroad'], ar: ['القاهرة الجديدة', 'الشيخ زايد وأكتوبر', 'الإسكندرية', 'مدن مصرية أخرى', 'مصريون بالخارج'] },
  cityShare: [34, 21, 12, 13, 20], cityQualify: [71, 66, 58, 44, 62],
  live: { name: { en: 'Karim Abdelrahman', ar: 'كريم عبد الرحمن' }, initials: 'KA' },
  lead: {
    location: { en: 'Cairo · Fifth Settlement', ar: 'القاهرة · التجمع الخامس' },
    budgetKey: 'budget_egp', budget: '8,000,000 – 10,000,000',
    summary: { en: 'Wants a 3BR for family living, budget EGP 8–10M, buying within 2 months on developer instalments, asked to visit the site. Prefers advisor call today 4–6 pm.', ar: 'يرغب في شقة ٣ غرف للسكن العائلي، الميزانية ٨–١٠ ملايين جنيه، الشراء خلال شهرين بالتقسيط من المطوّر، وطلب زيارة الموقع. يفضل اتصال المستشار اليوم ٤–٦ مساءً.' },
  },
} : {
  projectsAr: ['ديار الحرم', 'النرجس'],
  dialect: { en: 'Arabic (Saudi)', ar: 'العربية (سعودي)' },
  local: { en: 'Saudi', ar: 'سعودي' }, foreign: { en: 'Non-Saudi', ar: 'غير سعودي' },
  window: { en: 'Window Sat–Thu 09:00–21:00 KSA · peak 17:00–19:00', ar: 'النافذة: سبت–خميس ٠٩:٠٠–٢١:٠٠ بتوقيت السعودية · ذروة ١٧–١٩' },
  liveWindow: { en: 'Calling window open · Sat–Thu 09:00–21:00 KSA', ar: 'نافذة الاتصال مفتوحة · سبت–خميس ٩–٢١' },
  topicLocation: { en: 'Location & distance to Haram', ar: 'الموقع والقرب من الحرم' },
  purposeThird: { en: 'Second home near Haram', ar: 'منزل ثانٍ قرب الحرم' },
  currency: { en: 'SAR', ar: 'ريال' }, phonePrefix: '+966',
  budgetBuckets: ['<500k', '500–800k', '0.8–1.2M', '1.2–2M', '>2M'],
  medianBudget: 'SAR 1.05M',
  budgetFinding: { en: 'Budget is the #1 disqualifier: 41% of unqualified leads are under SAR 500k.', ar: 'الميزانية هي السبب الأول لعدم التأهل: ٤١٪ من غير المؤهلين ميزانيتهم أقل من ٥٠٠ ألف.' },
  payment: [52, 27, 17, 4],
  cities: { en: ['Makkah', 'Jeddah', 'Riyadh', 'Other Saudi cities', 'Outside Saudi Arabia'], ar: ['مكة المكرمة', 'جدة', 'الرياض', 'مدن أخرى في السعودية', 'خارج السعودية'] },
  cityShare: [41, 23, 14, 9, 13], cityQualify: [72, 64, 51, 46, 38],
  live: { name: { en: 'Faisal Al-Harbi', ar: 'فيصل الحربي' }, initials: 'FH' },
  lead: {
    location: { en: 'Makkah · Al-Awali', ar: 'مكة · العوالي' },
    budgetKey: 'budget_sar', budget: '800,000 – 1,000,000',
    summary: { en: 'Wants a 3BR for family living, budget SAR 800k–1M, buying within 2 months via bank financing, asked to visit the site. Prefers advisor call today 4–6 pm.', ar: 'يرغب في شقة ٣ غرف للسكن العائلي، الميزانية ٨٠٠ ألف–١ مليون ريال، الشراء خلال شهرين بتمويل بنكي، وطلب زيارة الموقع. يفضل اتصال المستشار اليوم ٤–٦ مساءً.' },
  },
};

// Egypt datasets; data.jsx and inbound.jsx pick these when AA_EG is set.
const EG_PROJECTS = ['Diar New Cairo', 'Diar North Coast'];
const EG_LEADS = [
  { id: 'L-20931', name: 'Ahmed El-Sayed', ar: 'أحمد السيد', phone: '+20 100 214 8830', project: 'Diar New Cairo', channel: 'Meta Lead Ads', lang: 'AR', status: 'qualified', score: 86, attempts: 1, unit: '3BR', when: '2m ago', odoo: 'CRM-48211' },
  { id: 'L-20930', name: 'Sara Mostafa', ar: 'سارة مصطفى', phone: '+20 122 771 0921', project: 'Diar North Coast', channel: 'Google Ads', lang: 'EN', status: 'qualified', score: 74, attempts: 2, unit: 'Villa', when: '9m ago', odoo: 'CRM-48207' },
  { id: 'L-20929', name: 'Karim Abdelrahman', ar: 'كريم عبد الرحمن', phone: '+20 111 902 4417', project: 'Diar New Cairo', channel: 'Landing page (QR)', lang: 'AR', status: 'calling', score: null, attempts: 1, unit: '—', when: 'now' },
  { id: 'L-20928', name: 'Nour Hassan', ar: 'نور حسن', phone: '+20 155 330 1187', project: 'Diar North Coast', channel: 'TikTok', lang: 'AR', status: 'nurture', score: 52, attempts: 1, unit: '2BR', when: '14m ago' },
  { id: 'L-20927', name: 'Mahmoud Fathy', ar: 'محمود فتحي', phone: '+20 101 118 2290', project: 'Diar New Cairo', channel: 'Odoo (recycled)', lang: 'AR', status: 'call_back', score: null, attempts: 1, unit: '—', when: '21m ago', callback: 'Today 18:30' },
  { id: 'L-20926', name: 'Laila Mansour', ar: 'ليلى منصور', phone: '+20 128 640 7712', project: 'Diar North Coast', channel: 'Meta Lead Ads', lang: 'FR', status: 'unreachable', score: null, attempts: 3, unit: '—', when: '33m ago' },
  { id: 'L-20925', name: 'Omar Bakr', ar: 'عمر بكر', phone: '+20 100 009 3341', project: 'Diar New Cairo', channel: 'Google Ads', lang: 'EN', status: 'qualified', score: 68, attempts: 1, unit: '2BR', when: '41m ago', odoo: 'CRM-48199' },
  { id: 'L-20924', name: 'Reem Adel', ar: 'ريم عادل', phone: '+20 120 482 6650', project: 'Diar North Coast', channel: 'Snapchat', lang: 'AR', status: 'not_qualified', score: 22, attempts: 1, unit: 'Studio', when: '58m ago' },
  { id: 'L-20923', name: 'Youssef Shawky', ar: 'يوسف شوقي', phone: '+20 114 774 1029', project: 'Diar New Cairo', channel: 'Landing page (QR)', lang: 'AR', status: 'new', score: null, attempts: 0, unit: '—', when: 'just now' },
  { id: 'L-20922', name: 'Hana Ibrahim', ar: 'هناء إبراهيم', phone: '+20 155 201 8873', project: 'Diar North Coast', channel: 'Meta Lead Ads', lang: 'AR', status: 'calling', score: null, attempts: 2, unit: '—', when: 'now' },
  { id: 'L-20921', name: 'Mark Ellison', ar: 'مارك إليسون', phone: '+20 106 551 0042', project: 'Diar New Cairo', channel: 'LinkedIn', lang: 'EN', status: 'nurture', score: 47, attempts: 1, unit: '1BR', when: '1h ago' },
  { id: 'L-20920', name: 'Mostafa Kamel', ar: 'مصطفى كامل', phone: '+20 122 873 2201', project: 'Diar North Coast', channel: 'Odoo (recycled)', lang: 'AR', status: 'qualified', score: 91, attempts: 1, unit: 'Villa', when: '1h ago', odoo: 'CRM-48190' },
  { id: 'L-20919', name: 'Mona Fahmy', ar: 'منى فهمي', phone: '+20 109 110 7623', project: 'Diar New Cairo', channel: 'TikTok', lang: 'AR', status: 'unreachable', score: null, attempts: 3, unit: '—', when: '2h ago' },
  { id: 'L-20918', name: 'Tarek Nasser', ar: 'طارق ناصر', phone: '+20 127 338 9014', project: 'Diar North Coast', channel: 'Google Ads', lang: 'EN', status: 'new', score: null, attempts: 0, unit: '—', when: 'just now' },
];

// Simulated live call — Karim, Diar New Cairo (Egyptian Arabic with English gloss)
const EG_SCRIPT = [
  { who: 'agent', ar: 'السلام عليكم يا أستاذ كريم، معاك المساعد الذكي من ديار. المكالمة متسجلة لضمان الجودة.', en: 'Hello Mr. Karim, this is the Diar AI assistant. This call is recorded for quality.' },
  { who: 'lead', ar: 'وعليكم السلام، أهلاً.', en: 'Hello, hi.' },
  { who: 'agent', ar: 'حضرتك سجلت معانا على مشروع ديار القاهرة الجديدة من كود الـQR. ينفع دقيقتين؟', en: 'You registered about Diar New Cairo via our QR code. Do you have two minutes?' },
  { who: 'lead', ar: 'أيوه اتفضل.', en: 'Yes, go ahead.' },
  { who: 'agent', ar: 'الشراء للسكن ولا للاستثمار؟', en: 'Is the purchase for living or for investment?', signal: 'purpose' },
  { who: 'lead', ar: 'للسكن، أنا والعيلة.', en: 'To live in, me and my family.', gain: { purpose: 20 } },
  { who: 'agent', ar: 'حضرتك ساكن فين دلوقتي؟', en: 'Where are you based at the moment?', signal: 'location' },
  { who: 'lead', ar: 'في القاهرة، التجمع الخامس.', en: 'In Cairo, Fifth Settlement.', gain: { location: 25 } },
  { who: 'agent', ar: 'تمام. حضرتك بتفضل أنهي نوع وحدة؟', en: 'Great. Which unit type do you prefer?', signal: 'unit' },
  { who: 'lead', ar: 'شقة تلات أوض.', en: 'A three-bedroom apartment.', gain: { unit: 10 } },
  { who: 'agent', ar: 'والميزانية تقريباً كام؟', en: 'And roughly what budget?', signal: 'budget' },
  { who: 'lead', ar: 'من تمانية لعشرة مليون جنيه.', en: 'Between 8 and 10 million pounds.', gain: { budget: 15 } },
  { who: 'agent', ar: 'محتاج تستلم الوحدة إمتى؟', en: 'When do you need the unit handed over?', signal: 'timeline' },
  { who: 'lead', ar: 'خلال شهرين إن شاء الله. وعايز أزور المشروع.', en: 'Within two months, God willing. And I want to visit the project.', gain: { timeline: 20 } },
  { who: 'agent', ar: 'هايل. مستشار المبيعات هيكلم حضرتك النهارده من ٤ لـ٦ المسا، والتفاصيل هتوصلك على واتساب. موافق؟', en: 'Wonderful. An advisor will call you today 4–6 pm, details on WhatsApp. Agreed?', signal: 'permission' },
  { who: 'lead', ar: 'موافق، شكراً.', en: 'Agreed, thanks.', override: true },
];

const EG_LIVE = [
  { name: 'Hana Ibrahim', project: 'Diar North Coast', lang: 'AR', sec: 74, stage: 'Budget' },
  { name: 'Mark Ellison', project: 'Diar New Cairo', lang: 'EN', sec: 131, stage: 'Delivery date' },
  { name: 'Sherif Anwar', project: 'Diar New Cairo', lang: 'AR', sec: 12, stage: 'Greeting' },
  { name: 'Dana Youssef', project: 'Diar North Coast', lang: 'EN', sec: 96, stage: 'Unit type' },
  { name: 'Hossam Ragab', project: 'Diar North Coast', lang: 'AR', sec: 48, stage: 'Purpose' },
  { name: 'Inbound · IVR', project: 'Generic Agent', lang: 'AR', sec: 21, stage: 'Language select' },
];

const EG_TICKER = [
  ['Mostafa Kamel', 'qualified', 91, 'Diar North Coast'], ['Nour Hassan', 'nurture', 52, 'Diar North Coast'], ['Omar Bakr', 'qualified', 68, 'Diar New Cairo'],
  ['Mahmoud Fathy', 'call_back', null, 'Diar New Cairo'], ['Laila Mansour', 'unreachable', null, 'Diar North Coast'], ['Sara Mostafa', 'qualified', 74, 'Diar North Coast'],
];

const EG_CALLS = [
  { id: 'C-88412', lead: 'Ahmed El-Sayed', dir: 'Outbound', project: 'Diar New Cairo', lang: 'AR', start: 'Oct 4, 09:12', dur: '3:08', outcome: 'qualified', csat: 4.5, attempt: '1/3' },
  { id: 'C-88409', lead: 'Sara Mostafa', dir: 'Outbound', project: 'Diar North Coast', lang: 'EN', start: 'Oct 4, 09:03', dur: '2:41', outcome: 'qualified', csat: 4.0, attempt: '2/3' },
  { id: 'C-88405', lead: 'Inbound caller', dir: 'Inbound', project: 'Generic Agent', lang: 'AR', start: 'Oct 4, 08:55', dur: '1:12', outcome: 'generic', csat: 3.5, attempt: '—' },
  { id: 'C-88401', lead: 'Nour Hassan', dir: 'Outbound', project: 'Diar North Coast', lang: 'AR', start: 'Oct 4, 08:47', dur: '2:19', outcome: 'nurture', csat: 3.8, attempt: '1/3' },
  { id: 'C-88398', lead: 'Mahmoud Fathy', dir: 'Outbound', project: 'Diar New Cairo', lang: 'AR', start: 'Oct 4, 08:40', dur: '0:27', outcome: 'call_back', csat: null, attempt: '1/3' },
  { id: 'C-88392', lead: 'Laila Mansour', dir: 'Outbound', project: 'Diar North Coast', lang: 'FR', start: 'Oct 4, 08:31', dur: '0:00', outcome: 'unreachable', csat: null, attempt: '3/3' },
  { id: 'C-88388', lead: 'Omar Bakr', dir: 'Outbound', project: 'Diar New Cairo', lang: 'EN', start: 'Oct 4, 08:22', dur: '3:34', outcome: 'qualified', csat: 4.2, attempt: '1/3' },
  { id: 'C-88380', lead: 'Reem Adel', dir: 'Outbound', project: 'Diar North Coast', lang: 'AR', start: 'Oct 4, 08:10', dur: '1:46', outcome: 'not_qualified', csat: 2.9, attempt: '1/3' },
  { id: 'C-88371', lead: 'Mostafa Kamel', dir: 'Inbound', project: 'Diar North Coast', lang: 'AR', start: 'Oct 3, 20:41', dur: '4:02', outcome: 'qualified', csat: 4.8, attempt: '—' },
];

const EG_IN_RECENT = [
  { id: 'C-88405', who: 'Inbound caller', ar: 'متصل وارد', project: 'Generic Agent', lang: 'AR', start: 'Oct 4, 08:55', dur: '1:12', reason: 'generic', outcome: 'generic', csat: 3.5 },
  { id: 'C-88371', who: 'Mostafa Kamel', ar: 'مصطفى كامل', project: 'Diar North Coast', lang: 'AR', start: 'Oct 3, 20:41', dur: '4:02', reason: 'project', outcome: 'qualified', csat: 4.8 },
  { id: 'C-88366', who: 'Hossam Ragab', ar: 'حسام رجب', project: 'Diar New Cairo', lang: 'AR', start: 'Oct 3, 19:12', dur: '2:47', reason: 'visit', outcome: 'transferred', csat: 4.4 },
  { id: 'C-88359', who: 'James Porter', ar: 'جيمس بورتر', project: 'Diar New Cairo', lang: 'EN', start: 'Oct 3, 17:58', dur: '3:21', reason: 'pricing', outcome: 'nurture', csat: 4.1 },
  { id: 'C-88350', who: 'Inbound caller', ar: 'متصل وارد', project: 'Generic Agent', lang: 'AR', start: 'Oct 3, 16:30', dur: '0:58', reason: 'existing', outcome: 'resolved', csat: 4.0 },
  { id: 'C-88344', who: 'Yasmin Fouad', ar: 'ياسمين فؤاد', project: 'Diar North Coast', lang: 'AR', start: 'Oct 3, 15:05', dur: '2:09', reason: 'project', outcome: 'qualified', csat: 4.6 },
];
