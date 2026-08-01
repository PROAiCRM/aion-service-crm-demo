(()=>{
'use strict';
const orders=[
{id:'12541',model:'iPhone 15 Pro',client:'Иван П.',status:'В работе',price:'24 500 ₽',time:'09:15',kind:'dark'},
{id:'12542',model:'iPhone 14',client:'Анна К.',status:'Диагностика',price:'3 500 ₽',time:'10:20',kind:'gold'},
{id:'12543',model:'Galaxy S23',client:'Сергей Д.',status:'К выдаче',price:'6 490 ₽',time:'11:05',kind:'green'},
{id:'12544',model:'POCO X5',client:'Мария С.',status:'В работе',price:'8 900 ₽',time:'12:30',kind:'dark'}
];
const clients=[
{name:'Иван Петров',initials:'ИП',device:'iPhone 15 Pro',count:'4 заказа',price:'24 500 ₽',status:'Активный заказ'},
{name:'Анна Кузнецова',initials:'АК',device:'iPhone 14',count:'2 заказа',price:'3 500 ₽',status:'Диагностика'},
{name:'Сергей Дмитриев',initials:'СД',device:'Galaxy S23',count:'3 заказа',price:'6 490 ₽',status:'К выдаче'},
{name:'Ольга Морозова',initials:'ОМ',device:'iPhone 13',count:'1 заказ',price:'2 900 ₽',status:'Завершён'}
];
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const normalize=s=>(s||'').toLowerCase().replace(/[№#\s()+-]/g,'');
function phoneClass(kind){return kind==='gold'?' gold':kind==='green'?' green':''}
function renderOrders(list=orders){const host=$('#ordersList');if(!host)return;host.innerHTML=list.map(o=>`<article class="order-row panel" data-order="${o.id}"><div class="device-thumb${phoneClass(o.kind)}"></div><div class="row-main"><strong>№${o.id} · ${o.model}</strong><span>${o.client} · ${o.status}</span></div><div class="row-side"><strong>${o.price}</strong><span>${o.time}</span></div></article>`).join('')||'<div class="empty">Заказы не найдены</div>'}
function renderClients(list=clients){const host=$('#clientsList');if(!host)return;host.innerHTML=list.map(c=>`<article class="client-row panel"><div class="avatar">${c.initials}</div><div class="row-main"><strong>${c.name}</strong><span>${c.device} · ${c.count}</span></div><div class="row-side"><strong>${c.price}</strong><span>${c.status}</span></div></article>`).join('')||'<div class="empty">Клиенты не найдены</div>'}
function filterOrders(q,status='all'){const n=normalize(q);return orders.filter(o=>{const text=normalize(`${o.id} ${o.model} ${o.client} ${o.status}`);const ok=status==='all'||(status==='work'&&o.status==='В работе')||(status==='ready'&&o.status==='К выдаче');return ok&&(!n||text.includes(n))})}
function openPage(name){$$('.page').forEach(p=>p.classList.toggle('active',p.dataset.page===name));$$('.nav').forEach(b=>b.classList.toggle('active',b.dataset.nav===name));scrollTo({top:0,behavior:'instant'})}
function renderSearchResults(q){const host=$('#searchResults'),count=$('#resultCount');if(!host)return;const n=normalize(q);if(!n){if(count)count.textContent='';host.innerHTML='<div class="empty">Введите номер, клиента или устройство</div>';return}const list=filterOrders(q);if(count)count.textContent=list.length?`Найдено: ${list.length}`:'Ничего не найдено';host.innerHTML=list.map(o=>`<button class="result" type="button" data-open-order="${o.id}"><strong>№${o.id} · ${o.model}</strong><span>${o.client} · ${o.status}</span></button>`).join('')||'<div class="empty">Заказ не найден</div>'}
function openSheet(id){const m=$(`#${id}`);if(!m)return;if(id==='searchSheet'){const input=$('#sheetSearchInput');if(input){input.value='';input.placeholder='Например, 12543'}renderSearchResults('')}m.classList.add('open');document.body.style.overflow='hidden';setTimeout(()=>$('input:not([type=file]),textarea',m)?.focus(),120)}
function closeSheets(){$$('.modal-backdrop.open').forEach(m=>m.classList.remove('open'));document.body.style.overflow=''}
function previewFile(input,preview,note){const file=input.files?.[0];if(!file)return;const url=URL.createObjectURL(file);preview.innerHTML=`<img alt="Локальный кадр" src="${url}">`;note.textContent='Кадр получен локально. Распознавание в демо не подключено.'}
function applyLanguage(lang){document.documentElement.lang=lang;$$('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));const map={ru:{home:'Главная',orders:'Заказы',repair:'Ремонт',clients:'Клиенты',more:'Ещё'},en:{home:'Home',orders:'Orders',repair:'Repair',clients:'Clients',more:'More'}}[lang];$$('.nav').forEach(b=>{const s=$('small',b);if(s)s.textContent=map[b.dataset.nav]})}
function setupKeyboard(){const vv=visualViewport;if(!vv)return;const run=()=>document.body.classList.toggle('keyboard',vv.height<innerHeight*.72);vv.addEventListener('resize',run);vv.addEventListener('scroll',run);run()}
document.addEventListener('click',e=>{const nav=e.target.closest('[data-nav]');if(nav){openPage(nav.dataset.nav);return}const act=e.target.closest('[data-action]');if(act){openSheet(act.dataset.action);return}if(e.target.closest('[data-close]')){closeSheets();return}const lang=e.target.closest('[data-lang]');if(lang){applyLanguage(lang.dataset.lang);return}if(e.target.closest('[data-theme-toggle]')){const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;$$('[data-theme-toggle]').forEach(b=>b.setAttribute('aria-label',next==='light'?'Светлая тема':'Тёмная тема'));return}const openOrder=e.target.closest('[data-open-order]');if(openOrder){closeSheets();openPage('repair');return}if(e.target.classList.contains('modal-backdrop'))closeSheets()});
$('#ordersSearch')?.addEventListener('input',e=>renderOrders(filterOrders(e.target.value,$('.filter.active')?.dataset.filter||'all')));
$$('.filter').forEach(b=>b.addEventListener('click',()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderOrders(filterOrders($('#ordersSearch')?.value||'',b.dataset.filter))}));
$('#clientsSearch')?.addEventListener('input',e=>{const n=normalize(e.target.value);renderClients(clients.filter(c=>!n||normalize(`${c.name} ${c.device} ${c.status}`).includes(n)))});
$('#sheetSearchInput')?.addEventListener('input',e=>renderSearchResults(e.target.value));
$('#qrFile')?.addEventListener('change',e=>previewFile(e.target,$('#qrPreview'),$('#qrNote')));
$('#photoFile')?.addEventListener('change',e=>previewFile(e.target,$('#photoPreview'),$('#photoNote')));
renderOrders();renderClients();renderSearchResults('');setupKeyboard();applyLanguage('ru');
})();