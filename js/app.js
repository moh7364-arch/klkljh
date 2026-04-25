/* ══════════════════════════════════════
   AcademiaHub - Complete App Logic
   ══════════════════════════════════════ */

// ═══════ البيانات ═══════
const SPECS = {
    'الطب والعلوم الصحية': { img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300', branches:['طب بشري','طب أسنان','صيدلة','تمريض','صحة عامة','علاج طبيعي'] },
    'الهندسة': { img:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300', branches:['مدنية','كهربائية','ميكانيكية','برمجيات','ذكاء اصطناعي','أمن سيبراني'] },
    'العلوم': { img:'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300', branches:['فيزياء','كيمياء','أحياء','رياضيات','إحصاء'] },
    'الاجتماعية': { img:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300', branches:['علم اجتماع','علم نفس','علوم سياسية','إعلام'] },
    'الإنسانية': { img:'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=300', branches:['تاريخ','فلسفة','أدب عربي','لغويات','دراسات إسلامية'] },
    'الإدارة': { img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300', branches:['إدارة أعمال','تسويق','محاسبة','تمويل','اقتصاد'] },
    'القانون': { img:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300', branches:['قانون عام','قانون خاص','قانون جنائي','قانون تجاري'] }
};

const EXPERTS = [
    {n:'د. سارة الأحمدي',s:'الذكاء الاصطناعي',c:'الهندسة',r:4.9,p:48,b:'diamond'},
    {n:'د. عبدالرحمن القحطاني',s:'الطب الباطني',c:'الطب',r:4.9,p:62,b:'diamond'},
    {n:'د. محمد القحطاني',s:'الإحصاء',c:'العلوم',r:4.8,p:58,b:'diamond'},
    {n:'د. عمر الحربي',s:'هندسة مدنية',c:'الهندسة',r:4.8,p:41,b:'gold'},
    {n:'د. نورة الشمري',s:'طب أسنان',c:'الطب',r:4.8,p:38,b:'gold'},
    {n:'د. خالد العسيري',s:'اللغويات',c:'الإنسانية',r:4.6,p:40,b:'gold'},
    {n:'د. سلمى الحربي',s:'علم نفس',c:'الاجتماعية',r:4.8,p:42,b:'diamond'},
    {n:'د. سلطان المالكي',s:'إدارة أعمال',c:'الإدارة',r:4.7,p:44,b:'gold'},
    {n:'د. فاطمة الزهراني',s:'قانون جنائي',c:'القانون',r:4.6,p:20,b:'silver'},
    {n:'د. محمد العمري',s:'أمن سيبراني',c:'الهندسة',r:4.8,p:52,b:'diamond'},
    {n:'د. ليلى العتيبي',s:'أدب عربي',c:'الإنسانية',r:4.7,p:25,b:'gold'},
    {n:'د. نورة القحطاني',s:'اقتصاد',c:'الإدارة',r:4.8,p:38,b:'diamond'}
];

const LIBRARY = [
    {t:'قالب خطة بحث Proposal',c:'proposal',f:'Word',d:'نموذج احترافي لخطة البحث'},
    {t:'قالب رسالة ماجستير كاملة',c:'thesis',f:'Word',d:'قالب شامل مع شرح الفصول'},
    {t:'قالب رسالة دكتوراه',c:'thesis',f:'Word',d:'قالب متكامل للدكتوراه'},
    {t:'قالب ورقة علمية LaTeX',c:'paper',f:'LaTeX',d:'متوافق مع مجلات Scopus'},
    {t:'قالب Cover Letter',c:'cover',f:'Word',d:'رسالة تقديم للمحرر'},
    {t:'قالب الرد على المحكمين',c:'paper',f:'Word',d:'نموذج رد علمي'},
    {t:'عرض تقديمي للمناقشة',c:'cover',f:'PowerPoint',d:'عرض احترافي'},
    {t:'قالب استبيان بحثي',c:'paper',f:'Word',d:'نموذج استبيان جاهز'}
];

const FORUM = [
    {n:'نقاشات البحث العلمي',d:'مناهج وأدوات وتحديات',t:245,r:1890,cl:'#3B82F6',ic:'fa-comments'},
    {n:'تجارب النشر Scopus',d:'شارك تجربتك',t:178,r:1340,cl:'#10B981',ic:'fa-newspaper'},
    {n:'استفسارات إحصائية',d:'SPSS و R و AMOS',t:156,r:980,cl:'#F59E0B',ic:'fa-chart-pie'},
    {n:'فرص ومؤتمرات',d:'منح ومؤتمرات',t:89,r:445,cl:'#8B5CF6',ic:'fa-bullhorn'},
    {n:'التخصصات الطبية',d:'أبحاث طبية',t:67,r:320,cl:'#EF4444',ic:'fa-stethoscope'},
    {n:'الهندسة والتقنية',d:'ذكاء اصطناعي',t:92,r:510,cl:'#06B6D4',ic:'fa-microchip'},
    {n:'قصص نجاح',d:'ألهم الآخرين',t:45,r:280,cl:'#EC4899',ic:'fa-trophy'}
];

// ═══════ State ═══════
let ST = {
    user: null,
    page: 'home',
    orders: [],
    notifs: [],
    sidebarOpen: true
};

// ═══════ Init ═══════
document.addEventListener('DOMContentLoaded',()=>{
    // Auth page
    if(document.querySelector('.auth-body')){
        initAuth();
        return;
    }
    // Dashboard
    checkUser();
    loadUser();
    initSidebar();
    initNav();
    initTopbar();
    fillSpecsSelects();
    loadSpecsGrid();
    loadHome();
    loadOrders();
    loadExperts();
    loadLibrary();
    loadForum();
    initForms();
    initModal();
});

// ═══════ Auth ═══════
function initAuth(){
    document.querySelectorAll('.auth-tab').forEach(t=>{
        t.addEventListener('click',function(){
            document.querySelectorAll('.auth-tab').forEach(x=>x.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.auth-form').forEach(f=>f.classList.remove('active'));
            document.getElementById(this.dataset.tab+'Form').classList.add('active');
        });
    });
    document.getElementById('loginForm').addEventListener('submit',function(e){
        e.preventDefault();
        const em=document.getElementById('loginEmail').value.trim();
        const pw=document.getElementById('loginPassword').value;
        if(!em||!pw) return showAuthMsg('املأ جميع الحقول','error');
        const user={email:em,name:em.split('@')[0],fullName:em.split('@')[0],firstName:em.split('@')[0],isLoggedIn:true,academicLevel:'researcher'};
        localStorage.setItem('ahu',JSON.stringify(user));
        showAuthMsg('تم الدخول بنجاح','success');
        setTimeout(()=>location.href='dashboard.html',600);
    });
    document.getElementById('registerForm').addEventListener('submit',function(e){
        e.preventDefault();
        const fn=document.getElementById('regFirstName').value.trim();
        const ln=document.getElementById('regLastName').value.trim();
        const em=document.getElementById('regEmail').value.trim();
        const lv=document.getElementById('regLevel').value;
        const sp=document.getElementById('regSpecialization').value;
        const pw=document.getElementById('regPassword').value;
        const cp=document.getElementById('regConfirm').value;
        if(!fn||!ln||!em||!lv||!sp||!pw) return showAuthMsg('املأ جميع الحقول','error');
        if(pw!==cp) return showAuthMsg('كلمة المرور غير متطابقة','error');
        if(pw.length<8) return showAuthMsg('كلمة المرور 8 أحرف على الأقل','error');
        const user={firstName:fn,lastName:ln,fullName:fn+' '+ln,name:fn+' '+ln,email:em,academicLevel:lv,specialization:sp,isLoggedIn:true};
        localStorage.setItem('ahu',JSON.stringify(user));
        showAuthMsg('تم إنشاء الحساب','success');
        setTimeout(()=>location.href='dashboard.html',600);
    });
}
function showAuthMsg(txt,type){
    const el=document.getElementById('authMsg');
    el.textContent=txt;
    el.className='auth-msg '+type;
}

// ═══════ Check User ═══════
function checkUser(){
    const u=localStorage.getItem('ahu');
    if(!u){location.href='index.html';return}
    try{ST.user=JSON.parse(u);if(!ST.user.isLoggedIn)location.href='index.html'}catch(e){location.href='index.html'}
    ST.orders=JSON.parse(localStorage.getItem('ahu_orders')||'[]');
    ST.notifs=JSON.parse(localStorage.getItem('ahu_notifs')||'[]');
}

// ═══════ Load User ═══════
function loadUser(){
    const u=ST.user;
    document.getElementById('sideName').textContent=u.name||'باحث';
    document.getElementById('greetName').textContent=u.firstName||u.name||'باحث';
    if(u.fullName){const p=u.fullName.split(' ');document.getElementById('sideAvatar').textContent=p.map(x=>x[0]).join('').substring(0,2);document.getElementById('topAvatar').textContent=p.map(x=>x[0]).join('').substring(0,2)}
    const rm={bachelor:'بكالوريوس',master:'ماجستير',phd:'دكتوراه',researcher:'باحث'};
    document.getElementById('sideRole').textContent=rm[u.academicLevel]||'باحث';
}

// ═══════ Sidebar ═══════
function initSidebar(){
    document.getElementById('sideToggle').addEventListener('click',()=>{
        document.getElementById('sidebar').classList.toggle('closed');
        document.getElementById('mainContent').classList.toggle('full');
    });
    document.getElementById('menuBtn').addEventListener('click',()=>{
        document.getElementById('sidebar').classList.toggle('mobile-open');
    });
}

// ═══════ Navigation ═══════
function initNav(){
    document.querySelectorAll('.side-link[data-page]').forEach(l=>{
        l.addEventListener('click',function(e){
            e.preventDefault();
            goTo(this.dataset.page);
            document.getElementById('sidebar').classList.remove('mobile-open');
        });
    });
}
function goTo(page){
    ST.page=page;
    document.querySelectorAll('.side-link').forEach(l=>l.classList.remove('active'));
    const link=document.querySelector(`.side-link[data-page="${page}"]`);
    if(link)link.classList.add('active');
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const el=document.getElementById('page-'+page);
    if(el)el.classList.add('active');
    document.getElementById('pageContainer').scrollTop=0;
    if(page==='orders')loadOrders();
    if(page==='experts')loadExperts();
    if(page==='library')loadLibrary();
    if(page==='forum')loadForum();
    if(page==='home')loadHome();
    if(page==='messages')loadMessages();
}

// ═══════ Topbar ═══════
function initTopbar(){
    document.getElementById('notifBell').addEventListener('click',function(e){
        e.stopPropagation();
        updateNotifs();
        document.getElementById('notifDrop').classList.toggle('show');
    });
    document.addEventListener('click',()=>document.getElementById('notifDrop').classList.remove('show'));
    document.getElementById('logoutBtn').addEventListener('click',()=>{
        if(confirm('تسجيل الخروج؟')){localStorage.removeItem('ahu');location.href='index.html'}
    });
}

// ═══════ Fill Specs ═══════
function fillSpecsSelects(){
    document.querySelectorAll('.spec-select').forEach(sel=>{
        if(sel.options.length>1)return;
        Object.entries(SPECS).forEach(([k,v])=>{
            const og=document.createElement('optgroup');
            og.label=k;
            v.branches.forEach(b=>og.innerHTML+=`<option>${b}</option>`);
            sel.appendChild(og);
        });
    });
}

// ═══════ Load Specs Grid ═══════
function loadSpecsGrid(){
    const g=document.getElementById('specsGrid');
    if(!g)return;
    g.innerHTML=Object.entries(SPECS).map(([k,v])=>`
        <div class="spec-card"><img src="${v.img}" alt="${k}"><div class="spec-info"><i class="fa-solid fa-folder"></i><div><h5>${k}</h5><span>${v.branches.slice(0,3).join('، ')}...</span></div></div></div>
    `).join('');
}

// ═══════ Load Home ═══════
function loadHome(){
    const active=ST.orders.filter(o=>o.st!=='completed');
    const completed=ST.orders.filter(o=>o.st==='completed');
    document.getElementById('activeNum').textContent=active.length;
    document.getElementById('completedNum').textContent=completed.length;
    const ac=document.querySelector('.active-orders-cards');
    if(ac)ac.innerHTML=active.length===0?'<div class="empty"><i class="fa-solid fa-clipboard-list"></i><p>لا توجد طلبات نشطة</p></div>':'';
}

// ═══════ Init All Forms ═══════
function initForms(){
    const forms=['thesisForm','pubForm','transForm','statsForm','plagForm','gradForm'];
    const names=['الرسائل الجامعية','النشر العلمي','الترجمة الأكاديمية','التحليل الإحصائي','فحص الاقتباس','مشاريع التخرج'];
    forms.forEach((id,i)=>{
        const f=document.getElementById(id);
        if(f)f.addEventListener('submit',function(e){e.preventDefault();submitForm(f,names[i])});
    });
}

function submitForm(form,name){
    const d={service:name,date:new Date().toLocaleString('ar-SA'),id:'AH-'+Date.now().toString(36).toUpperCase()};
    form.querySelectorAll('input,select,textarea').forEach(el=>{
        const lb=el.closest('.fg')?.querySelector('label')?.textContent?.replace('*','').trim();
        if(lb&&el.value)d[lb]=el.value;
    });
    // Save locally
    ST.orders.unshift({id:d.id,title:d['العنوان']||d['فكرة المشروع']||name,st:'in-progress',date:d.date,service:name});
    localStorage.setItem('ahu_orders',JSON.stringify(ST.orders));
    // Email
    sendEmail(d);
    // Notif
    addNotif('success','تم تقديم طلب '+name+' بنجاح','fa-check-circle','#10B981');
    // Reset
    form.reset();
    form.querySelectorAll('.uploaded-files-list').forEach(e=>e.remove());
    // Update
    loadHome();
    updateBadges();
    // Alert & redirect
    alert('✅ تم تقديم طلبك بنجاح!\nرقم الطلب: '+d.id+'\nسنرسل التفاصيل لإيميل: scottmcnamara316@gmail.com');
    goTo('orders');
}

function sendEmail(d){
    let body='طلب خدمة: '+d.service+'\nالرقم: '+d.id+'\nالتاريخ: '+d.date+'\n---\n';
    Object.entries(d).forEach(([k,v])=>{if(!['service','date','id'].includes(k)&&v)body+=k+': '+v+'\n'});
    // Mailto
    try{window.open('mailto:scottmcnamara316@gmail.com?subject=طلب '+d.service+' | '+d.id+'&body='+encodeURIComponent(body),'_blank','width=1,height=1')}catch(e){}
    // WhatsApp notification
    body+='\n---\nرابط الواتساب: https://chat.whatsapp.com/DO6CyC5MwajLizwHNkmLHU?mode=gi_t';
}

// ═══════ Orders ═══════
function loadOrders(filter='all'){
    const c=document.getElementById('ordersList');
    if(!c)return;
    let o=ST.orders;
    if(filter!=='all')o=o.filter(x=>x.st===filter);
    if(o.length===0){c.innerHTML='<div class="empty"><i class="fa-solid fa-inbox"></i><p>لا توجد طلبات</p></div>';return}
    c.innerHTML=o.map(o=>`
        <div class="order-row">
            <span class="oid">${o.id}</span>
            <span class="otitle">${o.title}</span>
            <span class="ostatus ${o.st==='completed'?'status-done':'status-active'}">${o.st==='completed'?'مكتمل':'نشط'}</span>
            <span>${o.date}</span>
            <button class="f-btn" onclick="goTo('messages')">مراسلة</button>
        </div>
    `).join('');
    // Filters
    document.querySelectorAll('#orderFilters .f-btn').forEach(b=>{
        b.addEventListener('click',function(){
            document.querySelectorAll('#orderFilters .f-btn').forEach(x=>x.classList.remove('active'));
            this.classList.add('active');
            loadOrders(this.dataset.f);
        });
    });
}

// ═══════ Messages ═══════
function loadMessages(){
    const l=document.getElementById('msgList');
    if(!l)return;
    if(ST.orders.length===0){l.innerHTML='<div class="empty"><i class="fa-solid fa-comment-slash"></i><p>لا محادثات</p></div>';return}
    l.innerHTML=ST.orders.map(o=>`
        <div class="order-row" style="cursor:pointer" onclick="document.getElementById('msgChat').innerHTML='<div style=padding:20px;text-align:center><i class=fa-solid fa-comments style=font-size:2rem;color:var(--p)></i><p>محادثة: ${o.id}</p></div>'">
            <strong>${o.id}</strong><span>${o.service}</span>
        </div>
    `).join('');
}

// ═══════ Experts ═══════
function loadExperts(filter='all',search=''){
    const g=document.getElementById('expGrid');
    if(!g)return;
    let e=EXPERTS;
    if(filter!=='all')e=e.filter(x=>x.c===filter);
    if(search)e=e.filter(x=>x.n.includes(search)||x.s.includes(search));
    g.innerHTML=e.map(x=>`
        <div class="exp-card">
            <div class="exp-avatar"><i class="fa-solid fa-user-tie"></i></div>
            <h4>${x.n}</h4>
            <p class="exp-spec">${x.s}</p>
            <div class="exp-stars">${'★'.repeat(Math.floor(x.r))}${x.r%1>=0.5?'½':''} ${x.r}</div>
            <div class="exp-stats"><span>${x.p} مشروع</span><span>${Math.round(x.r*20)}% رضا</span></div>
            <button class="f-btn" onclick="goTo('thesis')">طلب خدمة</button>
        </div>
    `).join('');
    document.getElementById('expFilter').addEventListener('change',function(){loadExperts(this.value,document.getElementById('expSearch').value)});
    document.getElementById('expSearch').addEventListener('input',function(){loadExperts(document.getElementById('expFilter').value,this.value)});
}

// ═══════ Library ═══════
function loadLibrary(filter='all'){
    const g=document.getElementById('libGrid');
    if(!g)return;
    let l=LIBRARY;
    if(filter!=='all')l=l.filter(x=>x.c===filter);
    g.innerHTML=l.map(x=>`
        <div class="lib-card">
            <div class="lib-icon"><i class="fa-solid fa-file"></i></div>
            <span style="font-size:.7rem;background:var(--g1);padding:2px 8px;border-radius:10px">${x.f}</span>
            <h5>${x.t}</h5><p>${x.d}</p>
            <button class="f-btn" onclick="alert('تحميل: ${x.t}')"><i class="fa-solid fa-download"></i> تحميل</button>
        </div>
    `).join('');
    document.querySelectorAll('#libFilters .f-btn').forEach(b=>{
        b.addEventListener('click',function(){
            document.querySelectorAll('#libFilters .f-btn').forEach(x=>x.classList.remove('active'));
            this.classList.add('active');
            loadLibrary(this.dataset.f);
        });
    });
}

// ═══════ Forum ═══════
function loadForum(){
    const g=document.getElementById('forumGrid');
    if(!g)return;
    g.innerHTML=FORUM.map(x=>`
        <div class="forum-card">
            <div class="forum-icon" style="background:${x.cl}20;color:${x.cl}"><i class="fa-solid ${x.ic}"></i></div>
            <div class="forum-info"><h4>${x.n}</h4><p>${x.d}</p></div>
            <div><b>${x.t}</b><small> موضوع</small></div>
            <i class="fa-solid fa-chevron-left" style="color:var(--g4)"></i>
        </div>
    `).join('');
}

// ═══════ Notifications ═══════
function addNotif(type,msg,icon,color){
    ST.notifs.unshift({id:Date.now(),type,msg,icon,color,time:'الآن',read:false});
    localStorage.setItem('ahu_notifs',JSON.stringify(ST.notifs));
    updateNotifs();
    updateBadges();
}
function updateNotifs(){
    const b=document.getElementById('notifDrop').querySelector('.notif-body');
    if(ST.notifs.length===0){b.innerHTML='<p style="text-align:center;color:#94A3B8;padding:20px">لا توجد إشعارات</p>';return}
    b.innerHTML=ST.notifs.slice(0,5).map(n=>`<div style="padding:12px 16px;border-bottom:1px solid var(--g2)"><i class="fa-solid ${n.icon}" style="color:${n.color}"></i> ${n.msg}<br><small>${n.time}</small></div>`).join('');
    document.querySelector('.notif-head span').textContent=ST.notifs.filter(n=>!n.read).length;
}

// ═══════ Badges ═══════
function updateBadges(){
    const active=ST.orders.filter(o=>o.st!=='completed').length;
    const b=document.getElementById('ordBadge');
    if(b){b.textContent=active;b.style.display=active>0?'inline':'none'}
}

// ═══════ Modal ═══════
function initModal(){
    document.querySelector('.modal-x').addEventListener('click',()=>document.getElementById('modal').classList.remove('show'));
    document.querySelector('.modal-bg').addEventListener('click',()=>document.getElementById('modal').classList.remove('show'));
}
function showModal(title,content){
    document.getElementById('modalTitle').textContent=title;
    document.getElementById('modalBody').innerHTML=content;
    document.getElementById('modal').classList.add('show');
}

// ═══════ File Upload ═══════
document.addEventListener('click',function(e){
    const fb=e.target.closest('.file-box');
    if(fb){const inp=fb.querySelector('input[type="file"]');if(inp)inp.click()}
});
document.addEventListener('change',function(e){
    if(e.target.closest('.file-box')&&e.target.type==='file'){
        const fb=e.target.closest('.file-box');
        const fl=document.createElement('div');
        fl.style.cssText='margin-top:8px;font-size:.8rem;color:var(--s)';
        fl.textContent='✅ '+Array.from(e.target.files).map(f=>f.name).join('، ');
        fb.after(fl);
    }
});

// ═══════ Global ═══════
window.goTo=goTo;
window.showModal=showModal;
