const app=q('#app'),stage=q('#stage'),title=q('#title'),leftBtn=q('#leftBtn'),settingsBtn=q('#settingsBtn'),
drawer=q('#drawer'),drawerScroll=q('#drawerScroll'),rail=q('#settingsRail'),sheet=q('#bottomSheet'),
shade=q('#shade'),modal=q('#modal'),toast=q('#toast'),ghost=q('#dragGhost');

let current='home', nav=[], params={}, lang='ru', scale=1, logged=false, pageNode=null, sheetOpen=false;
let state={
  pinned:['clients','tasks','stock','suppliers','services','repair'],
  context:{client:'',device:'',service:'',part:'',supplier:'',comment:'',price:''},
  qcPassed:false,paymentOk:false,debtAllowed:false,qcMandatory:true,approval:'',paymentMethod:'',
  checks:{}, diagnostics:[true,true,true]
};

const clients=[
 ['Иванов Иван Иванович','+7 (900) 123-45-67'],['Петрова Анна Сергеевна','+7 (901) 234-56-78'],
 ['Сидоров Алексей Петрович','+7 (902) 345-67-89'],['Кузнецова Мария Игоревна','+7 (903) 456-78-90'],['Попов Денис Андреевич','+7 (904) 567-89-01']
];
const devices=[
 ['iPhone 13','IMEI 356789012345678'],['Samsung Galaxy S21','IMEI 356789012345679'],
 ['MacBook Air M1','SN FVFF1234Q6L7'],['Apple Watch Series 6','SN GY6D1234Q1RP'],['iPad 10.2 (9 gen)','SN H9GJ1234Q1GH']
];
const services=[
 ['Замена дисплея','iPhone 13','5 000 ₽','60 мин'],['Замена батареи','iPhone 13','3 500 ₽','45 мин'],
 ['Замена разъёма USB-C','iPhone 13','2 800 ₽','60 мин'],['Замена стекла','iPhone 13','2 500 ₽','90 мин'],
 ['Прошивка','iPhone','1 500 ₽','45 мин'],['Диагностика полная','—','1 000 ₽','30 мин']
];
const parts=[
 ['Дисплей','iPhone 13','12 шт','3 200 ₽'],['Аккумулятор','iPhone 13','7 шт','1 600 ₽'],
 ['Разъём USB-C','iPhone 13','15 шт','450 ₽'],['Задняя крышка','iPhone 13','5 шт','800 ₽'],
 ['Динамик','iPhone 13','3 шт','650 ₽'],['Клей проклейки','Универс.','20 шт','150 ₽']
];
const suppliers=[
 ['FixParts','3 050 ₽','15 шт','1–2 дн.'],['MobileStock','3 300 ₽','8 шт','2 дн.'],
 ['GSM Market','3 450 ₽','20 шт','1–3 дн.'],['PhoneHub','3 600 ₽','3 шт','3 дн.']
];
const orders=[
 ['№ 000125','Иванов И.','iPhone 13','В работе','12 500 ₽'],['№ 000124','Петров П.','MacBook Air','QC','25 900 ₽'],
 ['№ 000123','Сидоров С.','Xiaomi Redmi','Ожидает оплату','8 900 ₽'],['№ 000122','Смирнова А.','iPad 10','Выдача','15 400 ₽'],['№ 000121','Кузнецов К.','Samsung S23','Закрыт','9 800 ₽']
];
const menu=[
 ['clients','i-user','Клиенты','Clients','clients'],
 ['tasks','i-clipboard','Заказы / задачи','Orders / tasks','tasks'],
 ['stock','i-box','Склад / детали','Stock / parts','stock'],
 ['suppliers','i-cart','Покупки / поставщики','Purchases / suppliers','suppliers'],
 ['services','i-tag','Услуги / прайс','Services / price','services'],
 ['repair','i-wrench','Ремонт','Repair','draft'],
 ['reports','i-chart','Отчёты','Reports','reports'],
 ['settings','i-gear','Настройки','Settings','settings'],
 ['help','i-help','Помощь','Help','help']
];

const tt={
 ru:{home:'Главная',back:'Назад',theme:'Тема',login:'Вход',logout:'Выход',photo:'Фото / QR',search:'Поиск / Голос'},
 en:{home:'Home',back:'Back',theme:'Theme',login:'Sign in',logout:'Sign out',photo:'Photo / QR',search:'Search / Voice'}
};
const T=k=>tt[lang][k]||k;
function q(s,r=document){return r.querySelector(s)}
function qa(s,r=document){return [...r.querySelectorAll(s)]}
function ico(id,cls=''){return `<svg class="ico ${cls}"><use href="#${id}"/></svg>`}
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function toastMsg(s){toast.textContent=s;toast.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>toast.classList.remove('show'),1400)}
function closeLayers(){drawer.classList.remove('open');rail.classList.remove('open');sheet.classList.remove('open');sheetOpen=false;modal.classList.remove('open');syncShade()}
function syncShade(){shade.classList.toggle('on',drawer.classList.contains('open')||sheet.classList.contains('open')||modal.classList.contains('open'))}
function openModal(html){modal.innerHTML=html;modal.classList.add('open');syncShade()}
function info(label,val,cls=''){return `<div class="info"><label>${label}</label><b class="${cls}">${val}</b></div>`}
function btn(label,act='',go='',cls=''){return `<button class="btn ${cls}" ${act?`data-act="${act}"`:''} ${go?`data-go="${go}"`:''}>${label}</button>`}
function row(icon,title,sub='',go='',right='',act=''){return `<button class="row glass" ${go?`data-go="${go}"`:''} ${act?`data-act="${act}"`:''}><span class="iconWell">${ico(icon)}</span><span class="rtext"><span class="rtitle">${title}</span>${sub?`<span class="rsub">${sub}</span>`:''}</span><span class="${right?'right':'chev'}">${right||ico('i-chevron')}</span></button>`}
function hero(h,p=''){return `<section class="card glass hero"><h2>${h}</h2>${p?`<p>${p}</p>`:''}</section>`}
function section(h,body){return `<div class="sectionTitle">${h}</div><section class="card glass">${body}</section>`}
function searchBox(ph,id='searchInput'){return `<div class="searchBox">${ico('i-search')}<input class="input" id="${id}" placeholder="${ph}"></div>`}
function contextBtn(key,label){
 const v=state.context[key];return `<div class="info contextRow" data-act="context:${key}"><label>${label}</label><b class="${v?'known':'unknown'}">${v?esc(v):'неизвестно'}</b></div>`
}
function doc(title,body){return `<section class="docPaper"><h3>${title}</h3><div class="line"></div>${body}</section>`}
function screenTitle(s){
 const m={home:T('home'),tasks:'Задачи',notifications:'Уведомления',clients:'Клиенты',client:'Клиент',devices:'Устройства',device:'Устройство',
 client_history:'История',client_docs:'Документы',doc_group:'Документы',warranty:'Гарантия',warranty_case:'Гарантия',
 services:'Услуги / Прайс',service:'Услуга',stock:'Детали / Склад',part:'Деталь',suppliers:'Поставщики',manual_part:'Ручной ввод',
 capture:'Фото / QR',recognition:'Результат',verify:'Проверка данных',search:'Поиск / Голос',search_results:'Результаты',
 manual_correction:'Корректировка',manual_number:'Ручной ввод номера',draft:'Новый ремонт',diagnostics:'Диагностика',cost:'Стоимость / услуги',
 approval:'Согласование',signature:'Подпись',orders:'Заказы',order:'Заказ № 000125',intake:'Приёмка',work:'Работа',
 order_part:'Запчасть',ready_qc:'Готово к QC',qc:'QC / Проверка',payment:'Оплата',issue:'Выдача',documents:'Документы',
 receipt:'Квитанция',act:'Акт работ',warranty_doc:'Гарантийный талон',qr_status:'QR-статус',repair_history:'История ремонта',
 finance:'Финансы / касса',reports:'Отчёты',history:'История',settings:'Настройки',help:'Помощь'};
 return m[s]||s
}
function leftIcon(){
 if(current==='home'||['clients','tasks','orders','stock','services','suppliers','reports','settings','help'].includes(current))
   return `<span class="hamb"><i></i><i></i><i></i></span>`;
 return ico('i-back','lg')
}
function updateShell(){
 title.textContent=screenTitle(current);
 leftBtn.innerHTML=leftIcon();
 leftBtn.setAttribute('aria-label',current==='home'?'Меню':(nav.length?'Назад':'Меню'));
 q('#themeText').textContent=T('theme');q('#loginText').textContent=logged?T('logout'):T('login');
 q('#photoLabel').textContent=T('photo');q('#searchLabel').textContent=T('search')
}
function navigate(to,p={},back=false){ const fh=q('#firstHint'); if(fh && to!=='home') fh.style.display='none';
 if(!screens[to]){toastMsg('Экран не найден');return}
 closeLayers();
 if(!back && current!==to) nav.push({screen:current,params});
 const old=pageNode;
 current=to;params=p||{};
 const n=document.createElement('section');n.className='page '+(back?'enterB':'enterF');n.innerHTML=`<div class="wrap">${screens[to]()}</div>`;
 stage.appendChild(n);pageNode=n;updateShell();
 requestAnimationFrame(()=>{n.classList.remove(back?'enterB':'enterF');if(old){old.classList.add(back?'exitB':'exitF');setTimeout(()=>old.remove(),300)}})
 setTimeout(()=>afterRender(to),20)
}
function goBack(){
 if(!nav.length){drawer.classList.add('open');syncShade();return}
 const h=nav.pop();navigate(h.screen,h.params,true)
}
leftBtn.addEventListener('click',()=>{const fh=q('#firstHint');if(fh)fh.style.display='none'; if(current==='home'||['clients','tasks','orders','stock','services','suppliers','reports','settings','help'].includes(current)){drawer.classList.toggle('open');rail.classList.remove('open');sheet.classList.remove('open');syncShade()} else goBack()})
settingsBtn.addEventListener('click',()=>{const fh=q('#firstHint');if(fh)fh.style.display='none';const o=!rail.classList.contains('open');drawer.classList.remove('open');sheet.classList.remove('open');modal.classList.remove('open');rail.classList.toggle('open',o);syncShade()})
shade.addEventListener('click',closeLayers);
