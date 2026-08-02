(()=>{
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const iconDefs=`<svg width="0" height="0" aria-hidden="true"><defs>
<linearGradient id="blueTile" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#4b8fff"/><stop offset=".48" stop-color="#153b83"/><stop offset="1" stop-color="#09152a"/></linearGradient>
<linearGradient id="metal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset=".25" stop-color="#8fb5e8"/><stop offset=".58" stop-color="#24385e"/><stop offset=".82" stop-color="#a8c3e8"/><stop offset="1" stop-color="#101a2d"/></linearGradient>
<linearGradient id="tabMetal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f5fbff"/><stop offset=".4" stop-color="#8fb7e8"/><stop offset="1" stop-color="#263c61"/></linearGradient>
</defs></svg>`;
document.body.insertAdjacentHTML('afterbegin',iconDefs);
const svg={
logo:`<svg class="brand-logo" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="logoG" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7fbff"/><stop offset=".25" stop-color="#70b8ff"/><stop offset=".58" stop-color="#224bb3"/><stop offset="1" stop-color="#a545ff"/></linearGradient></defs><path fill="url(#logoG)" d="M32 3 57 53 39 42 32 61 25 42 7 53 32 3Z"/><path fill="#071020" d="M32 15 42 41 32 34 22 41 32 15Z"/></svg>`,
moon:`<svg viewBox="0 0 24 24"><path d="M16.8 15.5A7.2 7.2 0 0 1 8.5 7.2a7.5 7.5 0 1 0 8.3 8.3Z"/></svg>`,
gear:`<svg viewBox="0 0 24 24"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5L9 6.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5 11a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4L19 13a7 7 0 0 0 .1-1Z"/></svg>`,
stat:(path)=>`<svg viewBox="0 0 24 24"><path d="${path}"/></svg>`,
action:{
new:`<svg viewBox="0 0 100 84"><rect class="icon-tile icon-glow" x="15" y="8" width="70" height="70" rx="14"/><path d="M50 27v32M34 43h32" stroke="#fff" stroke-width="8" stroke-linecap="round"/></svg>`,
search:`<svg viewBox="0 0 100 84"><circle class="icon-metal" cx="43" cy="35" r="23"/><circle class="icon-dark" cx="43" cy="35" r="14"/><path class="icon-metal" d="m58 51 24 22-10 9-23-23Z"/></svg>`,
deliver:`<svg viewBox="0 0 100 84"><rect class="icon-metal" x="43" y="16" width="30" height="50" rx="8"/><rect class="icon-dark" x="48" y="21" width="20" height="36" rx="4"/><path class="icon-metal" d="M7 57c11-10 19-12 29-8l13 6-7 15-15-4-15 8Z"/><path class="icon-metal" d="M93 57c-11-10-19-12-29-8l-13 6 7 15 15-4 15 8Z"/></svg>`,
price:`<svg viewBox="0 0 100 84"><path class="icon-metal" d="M18 35 50 15l32 20v32H18Z"/><path class="icon-dark" d="m18 35 32 18 32-18-32-18Z"/><path class="icon-metal" d="M35 48h30v20H35Z"/><text x="50" y="66" text-anchor="middle" font-size="22" fill="#fff" font-weight="700">₽</text></svg>`,
qr:`<svg viewBox="0 0 100 84"><rect class="icon-tile" x="18" y="7" width="64" height="70" rx="12"/><g fill="#dcecff"><rect x="28" y="18" width="16" height="16"/><rect x="56" y="18" width="16" height="16"/><rect x="28" y="47" width="16" height="16"/><rect x="53" y="45" width="8" height="8"/><rect x="64" y="56" width="8" height="8"/><rect x="53" y="58" width="7" height="7"/></g><g fill="#153a76"><rect x="32" y="22" width="8" height="8"/><rect x="60" y="22" width="8" height="8"/><rect x="32" y="51" width="8" height="8"/></g></svg>`,
photo:`<svg viewBox="0 0 100 84"><path class="icon-metal" d="M17 27h18l6-10h18l7 10h17v43H17Z"/><circle class="icon-dark" cx="50" cy="49" r="16"/><circle class="icon-metal" cx="50" cy="49" r="9"/><rect class="icon-metal" x="28" y="21" width="12" height="7" rx="2"/></svg>`
},
tab:{home:'<path d="M4 12 12 5l8 7v8h-6v-5h-4v5H4Z"/>',orders:'<path d="M6 3h12v18H6zM8 7h8M8 11h8M8 15h8"/>',repair:'<path d="M15 4a5 5 0 0 0-6 6L3 16l5 5 6-6a5 5 0 0 0 6-6l-4 3-3-3Z"/>',clients:'<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21c0-4 3-7 6-7s6 3 6 7Zm11 0c0-3 2-6 5-6s4 3 4 6Z"/>',more:'<circle cx="7" cy="7" r="2.2"/><circle cx="17" cy="7" r="2.2"/><circle cx="7" cy="17" r="2.2"/><circle cx="17" cy="17" r="2.2"/>'}
};
const state={theme:'dark',lang:'ru',active:'home'};
const data={
stats:[
{label:'Новые',value:'12',icon:'M7 3h8l4 4v14H7zM15 3v5h5M10 12h6M10 16h6'},
{label:'В работе',value:'7',icon:'M14 6a4 4 0 0 0-5 5L3 17l4 4 6-6a4 4 0 0 0 5-5l-3 2-3-3Z'},
{label:'К выдаче',value:'2',kind:'success',icon:'m4 8 8-5 8 5-8 5Zm0 0v9l8 4 8-4V8M12 13v8'},
{label:'Выручка',value:'1 245 000 ₽',kind:'revenue',icon:'M4 7h16v12H4zM7 4h10v3M8 11h8M8 15h5'}],
actions:[['new','Новый ремонт','primary'],['search','Найти заказ',''],['deliver','Выдать',''],['price','Прайс и поставщики',''],['qr','QR',''],['photo','Фото','']],
orders:[
{no:'№12541',client:'Иванов С.',time:'09:15',status:'В РАБОТЕ',device:''},
{no:'№12542',client:'Петров А.',time:'10:20',status:'ДИАГНОСТИКА',device:'light',statusClass:'diagnostic'},
{no:'№12543',client:'Сидоров М.',time:'11:05',status:'К ВЫДАЧЕ',device:'green',statusClass:'ready'},
{no:'№12544',client:'Васильев Д.',time:'12:30',status:'В РАБОТЕ',device:''}],
tabs:[['home','Главная'],['orders','Заказы'],['repair','Ремонт'],['clients','Клиенты'],['more','Ещё']]
};
function renderHeader(){
 $('#header').innerHTML=`<div class="brand">${svg.logo}<div class="brand-copy"><strong>AION</strong><small>SERVICE CRM</small></div></div><div class="header-controls"><button class="language-toggle" type="button" data-action="language">RU / EN</button><button class="header-button" type="button" data-action="theme" aria-label="Тема">${svg.moon}</button><button class="header-button" type="button" data-action="settings" aria-label="Настройки">${svg.gear}</button></div>`;
}
function renderOverview(){
 $('#overview').innerHTML=`<article class="overview-card"><h2>Рабочая зона</h2><p>7 в работе · 2 к выдаче · <span class="danger">1 просрочен</span></p><div class="work-grid-decor"></div><div class="work-chart"><i></i><i></i><i></i><i></i></div></article><article class="overview-card eve-card"><div class="eve-orb"></div><div class="eve-copy"><h2>EvE</h2><small>Следующий шаг:</small><p>Свяжитесь с клиентом по заказу №12543</p></div></article>`;
}
function renderStats(){
 $('#stats').innerHTML=data.stats.map(s=>`<article class="stat-card ${s.kind||''}"><div class="stat-icon">${svg.stat(s.icon)}</div><div class="stat-label">${s.label}</div><div class="stat-value">${s.value}</div></article>`).join('');
}
function renderActions(){
 $('#actions').innerHTML=data.actions.map(([key,label,kind])=>`<button class="action-card ${kind}" type="button" data-action="${key}"><div class="action-icon">${svg.action[key]}</div><div class="action-label">${label}</div></button>`).join('');
}
function renderQueue(){
 $('#queue').innerHTML=data.orders.map((o,i)=>`<article class="order-card" data-order="${i}"><div class="device ${o.device}"></div><div class="order-number">${o.no}</div><div class="order-client">${o.client}</div><div class="order-time">◷ ${o.time}</div><div class="order-status ${o.statusClass||''}">${o.status}</div></article>`).join('');
}
function renderTabs(){
 $('#tabbar').innerHTML=data.tabs.map(([key,label])=>`<button class="tab-button ${key===state.active?'active':''}" type="button" data-tab="${key}"><svg viewBox="0 0 24 24" aria-hidden="true">${svg.tab[key]}</svg><span>${label}</span></button>`).join('');
}
function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),1500)}
function showContext(card,x,y){const menu=$('#contextMenu');menu.hidden=false;menu.style.left=`${Math.min(x,innerWidth-150)}px`;menu.style.top=`${Math.min(y,innerHeight-70)}px`;menu.dataset.order=card.dataset.order}
function closeContext(){ $('#contextMenu').hidden=true }
function bind(){
 document.addEventListener('click',e=>{
  const action=e.target.closest('[data-action]')?.dataset.action;
  const tab=e.target.closest('[data-tab]')?.dataset.tab;
  if(tab){state.active=tab;renderTabs();toast(tab==='home'?'Главная':`Раздел «${e.target.closest('[data-tab]').innerText.trim()}» — следующий экран`);return}
  if(action==='theme'){state.theme=state.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=state.theme;return}
  if(action==='language'){toast('RU / EN');return}
  if(action==='share'){navigator.share?.({title:'AION Service CRM',text:'Рабочая очередь'}).catch(()=>{})||toast('Поделиться');return}
  if(action==='view-all'){toast('Открываем все заказы');return}
  if(action==='edit-order'){toast('Редактирование заказа');closeContext();return}
  if(action){toast(action==='new'?'Новый ремонт':action==='search'?'Найти заказ':action==='deliver'?'Выдать устройство':action==='price'?'Прайс и поставщики':action==='qr'?'QR-сканер':'Камера');return}
  if(!e.target.closest('#contextMenu'))closeContext();
 });
 $$('.order-card').forEach(card=>{
  let timer;
  const start=e=>{const p=e.touches?.[0]||e;timer=setTimeout(()=>showContext(card,p.clientX,p.clientY),550)};
  const end=()=>clearTimeout(timer);
  card.addEventListener('touchstart',start,{passive:true});card.addEventListener('touchend',end);card.addEventListener('touchmove',end);card.addEventListener('mousedown',start);card.addEventListener('mouseup',end);card.addEventListener('mouseleave',end);
 });
}
function init(){renderHeader();renderOverview();renderStats();renderActions();renderQueue();renderTabs();bind()}
init();
})();
