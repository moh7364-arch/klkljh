/* ══════════════════════════════════════
   AcademiaHub - Complete App Logic v2.0
   ══════════════════════════════════════ */

// ═══════════════ DATA ═══════════════

const SPECS_DATA = {
    'الطب والعلوم الصحية': { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', branches: ['طب بشري','طب أسنان','صيدلة','تمريض','صحة عامة','علاج طبيعي','مختبرات طبية','أشعة','تخدير','تغذية علاجية','إدارة صحية','وبائيات'] },
    'الهندسة والتقنية': { img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80', branches: ['هندسة مدنية','هندسة معمارية','هندسة كهربائية','هندسة ميكانيكية','هندسة برمجيات','علوم حاسوب','ذكاء اصطناعي','أمن سيبراني','هندسة بيانات','اتصالات','نفط وغاز','طاقة متجددة'] },
    'العلوم الطبيعية والبحتة': { img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80', branches: ['فيزياء','كيمياء','أحياء','رياضيات','إحصاء','علوم بيئة','جيولوجيا','تقنية حيوية','علوم المواد'] },
    'العلوم الاجتماعية': { img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80', branches: ['علم اجتماع','علم نفس','خدمة اجتماعية','علوم سياسية','إعلام واتصال','أنثروبولوجيا','علاقات دولية'] },
    'العلوم الإنسانية والتربوية': { img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&q=80', branches: ['تاريخ','فلسفة','أدب عربي','أدب إنجليزي','لغويات','دراسات إسلامية','تربية','مناهج وطرق تدريس','جغرافيا'] },
    'الإدارة والاقتصاد': { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80', branches: ['إدارة أعمال','تسويق','محاسبة','تمويل','اقتصاد','نظم معلومات إدارية','موارد بشرية','ريادة أعمال'] },
    'القانون والأنظمة': { img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80', branches: ['قانون عام','قانون خاص','قانون جنائي','قانون تجاري','قانون دولي','قانون إداري','تحكيم','حقوق الإنسان'] },
    'الفنون والعمارة والتصميم': { img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80', branches: ['تصميم داخلي','تصميم جرافيك','فنون بصرية','تخطيط عمراني','إعلام رقمي','تصميم تجربة المستخدم'] }
};

const EXPERTS_DATA = [
    // الطب (5)
    { n: 'أ.د. عبدالرحمن القحطاني', s: 'الطب البشري - الباطنية', c: 'الطب والعلوم الصحية', r: 4.9, p: 62, exp: '15 سنة', b: 'diamond', bio: 'استشاري باطنية، ناشر في دوريات طبية عالمية' },
    { n: 'د. نورة الشمري', s: 'طب الأسنان - تقويم', c: 'الطب والعلوم الصحية', r: 4.8, p: 38, exp: '10 سنوات', b: 'diamond', bio: 'أخصائية تقويم أسنان، باحثة في مواد طب الأسنان' },
    { n: 'د. فيصل المطيري', s: 'الصيدلة السريرية', c: 'الطب والعلوم الصحية', r: 4.7, p: 45, exp: '12 سنة', b: 'gold', bio: 'صيدلي سريري، خبير في اقتصاديات الدواء' },
    { n: 'د. منى العتيبي', s: 'التمريض - عناية مركزة', c: 'الطب والعلوم الصحية', r: 4.6, p: 29, exp: '8 سنوات', b: 'gold', bio: 'ممرضة ممارسة متقدمة، باحثة في جودة الرعاية' },
    { n: 'أ.د. خالد السبيعي', s: 'الصحة العامة - وبائيات', c: 'الطب والعلوم الصحية', r: 4.9, p: 55, exp: '18 سنة', b: 'diamond', bio: 'خبير وبائيات، مستشار منظمة الصحة العالمية سابقاً' },
    // الهندسة (5)
    { n: 'د. سارة الأحمدي', s: 'الذكاء الاصطناعي وتعلم الآلة', c: 'الهندسة والتقنية', r: 4.9, p: 48, exp: '11 سنة', b: 'diamond', bio: 'باحثة في التعلم العميق، ناشرة في NeurIPS و ICML' },
    { n: 'د. عمر الحربي', s: 'الهندسة المدنية - إنشاءات', c: 'الهندسة والتقنية', r: 4.8, p: 41, exp: '13 سنة', b: 'diamond', bio: 'مهندس استشاري، خبير في تحليل المنشآت' },
    { n: 'د. ليلى القاسم', s: 'الهندسة الكهربائية - اتصالات', c: 'الهندسة والتقنية', r: 4.7, p: 35, exp: '9 سنوات', b: 'gold', bio: 'متخصصة في شبكات الجيل الخامس' },
    { n: 'د. محمد العمري', s: 'الأمن السيبراني', c: 'الهندسة والتقنية', r: 4.8, p: 52, exp: '14 سنة', b: 'diamond', bio: 'خبير أمن معلومات، حاصل على CISSP و CEH' },
    { n: 'د. أحمد الشهري', s: 'الهندسة الميكانيكية - طاقة متجددة', c: 'الهندسة والتقنية', r: 4.7, p: 33, exp: '10 سنوات', b: 'gold', bio: 'باحث في الطاقة الشمسية والأنظمة الحرارية' },
    // العلوم (4)
    { n: 'د. محمد القحطاني', s: 'الإحصاء وتحليل البيانات', c: 'العلوم الطبيعية والبحتة', r: 4.8, p: 58, exp: '16 سنة', b: 'diamond', bio: 'إحصائي محترف، خبير في SPSS و R و Python' },
    { n: 'د. عبير الرشيدي', s: 'الكيمياء التحليلية', c: 'العلوم الطبيعية والبحتة', r: 4.6, p: 24, exp: '7 سنوات', b: 'silver', bio: 'كيميائية متخصصة في التحليل الآلي' },
    { n: 'د. طارق الشمري', s: 'الأحياء الجزيئية', c: 'العلوم الطبيعية والبحتة', r: 4.7, p: 31, exp: '9 سنوات', b: 'gold', bio: 'باحث في التقنية الحيوية والهندسة الوراثية' },
    { n: 'د. هبة اليوسف', s: 'الفيزياء الطبية', c: 'العلوم الطبيعية والبحتة', r: 4.5, p: 19, exp: '5 سنوات', b: 'bronze', bio: 'فيزيائية طبية متخصصة في العلاج الإشعاعي' },
    // الاجتماعية (4)
    { n: 'د. عبدالله المطيري', s: 'علم الاجتماع', c: 'العلوم الاجتماعية', r: 4.7, p: 36, exp: '12 سنة', b: 'gold', bio: 'باحث في التغير الاجتماعي والتنمية' },
    { n: 'د. سلمى الحربي', s: 'علم النفس السريري', c: 'العلوم الاجتماعية', r: 4.8, p: 42, exp: '11 سنة', b: 'diamond', bio: 'أخصائية نفسية، باحثة في الصحة النفسية' },
    { n: 'د. وليد القحطاني', s: 'العلوم السياسية', c: 'العلوم الاجتماعية', r: 4.5, p: 22, exp: '8 سنوات', b: 'silver', bio: 'محلل سياسي وباحث في الشؤون الدولية' },
    { n: 'د. نادية العجمي', s: 'الإعلام والاتصال', c: 'العلوم الاجتماعية', r: 4.6, p: 28, exp: '9 سنوات', b: 'gold', bio: 'باحثة في الإعلام الرقمي وتحليل المحتوى' },
    // الإنسانية (4)
    { n: 'د. ليلى العتيبي', s: 'الأدب العربي', c: 'العلوم الإنسانية والتربوية', r: 4.7, p: 25, exp: '10 سنوات', b: 'gold', bio: 'أستاذة الأدب العربي، متخصصة في النقد الأدبي' },
    { n: 'د. إبراهيم الدوسري', s: 'التاريخ الإسلامي', c: 'العلوم الإنسانية والتربوية', r: 4.5, p: 18, exp: '7 سنوات', b: 'silver', bio: 'مؤرخ متخصص في التاريخ الإسلامي' },
    { n: 'د. خالد العسيري', s: 'اللغويات والترجمة', c: 'العلوم الإنسانية والتربوية', r: 4.6, p: 40, exp: '15 سنة', b: 'gold', bio: 'لغوي ومترجم معتمد، خبير في الترجمة الأكاديمية' },
    { n: 'د. هناء الشهري', s: 'أصول التربية', c: 'العلوم الإنسانية والتربوية', r: 4.4, p: 15, exp: '5 سنوات', b: 'bronze', bio: 'تربوية متخصصة في تطوير المناهج' },
    // الإدارة (4)
    { n: 'د. سلطان المالكي', s: 'إدارة الأعمال - استراتيجية', c: 'الإدارة والاقتصاد', r: 4.7, p: 44, exp: '12 سنة', b: 'gold', bio: 'خبير استراتيجية، مستشار إداري' },
    { n: 'د. ريم الفيصل', s: 'التسويق الرقمي', c: 'الإدارة والاقتصاد', r: 4.6, p: 32, exp: '8 سنوات', b: 'gold', bio: 'باحثة في سلوك المستهلك والتسويق الرقمي' },
    { n: 'د. عبدالعزيز العنزي', s: 'المحاسبة والمراجعة', c: 'الإدارة والاقتصاد', r: 4.5, p: 26, exp: '10 سنوات', b: 'silver', bio: 'محاسب قانوني، خبير في معايير المحاسبة الدولية' },
    { n: 'د. نورة القحطاني', s: 'الاقتصاد والتمويل', c: 'الإدارة والاقتصاد', r: 4.8, p: 38, exp: '11 سنة', b: 'diamond', bio: 'اقتصادية متخصصة في الاقتصاد القياسي' },
    // القانون (4)
    { n: 'د. فاطمة الزهراني', s: 'القانون الجنائي', c: 'القانون والأنظمة', r: 4.6, p: 20, exp: '9 سنوات', b: 'silver', bio: 'محامية وباحثة في القانون الجنائي المقارن' },
    { n: 'د. محمد الدوسري', s: 'القانون التجاري', c: 'القانون والأنظمة', r: 4.7, p: 34, exp: '14 سنة', b: 'gold', bio: 'مستشار قانوني، متخصص في قانون الشركات' },
    { n: 'د. سارة العنزي', s: 'القانون الدولي', c: 'القانون والأنظمة', r: 4.5, p: 16, exp: '6 سنوات', b: 'bronze', bio: 'باحثة في القانون الدولي الإنساني' },
    { n: 'د. تركي المالكي', s: 'القانون العام', c: 'القانون والأنظمة', r: 4.6, p: 28, exp: '11 سنة', b: 'gold', bio: 'قاضٍ سابق، خبير في القانون الإداري' }
];

const LIBRARY_DATA = [
    { t: 'قالب خطة بحث (Research Proposal)', c: 'proposal', f: 'Word', d: 'نموذج احترافي لخطة البحث الأكاديمي لجميع التخصصات، يتضمن جميع الأقسام المطلوبة.', icon: 'fa-file-word', clr: 'blue', dw: 2450 },
    { t: 'قالب رسالة ماجستير كاملة', c: 'thesis', f: 'Word', d: 'قالب شامل لرسالة الماجستير مع شرح تفصيلي لكل فصل وقسم.', icon: 'fa-file-word', clr: 'blue', dw: 3210 },
    { t: 'قالب رسالة دكتوراه', c: 'thesis', f: 'Word', d: 'نموذج متكامل لرسالة الدكتوراه بجميع فصولها وأقسامها.', icon: 'fa-file-word', clr: 'blue', dw: 1890 },
    { t: 'قالب ورقة علمية LaTeX', c: 'paper', f: 'LaTeX', d: 'قالب LaTeX احترافي متوافق مع متطلبات مجلات Scopus و ISI.', icon: 'fa-file-code', clr: 'purple', dw: 1560 },
    { t: 'قالب Cover Letter للتقديم', c: 'cover', f: 'Word', d: 'رسالة تغطية احترافية لمحرري المجلات العلمية، قابلة للتخصيص.', icon: 'fa-file-word', clr: 'blue', dw: 980 },
    { t: 'قالب الرد على ملاحظات المحكمين', c: 'paper', f: 'Word', d: 'نموذج منظم للرد على ملاحظات المحكمين بطريقة علمية واضحة.', icon: 'fa-file-word', clr: 'green', dw: 1230 },
    { t: 'قالب عرض تقديمي للمناقشة', c: 'presentation', f: 'PowerPoint', d: 'عرض تقديمي احترافي وجذاب لمناقشة الرسالة.', icon: 'fa-file-powerpoint', clr: 'orange', dw: 4100 },
    { t: 'قالب استبيان بحثي', c: 'paper', f: 'Word', d: 'نموذج استبيان احترافي جاهز للتعديل مع أسئلة نموذجية.', icon: 'fa-file-word', clr: 'blue', dw: 2750 },
    { t: 'قالب مقابلة بحثية', c: 'paper', f: 'Word', d: 'دليل مقابلة للبحوث النوعية مع أسئلة مفتوحة نموذجية.', icon: 'fa-file-word', clr: 'green', dw: 890 },
    { t: 'قالب تحليل البيانات الإحصائية', c: 'paper', f: 'Word', d: 'نموذج لعرض نتائج التحليل الإحصائي مع الجداول والرسوم.', icon: 'fa-file-word', clr: 'purple', dw: 1650 },
    { t: 'قالب خطة بحث - تصميم منهجي', c: 'proposal', f: 'Word', d: 'نموذج خاص لمنهجية البحث الكمي والنوعي بالتفصيل.', icon: 'fa-file-word', clr: 'blue', dw: 2100 },
    { t: 'قالب ملخص البحث (Abstract)', c: 'paper', f: 'Word', d: 'نموذج كتابة ملخص بحثي احترافي بالعربية والإنجليزية.', icon: 'fa-file-word', clr: 'green', dw: 1340 }
];

const FORUM_DATA = [
    { n: 'نقاشات عامة في البحث العلمي', d: 'مناقشات حول مناهج البحث وأدواته وتحدياته', t: 245, r: 1890, clr: '#3B82F6', icon: 'fa-comments' },
    { n: 'تجارب النشر في Scopus و ISI', d: 'شارك تجربتك واستفسر عن النشر في المجلات العالمية', t: 178, r: 1340, clr: '#10B981', icon: 'fa-newspaper' },
    { n: 'استفسارات التحليل الإحصائي', d: 'أسئلة حول SPSS و R و AMOS وتحليل البيانات', t: 156, r: 980, clr: '#F59E0B', icon: 'fa-chart-pie' },
    { n: 'فرص ومنح ومؤتمرات', d: 'إعلانات المؤتمرات والمنح الدراسية وفرص البحث', t: 89, r: 445, clr: '#8B5CF6', icon: 'fa-bullhorn' },
    { n: 'قسم التخصصات الطبية', d: 'مناقشات بحثية متخصصة في المجال الطبي والصحي', t: 67, r: 320, clr: '#EF4444', icon: 'fa-stethoscope' },
    { n: 'قسم الهندسة والتقنية', d: 'حوارات حول أبحاث الهندسة والذكاء الاصطناعي', t: 92, r: 510, clr: '#06B6D4', icon: 'fa-microchip' },
    { n: 'قصص نجاح الباحثين', d: 'شارك قصة نجاحك الأكاديمي وألهم الآخرين', t: 45, r: 280, clr: '#EC4899', icon: 'fa-trophy' }
];


const JOURNAL_PORTALS = [
    { country: 'الجزائر', name: 'بوابة المجلات العلمية الجزائرية ASJP', url: 'https://www.asjp.cerist.dz', icon: 'fa-landmark' },
    { country: 'العراق', name: 'المجلات الأكاديمية العراقية IASJ', url: 'https://iasj.net', icon: 'fa-book-journal-whills' },
    { country: 'ليبيا', name: 'بوابة المجلات العلمية الليبية', url: 'https://journals.uob.edu.ly', icon: 'fa-book-open-reader' },
    { country: 'الأردن', name: 'المجلات العلمية الأردنية', url: 'https://journals.ju.edu.jo', icon: 'fa-scroll' },
    { country: 'المغرب', name: 'بوابات المجلات المغربية IMIST', url: 'https://revues.imist.ma', icon: 'fa-atlas' }
];

const PUBLICATION_EXTRAS = [
    'تقييم ملاءمة المجلة وفحص نطاقها قبل الإرسال',
    'مطابقة قالب المجلة وتعليمات المؤلفين',
    'إعداد خطاب التغطية Cover Letter',
    'إدارة الرد على المحكمين Reviewer Response',
    'فحص الاقتباس والتشابه قبل التقديم',
    'اقتراح مجلات محلية وإقليمية مناسبة حسب الدولة والتخصص'
];

function imgFallback(img, label) {
    const box = img.closest('.journal-logo-box') || img.parentElement;
    if (!box) return;
    img.style.display = 'none';
    if (!box.querySelector('.logo-fallback')) {
        const fallback = document.createElement('strong');
        fallback.className = 'logo-fallback';
        fallback.textContent = (label || img.alt || 'مجلة').slice(0, 3);
        box.prepend(fallback);
    }
}


const PREVIOUS_WORKS_DATA = [
    { t: 'أثر الذكاء الاصطناعي في تحسين جودة التعليم الجامعي', c: 'تقنيات التعليم', tag: 'ماجستير' },
    { t: 'دور القيادة التحويلية في رفع أداء المؤسسات الخدمية', c: 'إدارة أعمال', tag: 'دكتوراه' },
    { t: 'تحليل اتجاهات النشر العلمي العربي في قواعد Scopus', c: 'نشر علمي', tag: 'مقال' },
    { t: 'فاعلية التدخلات التمريضية في خفض قلق المرضى قبل العمليات', c: 'تمريض', tag: 'بحث طبي' },
    { t: 'أثر التسويق الرقمي في ولاء العملاء لدى المؤسسات الناشئة', c: 'تسويق', tag: 'رسالة' },
    { t: 'المسؤولية المدنية عن أخطاء الذكاء الاصطناعي', c: 'قانون', tag: 'مقال قانوني' },
    { t: 'العلاقة بين جودة الحياة الوظيفية والاحتراق المهني', c: 'علم نفس تنظيمي', tag: 'تحليل SPSS' },
    { t: 'استخدام نماذج الانحدار في التنبؤ بالطلب على الخدمات الصحية', c: 'إحصاء تطبيقي', tag: 'تحليل بيانات' },
    { t: 'دور الحوكمة في الحد من الفساد الإداري', c: 'إدارة عامة', tag: 'دراسة ميدانية' },
    { t: 'أثر تطبيق معايير الجودة الشاملة في الجامعات الخاصة', c: 'جودة تعليم', tag: 'بحث' },
    { t: 'تحليل خطاب وسائل الإعلام الرقمية أثناء الأزمات', c: 'إعلام واتصال', tag: 'مقال' },
    { t: 'الحماية القانونية للبيانات الشخصية في البيئة الرقمية', c: 'قانون رقمي', tag: 'بحث محكم' },
    { t: 'دور رأس المال الفكري في تعزيز الابتكار المؤسسي', c: 'إدارة معرفة', tag: 'رسالة' },
    { t: 'أثر استخدام الطاقة المتجددة في خفض تكاليف الإنتاج', c: 'هندسة/اقتصاد', tag: 'دراسة' },
    { t: 'تحسين كفاءة الخوارزميات في تصنيف النصوص العربية', c: 'ذكاء اصطناعي', tag: 'بحث تقني' },
    { t: 'العوامل المؤثرة في قبول التعليم الإلكتروني لدى طلبة الجامعات', c: 'تربية', tag: 'استبيان' },
    { t: 'تحليل المخاطر المالية في المشروعات الصغيرة والمتوسطة', c: 'تمويل', tag: 'تحليل مالي' },
    { t: 'دور العلاج الطبيعي في تحسين جودة حياة مرضى آلام الظهر', c: 'علوم صحية', tag: 'بحث طبي' },
    { t: 'أثر العدالة التنظيمية في الرضا الوظيفي', c: 'موارد بشرية', tag: 'رسالة' },
    { t: 'التحكيم التجاري الدولي وتسوية منازعات الاستثمار', c: 'قانون تجاري', tag: 'مقال قانوني' },
    { t: 'تقييم جودة الخدمات المصرفية الإلكترونية', c: 'مصارف', tag: 'دراسة ميدانية' },
    { t: 'استخدام نظم المعلومات الجغرافية في التخطيط الحضري', c: 'جغرافيا/تخطيط', tag: 'بحث تطبيقي' },
    { t: 'دور الأسرة في تنمية القيم الاجتماعية لدى الشباب', c: 'علم اجتماع', tag: 'بحث اجتماعي' },
    { t: 'تأثير الثقافة التنظيمية في إدارة التغيير', c: 'إدارة', tag: 'ماجستير' },
    { t: 'تحليل محتوى المناهج الدراسية في ضوء مهارات القرن الحادي والعشرين', c: 'مناهج وطرق تدريس', tag: 'تحليل محتوى' },
    { t: 'فاعلية برامج الأمن السيبراني في تقليل مخاطر الاختراق', c: 'أمن سيبراني', tag: 'بحث تقني' },
    { t: 'أثر جودة الإفصاح المحاسبي في قرارات المستثمرين', c: 'محاسبة', tag: 'بحث' },
    { t: 'دور الترجمة الأكاديمية في رفع فرص قبول المقالات دولياً', c: 'ترجمة', tag: 'مقال' },
    { t: 'تقييم جودة المجلات المحلية وآليات اختيار مجلة مناسبة للنشر', c: 'نشر محلي', tag: 'دليل نشر' },
    { t: 'تصميم خطة بحث متكاملة حول ريادة الأعمال الجامعية', c: 'ريادة أعمال', tag: 'خطة بحث' },
    { t: 'مراجعة منهجية لرسالة ماجستير في القانون الإداري', c: 'قانون إداري', tag: 'تدقيق رسالة' },
    { t: 'ترجمة مقال طبي حول جودة الرعاية الصحية', c: 'ترجمة طبية', tag: 'ترجمة' },
    { t: 'إعداد Cover Letter لمجلة دولية في الإدارة', c: 'نشر علمي', tag: 'Cover Letter' },
    { t: 'تصميم استبيان حول الرضا الوظيفي', c: 'موارد بشرية', tag: 'أداة بحث' },
    { t: 'تحليل بيانات AMOS لنموذج وساطة إحصائية', c: 'تحليل إحصائي', tag: 'AMOS' },
    { t: 'تنسيق مقال وفق متطلبات مجلة محلية جزائرية', c: 'ASJP', tag: 'نشر محلي' },
    { t: 'تهيئة مقال للنشر عبر بوابة المجلات العراقية', c: 'IASJ', tag: 'نشر محلي' },
    { t: 'إعداد ردود تفصيلية على ملاحظات محكمين', c: 'نشر دولي', tag: 'رد محكمين' },
    { t: 'تحويل رسالة جامعية إلى مقال قابل للنشر', c: 'اختصار أكاديمي', tag: 'مقال' },
    { t: 'تحرير مراجع وفق نظام Vancouver', c: 'توثيق طبي', tag: 'مراجع' },
    { t: 'إعداد عرض مناقشة دكتوراه', c: 'PowerPoint أكاديمي', tag: 'عرض' },
    { t: 'كتابة ملخص عربي وإنجليزي لبحث قانوني', c: 'صياغة أكاديمية', tag: 'ملخص' }
];


const CERTIFICATES_DATA = [
    { t: 'شهادة نشر دولي', d: 'نموذج شهادة قبول مقال في مجلة مفهرسة', icon: 'fa-newspaper', tag: 'نشر' },
    { t: 'شهادة مشاركة في مؤتمر', d: 'نموذج مشاركة ببحث علمي في مؤتمر دولي', icon: 'fa-users-viewfinder', tag: 'مؤتمر' },
    { t: 'شهادة ترجمة أكاديمية', d: 'نموذج إنجاز ترجمة بحث عربي/إنجليزي', icon: 'fa-language', tag: 'ترجمة' },
    { t: 'شهادة مراجعة لغوية', d: 'نموذج تدقيق لغوي وتحرير أكاديمي', icon: 'fa-spell-check', tag: 'تدقيق' },
    { t: 'شهادة فحص اقتباس', d: 'نموذج تقرير أصالة وفحص تشابه', icon: 'fa-shield-halved', tag: 'أصالة' },
    { t: 'شهادة تنسيق مجلة', d: 'نموذج تهيئة مقال حسب دليل المؤلفين', icon: 'fa-file-circle-check', tag: 'تنسيق' },
    { t: 'شهادة مشاركة في النشر', d: 'نموذج تعاون بحثي ومتابعة نشر', icon: 'fa-handshake-angle', tag: 'تعاون' },
    { t: 'شهادة تحرير مراجع', d: 'نموذج ضبط APA/Vancouver/IEEE', icon: 'fa-list-check', tag: 'مراجع' }
];
const FEATURES_PRO_DATA = [
    { t: 'متابعة حالة الطلب', d: 'عرض الطلبات النشطة والمكتملة مع إشعارات داخلية.', icon: 'fa-list-check' },
    { t: 'رفع ملفات متعددة', d: 'إرفاق خطة، مقال، مراجع، أو متطلبات الجامعة.', icon: 'fa-cloud-arrow-up' },
    { t: 'اختيار النظام التوثيقي', d: 'APA 7، Vancouver، Harvard، Chicago، IEEE.', icon: 'fa-quote-right' },
    { t: 'خطة نشر مخصصة', d: 'اقتراح بوابات ومجلات مناسبة حسب الدولة والتخصص.', icon: 'fa-bullseye' },
    { t: 'قوالب أكاديمية جاهزة', d: 'مكتبة نماذج للخطط، العروض، الردود، والاستبيانات.', icon: 'fa-book-open' },
    { t: 'مراسلة داخلية', d: 'واجهة محادثات لربط كل طلب بالمراسلات الخاصة به.', icon: 'fa-comments' },
    { t: 'مجتمع أكاديمي', d: 'أقسام نقاش حول النشر والتحليل والمنح والمؤتمرات.', icon: 'fa-users' },
    { t: 'بوابات عربية ومحلية', d: 'روابط للجزائر، العراق، ليبيا، الأردن، والمغرب.', icon: 'fa-globe' }
];
const REVIEWS_DATA = [
    { n: 'باحث دكتوراه', r: 'خدمة منظمة وواضحة، خصوصاً في إعداد خطة النشر والرد على ملاحظات المحكمين.' },
    { n: 'طالبة ماجستير', r: 'استفدت من ترتيب الفصول والتوثيق، وكانت المتابعة داخل المنصة سهلة.' },
    { n: 'باحث مستقل', r: 'الترجمة الأكاديمية حسّنت جودة المقال وساعدتني في تهيئته للتقديم.' }
];

// ═══════════════ STATE ═══════════════
const ST = {
    user: null,
    page: 'home',
    history: ['home'],
    orders: [],
    notifs: []
};

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.auth-body')) { initAuth(); return; }
    checkUser();
    loadUserData();
    initSidebar();
    initNavigation();
    initBackButton();
    initTopbar();
    fillAllSpecSelects();
    loadSpecsGrid();
    loadPreviousWorksGrid();
    initHomeEnhancements();
    loadHomeStats();
    renderJournalPortals();
    initLogoFallbacks();
    initAllForms();
    initFileUploads();
    initModal();
    loadOrdersPage();
    loadMessagesPage();
    initExpertsPage();
    initLibraryPage();
    initForumPage();
    updateAllBadges();
    updateNotifUI();
});

// ═══════════════ AUTH ═══════════════
function initAuth() {
    document.querySelectorAll('.auth-tab').forEach(t => {
        t.addEventListener('click', function() {
            document.querySelectorAll('.auth-tab').forEach(x => x.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
            document.getElementById(this.dataset.tab + 'Form').classList.add('active');
        });
    });

    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const em = document.getElementById('loginEmail').value.trim();
        const pw = document.getElementById('loginPassword').value;
        if (!em || !pw) return showAuthMsg('يرجى ملء جميع الحقول', 'error');
        const user = { email: em, name: em.split('@')[0], fullName: em.split('@')[0], firstName: em.split('@')[0], isLoggedIn: true, academicLevel: 'researcher', specialization: 'general' };
        localStorage.setItem('ahu', JSON.stringify(user));
        showAuthMsg('✅ تم تسجيل الدخول بنجاح', 'success');
        setTimeout(() => location.href = 'dashboard.html', 600);
    });

    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const fn = document.getElementById('regFirstName').value.trim();
        const ln = document.getElementById('regLastName').value.trim();
        const em = document.getElementById('regEmail').value.trim();
        const lv = document.getElementById('regLevel').value;
        const sp = document.getElementById('regSpecialization').value;
        const pw = document.getElementById('regPassword').value;
        const cp = document.getElementById('regConfirm').value;
        if (!fn || !ln || !em || !lv || !sp || !pw || !cp) return showAuthMsg('يرجى ملء جميع الحقول', 'error');
        if (pw !== cp) return showAuthMsg('كلمة المرور غير متطابقة', 'error');
        if (pw.length < 8) return showAuthMsg('كلمة المرور 8 أحرف على الأقل', 'error');
        const user = { firstName: fn, lastName: ln, fullName: fn + ' ' + ln, name: fn + ' ' + ln, email: em, academicLevel: lv, specialization: sp, isLoggedIn: true };
        localStorage.setItem('ahu', JSON.stringify(user));
        showAuthMsg('✅ تم إنشاء الحساب بنجاح', 'success');
        setTimeout(() => location.href = 'dashboard.html', 600);
    });
}

function showAuthMsg(msg, type) {
    const el = document.getElementById('authMsg');
    el.textContent = msg;
    el.className = 'auth-msg ' + type;
}

// ═══════════════ CHECK USER ═══════════════
function checkUser() {
    const raw = localStorage.getItem('ahu');
    if (!raw) { location.href = 'index.html'; return; }
    try {
        ST.user = JSON.parse(raw);
        if (!ST.user.isLoggedIn) location.href = 'index.html';
    } catch(e) { location.href = 'index.html'; }
    ST.orders = JSON.parse(localStorage.getItem('ahu_orders') || '[]');
    ST.notifs = JSON.parse(localStorage.getItem('ahu_notifs') || '[]');
}

function loadUserData() {
    const u = ST.user;
    document.getElementById('sideName').textContent = u.name || 'باحث';
    document.getElementById('greetName').textContent = u.firstName || u.name || 'باحث';
    const initials = u.fullName ? u.fullName.split(' ').map(p => p[0]).join('').substring(0, 2) : 'ب';
    document.getElementById('sideAvatar').textContent = initials;
    document.getElementById('topAvatar').textContent = initials;
    const roleMap = { bachelor: 'طالب بكالوريوس', master: 'طالب ماجستير', phd: 'طالب دكتوراه', researcher: 'باحث' };
    document.getElementById('sideRole').textContent = roleMap[u.academicLevel] || 'باحث';
}

// ═══════════════ SIDEBAR ═══════════════
function initSidebar() {
    document.getElementById('sideToggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('closed');
        document.getElementById('mainContent').classList.toggle('full');
    });
    document.getElementById('menuBtn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('mobile-open');
    });
    document.getElementById('logoutBtn').addEventListener('click', () => {
        if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
            localStorage.removeItem('ahu');
            location.href = 'index.html';
        }
    });
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const menuBtn = document.getElementById('menuBtn');
        if (window.innerWidth <= 1024 && sidebar.classList.contains('mobile-open') && !sidebar.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
            sidebar.classList.remove('mobile-open');
        }
    });
}

// ═══════════════ NAVIGATION ═══════════════
function initNavigation() {
    document.querySelectorAll('.side-link[data-page]').forEach(l => {
        l.addEventListener('click', function(e) {
            e.preventDefault();
            goTo(this.dataset.page);
            document.getElementById('sidebar').classList.remove('mobile-open');
        });
    });
}


function initBackButton() {
    const btn = document.getElementById('backBtn');
    if (!btn) return;
    btn.addEventListener('click', () => {
        if (ST.history.length > 1) {
            ST.history.pop();
            goTo(ST.history[ST.history.length - 1], true);
        } else {
            goTo('home', true);
        }
    });
    updateBackButton();
}

function updateBackButton() {
    const btn = document.getElementById('backBtn');
    if (!btn) return;
    const canBack = ST.page !== 'home' || ST.history.length > 1;
    btn.classList.toggle('is-disabled', !canBack);
}

function goTo(page, fromBack = false) {
    if (!fromBack && ST.page !== page) ST.history.push(page);
    if (ST.history.length > 20) ST.history = ST.history.slice(-20);
    ST.page = page;
    document.querySelectorAll('.side-link').forEach(l => l.classList.remove('active'));
    const link = document.querySelector(`.side-link[data-page="${page}"]`);
    if (link) link.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (el) el.classList.add('active');
    document.getElementById('pageContainer').scrollTop = 0;
    if (page === 'orders') loadOrdersPage();
    if (page === 'experts') loadExpertsGrid();
    if (page === 'library') loadLibraryGrid();
    if (page === 'forum') loadForumGrid();
    if (page === 'messages') loadMessagesPage();
    if (page === 'home') loadHomeStats();
    updateBackButton();
}


// ═══════════════ TOPBAR ═══════════════
function initTopbar() {
    document.getElementById('notifBell').addEventListener('click', function(e) {
        e.stopPropagation();
        updateNotifUI();
        document.getElementById('notifDrop').classList.toggle('show');
    });
    document.addEventListener('click', () => document.getElementById('notifDrop').classList.remove('show'));
}

// ═══════════════ NOTIFICATIONS ═══════════════
function addNotification(type, msg, icon, color) {
    ST.notifs.unshift({ id: Date.now(), type, msg, icon, color, time: 'الآن', read: false });
    if (ST.notifs.length > 50) ST.notifs = ST.notifs.slice(0, 50);
    localStorage.setItem('ahu_notifs', JSON.stringify(ST.notifs));
    updateNotifUI();
    updateAllBadges();
}

function updateNotifUI() {
    const body = document.querySelector('.notif-body');
    const countEl = document.querySelector('.notif-head span');
    const dot = document.querySelector('.bell-dot');
    if (!body) return;
    const unread = ST.notifs.filter(n => !n.read).length;
    if (countEl) countEl.textContent = unread > 0 ? unread + ' جديدة' : '0';
    if (dot) dot.style.display = unread > 0 ? 'block' : 'none';
    if (ST.notifs.length === 0) {
        body.innerHTML = '<p class="notif-empty">لا توجد إشعارات حالياً</p>';
        return;
    }
    body.innerHTML = ST.notifs.slice(0, 8).map(n => `
        <div class="notif-item" style="padding:12px 16px;border-bottom:1px solid var(--g2);${n.read?'':'background:var(--pbg)'}">
            <i class="fa-solid ${n.icon}" style="color:${n.color};margin-left:8px"></i>
            <span style="font-size:.85rem">${n.msg}</span>
            <br><small style="color:var(--g5)">${n.time}</small>
        </div>
    `).join('');
}

function updateAllBadges() {
    const active = ST.orders.filter(o => o.st !== 'completed').length;
    const b = document.getElementById('ordBadge');
    if (b) { b.textContent = active; b.style.display = active > 0 ? 'inline-block' : 'none'; }
}

// ═══════════════ HOME ═══════════════
function loadHomeStats() {
    const active = ST.orders.filter(o => o.st !== 'completed').length;
    const completed = ST.orders.filter(o => o.st === 'completed').length;
    document.getElementById('activeNum').textContent = active;
    document.getElementById('completedNum').textContent = completed;
}

function loadSpecsGrid() {
    const grid = document.getElementById('specsGrid');
    if (!grid) return;
    grid.innerHTML = Object.entries(SPECS_DATA).map(([k, v]) => `
        <div class="spec-card">
            <img src="${v.img}" alt="${k}" loading="lazy">
            <div class="spec-body">
                <i class="fa-solid fa-folder-tree"></i>
                <div>
                    <h5>${k}</h5>
                    <div class="branches">${v.branches.map(b => `<span>${b}</span>`).join('')}</div>
                </div>
            </div>
        </div>
    `).join('');
}


function getWorkCategory(w) {
    const text = (w.t + ' ' + w.c + ' ' + w.tag).toLowerCase();
    if (/ترجم|translation|لغة/.test(text)) return 'translation';
    if (/نشر|scopus|مجلة|محكم|مقال|cover/.test(text)) return 'publication';
    if (/تحليل|spss|إحصاء|بيانات|انحدار|amos/.test(text)) return 'stats';
    if (/رسالة|ماجستير|دكتوراه|خطة بحث/.test(text)) return 'thesis';
    return 'other';
}

function loadPreviousWorksGrid(filter = 'all') {
    const grid = document.getElementById('previousWorksGrid');
    if (!grid) return;
    const data = filter === 'all' ? PREVIOUS_WORKS_DATA : PREVIOUS_WORKS_DATA.filter(w => getWorkCategory(w) === filter);
    grid.innerHTML = data.map((w, i) => `
        <article class="work-card" data-work-category="${getWorkCategory(w)}">
            <div class="work-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="work-content">
                <span class="work-tag">${w.tag}</span>
                <h4>${w.t}</h4>
                <p><i class="fa-solid fa-folder-open"></i> ${w.c}</p>
            </div>
            <button class="work-btn" onclick="goTo('thesis')">طلب مشابه</button>
        </article>
    `).join('');
}

function initHomeEnhancements() {
    document.querySelectorAll('[data-work-filter]').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('[data-work-filter]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadPreviousWorksGrid(this.dataset.workFilter);
        });
    });
    renderCertificatesGrid();
    renderFeaturesProGrid();
    renderReviewsGrid();
}

function renderCertificatesGrid() {
    const grid = document.getElementById('certificatesGrid');
    if (!grid) return;
    grid.innerHTML = CERTIFICATES_DATA.map((c, i) => `
        <article class="cert-card">
            <div class="cert-preview"><i class="fa-solid ${c.icon}"></i><span>AH-${String(i + 1).padStart(3, '0')}</span></div>
            <span class="cert-tag">${c.tag}</span>
            <h4>${c.t}</h4>
            <p>${c.d}</p>
            <button onclick="showModal('${c.t}', '<p>${c.d}</p><p>هذا مكان مخصص لعرض صورة الشهادة أو ملف PDF عند إضافته للمشروع.</p>')">عرض الشهادة</button>
        </article>
    `).join('');
}

function renderFeaturesProGrid() {
    const grid = document.getElementById('featuresProGrid');
    if (!grid) return;
    grid.innerHTML = FEATURES_PRO_DATA.map(f => `
        <div class="feature-pro-card"><i class="fa-solid ${f.icon}"></i><h4>${f.t}</h4><p>${f.d}</p></div>
    `).join('');
}

function renderReviewsGrid() {
    const grid = document.getElementById('reviewsGrid');
    if (!grid) return;
    grid.innerHTML = REVIEWS_DATA.map(r => `
        <div class="review-card"><div class="stars">★★★★★</div><p>${r.r}</p><b>${r.n}</b></div>
    `).join('');
}

// ═══════════════ FILL SPECIALIZATION SELECTS ═══════════════
function fillAllSpecSelects() {
    const selects = document.querySelectorAll('.spec-select-all');
    selects.forEach(sel => {
        sel.innerHTML = '<option value="">اختر التخصص الدقيق...</option>';
        Object.entries(SPECS_DATA).forEach(([k, v]) => {
            const og = document.createElement('optgroup');
            og.label = k;
            v.branches.forEach(b => {
                const opt = document.createElement('option');
                opt.value = k + ' - ' + b;
                opt.textContent = b;
                og.appendChild(opt);
            });
            sel.appendChild(og);
        });
    });
}

function initLogoFallbacks() {
    document.querySelectorAll('.journal-logo-box img').forEach(img => {
        img.addEventListener('error', () => imgFallback(img, img.alt));
    });
}

function renderJournalPortals() {
    const grid = document.getElementById('regionalJournalsGrid');
    if (grid) {
        grid.innerHTML = JOURNAL_PORTALS.map(p => `
            <a class="portal-card" href="${p.url}" target="_blank" rel="noopener">
                <i class="fa-solid ${p.icon}"></i>
                <b>${p.country}</b>
                <span>${p.name}</span>
                <small>فتح البوابة <i class="fa-solid fa-arrow-up-right-from-square"></i></small>
            </a>
        `).join('');
    }
    const extras = document.getElementById('publicationExtras');
    if (extras) {
        extras.innerHTML = PUBLICATION_EXTRAS.map(x => `<li><i class="fa-solid fa-circle-check"></i>${x}</li>`).join('');
    }
}

// ═══════════════ FORMS ═══════════════
function initAllForms() {
    const forms = [
        { id: 'thesisForm', name: 'خدمة الرسائل الجامعية' },
        { id: 'pubForm', name: 'خدمة النشر العلمي' },
        { id: 'transForm', name: 'خدمة الترجمة الأكاديمية' },
        { id: 'statsForm', name: 'خدمة التحليل الإحصائي' },
        { id: 'plagForm', name: 'خدمة فحص الاقتباس' },
        { id: 'gradForm', name: 'خدمة مشاريع التخرج' }
    ];
    forms.forEach(({ id, name }) => {
        const f = document.getElementById(id);
        if (f) f.addEventListener('submit', function(e) { e.preventDefault(); submitForm(f, name); });
    });
}

function submitForm(form, serviceName) {
    const btn = form.querySelector('.btn-submit');
    const orig = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> جارٍ الإرسال...';

    const data = { service: serviceName, date: new Date().toLocaleString('ar-SA'), id: 'AH-' + Date.now().toString(36).toUpperCase() };
    form.querySelectorAll('input, select, textarea').forEach(el => {
        const label = el.closest('.fg')?.querySelector('label')?.textContent?.replace(/\*/g, '').trim();
        if (label && el.value && el.type !== 'file') data[label] = el.value;
    });

    ST.orders.unshift({
        id: data.id,
        title: data['عنوان البحث'] || data['فكرة المشروع'] || data['عنوان'] || serviceName,
        st: 'in-progress',
        date: data.date,
        service: serviceName
    });
    if (ST.orders.length > 100) ST.orders = ST.orders.slice(0, 100);
    localStorage.setItem('ahu_orders', JSON.stringify(ST.orders));

    sendToEmail(data, serviceName);
    addNotification('success', `تم تقديم ${serviceName} بنجاح! رقم الطلب: ${data.id}`, 'fa-circle-check', '#10B981');

    setTimeout(() => {
        form.reset();
        form.querySelectorAll('.uploaded-files-list').forEach(e => e.remove());
        btn.disabled = false;
        btn.innerHTML = orig;
        loadHomeStats();
        updateAllBadges();
        alert('✅ تم تقديم طلبك بنجاح!\n📋 رقم الطلب: ' + data.id + '\n📧 سيتم إرسال التفاصيل إلى: scottmcnamara316@gmail.com\n📱 تواصل معنا واتساب للمتابعة');
        goTo('orders');
    }, 1200);
}

function sendToEmail(data, serviceName) {
    let body = `طلب خدمة جديد - AcademiaHub\n`;
    body += `══════════════════════\n`;
    body += `📋 رقم الطلب: ${data.id}\n📅 التاريخ: ${data.date}\n📦 الخدمة: ${serviceName}\n`;
    body += `👤 العميل: ${ST.user?.fullName || 'غير محدد'}\n📧 الإيميل: ${ST.user?.email || 'غير محدد'}\n`;
    body += `──────────────────────\n`;
    Object.entries(data).forEach(([k, v]) => { if (!['service', 'date', 'id'].includes(k) && v) body += `• ${k}: ${v}\n`; });
    body += `──────────────────────\n📱 واتساب: https://chat.whatsapp.com/DO6CyC5MwajLizwHNkmLHU?mode=gi_t\n`;
    const subject = encodeURIComponent(`طلب ${serviceName} | ${data.id}`);
    const encodedBody = encodeURIComponent(body);
    try {
        const w = window.open(`mailto:scottmcnamara316@gmail.com?subject=${subject}&body=${encodedBody}`, '_blank', 'width=1,height=1');
        if (w) setTimeout(() => w.close(), 800);
    } catch(e) {}
}

// ═══════════════ FILE UPLOADS ═══════════════
function initFileUploads() {
    document.addEventListener('click', function(e) {
        const fb = e.target.closest('.file-box');
        if (fb) { const inp = fb.querySelector('input[type="file"]'); if (inp) inp.click(); }
    });
    document.addEventListener('change', function(e) {
        if (e.target.type === 'file' && e.target.closest('.file-box')) {
            const fb = e.target.closest('.file-box');
            const old = fb.parentElement.querySelector('.uploaded-files-list');
            if (old) old.remove();
            if (e.target.files.length > 0) {
                const list = document.createElement('div');
                list.className = 'uploaded-files-list';
                list.style.cssText = 'margin-top:8px;display:flex;flex-wrap:wrap;gap:6px';
                Array.from(e.target.files).forEach(f => {
                    const item = document.createElement('span');
                    item.style.cssText = 'background:#ECFDF5;color:#059669;padding:6px 12px;border-radius:20px;font-size:.78rem;font-weight:600';
                    item.innerHTML = `<i class="fa-solid fa-file"></i> ${f.name}`;
                    list.appendChild(item);
                });
                fb.after(list);
            }
        }
    });
}

// ═══════════════ ORDERS PAGE ═══════════════
function loadOrdersPage(filter = 'all') {
    const container = document.getElementById('ordersList');
    if (!container) return;
    let orders = ST.orders;
    if (filter === 'in-progress') orders = orders.filter(o => o.st !== 'completed');
    if (filter === 'completed') orders = orders.filter(o => o.st === 'completed');
    if (orders.length === 0) {
        container.innerHTML = `<div class="empty" style="padding:50px"><i class="fa-solid fa-inbox"></i><p>لا توجد طلبات</p><button class="f-btn" onclick="goTo('thesis')" style="margin-top:12px">طلب خدمة جديدة</button></div>`;
        return;
    }
    container.innerHTML = orders.map(o => `
        <div class="order-row">
            <span class="oid">${o.id}</span>
            <span class="otitle">${o.title}</span>
            <span class="ostatus ${o.st === 'completed' ? 'status-done' : 'status-active'}">${o.st === 'completed' ? 'مكتمل' : 'نشط'}</span>
            <span class="odate">${o.date}</span>
            <button class="f-btn" onclick="goTo('messages')"><i class="fa-solid fa-comment"></i> مراسلة</button>
        </div>
    `).join('');
}

// ═══════════════ MESSAGES PAGE ═══════════════
function loadMessagesPage() {
    const list = document.getElementById('msgList');
    if (!list) return;
    if (ST.orders.length === 0) {
        list.innerHTML = '<div class="empty" style="padding:30px"><i class="fa-solid fa-comment-slash"></i><p>لا توجد محادثات</p></div>';
        return;
    }
    list.innerHTML = ST.orders.map(o => `
        <div style="padding:16px;border-bottom:1px solid var(--g2);cursor:pointer;transition:var(--tr)" onclick="document.getElementById('msgChat').innerHTML='<div style=text-align:center;padding:40px><i class=fa-solid fa-comments style=font-size:3rem;color:var(--p)></i><h4>محادثة الطلب ${o.id}</h4><p>${o.title}</p></div>'">
            <strong>${o.id}</strong>
            <p style="font-size:.8rem;color:var(--g5)">${o.service}</p>
        </div>
    `).join('');
}

// ═══════════════ EXPERTS PAGE ═══════════════
function initExpertsPage() {
    document.getElementById('expFilter').addEventListener('change', () => loadExpertsGrid());
    document.getElementById('expSearch').addEventListener('input', () => loadExpertsGrid());
    loadExpertsGrid();
}

function loadExpertsGrid() {
    const filter = document.getElementById('expFilter').value;
    const search = document.getElementById('expSearch').value.toLowerCase();
    let experts = EXPERTS_DATA;
    if (filter !== 'all') experts = experts.filter(e => e.c === filter);
    if (search) experts = experts.filter(e => e.n.toLowerCase().includes(search) || e.s.toLowerCase().includes(search));
    const grid = document.getElementById('expGrid');
    grid.innerHTML = experts.map(e => {
        const badgeLabels = { diamond: '💎 خبير ماسي', gold: '🥇 خبير ذهبي', silver: '🥈 خبير فضي', bronze: '🥉 خبير برونزي' };
        return `
        <div class="exp-card">
            <span class="exp-badge exp-badge-${e.b}">${badgeLabels[e.b]}</span>
            <div class="exp-avatar"><i class="fa-solid fa-user-tie"></i></div>
            <h4>${e.n}</h4>
            <p class="exp-spec">${e.s}</p>
            <div class="exp-stars">${'★'.repeat(Math.floor(e.r))}${e.r % 1 >= 0.5 ? '½' : ''} ${e.r}</div>
            <p style="font-size:.78rem;color:var(--g5);margin:8px 0">${e.bio}</p>
            <div class="exp-stats"><div><b>${e.p}</b><span>مشروع</span></div><div><b>${e.exp}</b><span>خبرة</span></div><div><b>${Math.round(e.r * 20)}%</b><span>رضا</span></div></div>
            <button class="f-btn" onclick="goTo('thesis')" style="margin-top:8px"><i class="fa-solid fa-paper-plane"></i> طلب خدمة</button>
        </div>`;
    }).join('');
}

// ═══════════════ LIBRARY PAGE ═══════════════
function initLibraryPage() {
    document.querySelectorAll('#libFilters .f-btn').forEach(b => {
        b.addEventListener('click', function() {
            document.querySelectorAll('#libFilters .f-btn').forEach(x => x.classList.remove('active'));
            this.classList.add('active');
            loadLibraryGrid(this.dataset.f);
        });
    });
    loadLibraryGrid();
}

function loadLibraryGrid(filter = 'all') {
    let items = LIBRARY_DATA;
    if (filter !== 'all') items = items.filter(i => i.c === filter);
    document.getElementById('libGrid').innerHTML = items.map(i => `
        <div class="lib-card">
            <div class="lib-icon-box"><i class="fa-solid ${i.icon}"></i></div>
            <span class="lib-format">${i.f}</span>
            <h5>${i.t}</h5>
            <p>${i.d}</p>
            <div style="display:flex;justify-content:space-between;align-items:center">
                <button class="lib-dl-btn" onclick="downloadTemplate('${i.t}')"><i class="fa-solid fa-download"></i> تحميل</button>
                <span style="font-size:.75rem;color:var(--g4)"><i class="fa-solid fa-download"></i> ${i.dw.toLocaleString()}</span>
            </div>
        </div>
    `).join('');
}

function downloadTemplate(title) {
    alert('📥 جارٍ تحميل: ' + title + '\n\nسيتم تحميل الملف مباشرة.');
}

// ═══════════════ FORUM PAGE ═══════════════
function initForumPage() {
    document.querySelector('.btn-new').addEventListener('click', () => {
        alert('📝 سيتم فتح نموذج إنشاء موضوع جديد في النسخة الكاملة.');
    });
    loadForumGrid();
}

function loadForumGrid() {
    document.getElementById('forumGrid').innerHTML = FORUM_DATA.map(f => `
        <div class="forum-card" onclick="alert('📂 ${f.n}\\nسيتم فتح المنتدى في النسخة الكاملة.')">
            <div class="forum-icon-circle" style="background:${f.clr}20;color:${f.clr}"><i class="fa-solid ${f.icon}"></i></div>
            <div class="finfo"><h4>${f.n}</h4><p>${f.d}</p></div>
            <div class="forum-stats"><div><b>${f.t}</b><small>موضوع</small></div><div><b>${f.r}</b><small>رد</small></div></div>
            <i class="fa-solid fa-chevron-left" style="color:var(--g4)"></i>
        </div>
    `).join('');
}

// ═══════════════ MODAL ═══════════════
function initModal() {
    document.querySelector('.modal-x').addEventListener('click', () => document.getElementById('modal').classList.remove('show'));
    document.querySelector('.modal-bg').addEventListener('click', () => document.getElementById('modal').classList.remove('show'));
}

function showModal(title, content) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').innerHTML = content;
    document.getElementById('modal').classList.add('show');
}

// ═══════════════ GLOBALS ═══════════════
window.goTo = goTo;
window.downloadTemplate = downloadTemplate;
window.showModal = showModal;

console.log('✅ AcademiaHub v2.0 - Complete System Ready');
console.log('📧 Email: scottmcnamara316@gmail.com');
console.log('📱 WhatsApp: https://chat.whatsapp.com/DO6CyC5MwajLizwHNkmLHU?mode=gi_t');
console.log('👥 Experts:', EXPERTS_DATA.length);
console.log('📚 Library:', LIBRARY_DATA.length);
console.log('💬 Forum:', FORUM_DATA.length);
