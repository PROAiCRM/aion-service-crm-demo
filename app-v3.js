const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const store={get(k,f){try{return localStorage.getItem(k)||f}catch{return f}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
const orders=[
  {id:'#A-10234',tag:'В работе',client:'Иван Петров',phone:'+7 900 123-45-67',device:'iPhone 14 Pro',meta:'256 GB, Deep Purple',problem:'Разбит экран',problemMeta:'Нет изображения',amount:'24 500 ₽',stage:1},
  {id:'#A-10233',tag:'Диагностика',client:'Анна Кузнецова',phone:'+7 912 444-09-12',device:'Samsung S23',meta:'128 GB, Phantom Black',problem:'Не заряжается',problemMeta:'Проверка разъёма и АКБ',amount:'3 500 ₽',stage:2},
  {id:'#A-10232',tag:'Готов',client:'Сергей Дмитриев',phone:'+7 922 018-22-44',device:'iPhone 11',meta:'128 GB, Black',problem:'Замена аккумулятора',problemMeta:'ОТК пройден',amount:'6 490 ₽',stage:6}
];
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>el.classList.remove('show'),1800)}
function updateClock(){const d=new Date();$('#clock').textContent=d.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})}
updateClock();setInterval(updateClock,30000);

function setTheme(theme){document.documentElement.dataset.theme=theme;store.set('aion.demo.theme',theme);document.querySelector('meta[name="theme-color"]').setAttribute('content',theme==='light'?'#f5f8ff':'#030713');$('#themeIcon').innerHTML=theme==='light'?'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>':'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>'}
setTheme(store.get('aion.demo.theme','dark'));
$('#themeBtn').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';setTheme(next);toast(next==='light'?'Светлая тема включена':'Тёмная тема включена')});

function showView(name){$$('.view').forEach(v=>v.classList.toggle('active',v.dataset.view===name));$$('.nav[data-view-target]').forEach(n=>n.classList.toggle('active',n.dataset.viewTarget===name));window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});store.set('aion.demo.view',name)}
$$('[data-view-target]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.viewTarget)));
$$('[data-nav]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.nav)));
showView(store.get('aion.demo.view','home'));

$$('[data-toast]').forEach(btn=>btn.addEventListener('click',()=>toast(btn.dataset.toast)));
$('#quickBtn').addEventListener('click',()=>toast('Быстрый доступ: новый ремонт, поиск заказа и выдача'));
$('#bellBtn').addEventListener('click',()=>toast('3 уведомления: готовность, оплата и просроченная задача'));
$('#profileBtn').addEventListener('click',()=>toast('Профиль Максима — демонстрационный режим'));
$('#eveBtn').addEventListener('click',()=>{toast('EvE подготовила следующий шаг: новый ремонт');openSheet()});

function selectOrder(index){const o=orders[index];$$('.order-card').forEach((card,i)=>card.classList.toggle('active',i===index));$('#currentId').textContent=o.id;$('#currentTag').textContent=o.tag;$('#clientName').textContent=o.client;$('#clientPhone').textContent=o.phone;$('#deviceName').textContent=o.device;$('#deviceMeta').textContent=o.meta;$('#problemName').textContent=o.problem;$('#problemMeta').textContent=o.problemMeta;$('#amount').textContent=o.amount;$$('#stages .stage').forEach((stage,i)=>stage.classList.toggle('active',i===Math.min(o.stage-1,5)));$('#continueBtn').textContent=o.stage===6?'Открыть выдачу ›':`Продолжить шаг ${o.stage} ›`}
$$('.order-card').forEach((card,index)=>card.addEventListener('click',()=>{selectOrder(index);toast(`Открыт заказ ${orders[index].id}`)}));
$$('[data-order-open]').forEach(btn=>btn.addEventListener('click',()=>{const index=Number(btn.dataset.orderOpen);selectOrder(index);showView('home');setTimeout(()=>$('#currentOrder').scrollIntoView({behavior:'smooth',block:'start'}),180)}));

const qr=$('#qr');for(let i=0;i<121;i++){const cell=document.createElement('i');if((i*7+i%5)%3===0)cell.style.background='#fff';qr.appendChild(cell)}

const sheet=$('#sheet'),host=$('#stepHost'),progress=$$('#intakeProgress i');let step=0;
const steps=[
()=>`<div class="field"><label>Телефон клиента</label><input value="+7 900 123-45-67" inputmode="tel"></div><div class="suggestion"><small>ПОДГОТОВЛЕНО AION</small><b>Иван Петров</b><p>Найден существующий клиент. Проверьте совпадение перед подтверждением.</p></div>`,
()=>`<div class="field"><label>Устройство</label><select><option>iPhone 14 Pro · 256 GB · Deep Purple</option><option>Другая модель</option></select></div><div class="suggestion"><small>ПОДГОТОВЛЕНО AION</small><b>Последнее устройство клиента</b><p>Совпадение по истории — 92%. Устройство подтверждает сотрудник.</p></div>`,
()=>`<div class="field"><label>Проблема</label><select><option>Разбит экран / нет изображения</option><option>Не заряжается</option><option>Быстро разряжается</option></select></div><div class="field"><label>Комментарий</label><textarea>После падения отсутствует изображение.</textarea></div>`,
()=>`<div class="field"><label>Работа</label><input value="Замена дисплейного модуля"></div><div class="field"><label>Цена</label><input value="24 500 ₽"></div><div class="suggestion"><small>ПРЕДЛОЖЕНИЕ, НЕ ПОДТВЕРЖДЕНО</small><b>Гарантия 90 дней</b><p>Сотрудник подтверждает итоговые условия.</p></div>`,
()=>`<div class="field"><label>Согласие клиента</label><textarea readonly>Клиент подтверждает устройство, состояние, работы, цену и гарантию. DEMO-CONSENT-v1.</textarea></div><div class="field"><label>Подпись</label><input value="Иван Петров"></div>`,
()=>`<div class="receipt"><div class="ok">✓</div><h3>Демонстрационный заказ создан</h3><p>Реальный сервер, защищённый QR и юридическое хранение подписи пока не подключены.</p></div>`
];
function renderStep(){host.innerHTML=steps[step]();progress.forEach((item,i)=>item.classList.toggle('done',i<=step));$('#backStep').disabled=step===0;$('#nextStep').textContent=step===5?'Закрыть':'Подтвердить и продолжить'}
function openSheet(){step=0;renderStep();sheet.classList.add('open');sheet.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeSheet(){sheet.classList.remove('open');sheet.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$$('.open-intake').forEach(btn=>btn.addEventListener('click',openSheet));$('#closeSheet').addEventListener('click',closeSheet);sheet.addEventListener('click',event=>{if(event.target===sheet)closeSheet()});$('#backStep').addEventListener('click',()=>{if(step>0){step--;renderStep()}});$('#nextStep').addEventListener('click',()=>{if(step<5){step++;renderStep()}else{closeSheet();toast('Демо-сценарий завершён')}});renderStep();
