function renderDrawer(){
 drawerScroll.innerHTML='';
 menu.forEach(m=>{
   const b=document.createElement('button');b.className='drawerBtn '+(state.pinned.includes(m[0])?'pinned':'');b.dataset.menu=m[0];b.setAttribute('aria-label',lang==='ru'?m[2]:m[3]);b.innerHTML=ico(m[1]);drawerScroll.appendChild(b);
 })
}
function renderShortcuts(){
 const z=(pageNode&&pageNode.querySelector('#shortcuts'))||q('#shortcuts');if(!z)return;z.innerHTML='';
 state.pinned.slice(0,8).forEach(id=>{
   const m=menu.find(x=>x[0]===id);const b=document.createElement('button');b.className='shortcut';b.dataset.short=id;b.innerHTML=ico(m[1]);z.appendChild(b)
 });
 for(let i=state.pinned.length;i<8;i++){const e=document.createElement('span');e.className='shortcut empty';z.appendChild(e)}
}
function menuTarget(id){const m=menu.find(x=>x[0]===id);return m?m[4]:'home'}
function afterRender(s){
 renderShortcuts();bindFilters();
 if(s==='signature')setupSignature()
}
function bindFilters(){
 const configs=[['clientSearch','#clientList','.row'],['serviceSearch','#serviceList','.row'],['partSearch','#partList','.row'],['orderSearch','#orderList','.row']];
 configs.forEach(([id,host,sel])=>{const inp=q('#'+id),h=q(host);if(!inp||!h)return;inp.addEventListener('input',()=>{const v=inp.value.toLowerCase();qa(sel,h).forEach(r=>r.style.display=r.textContent.toLowerCase().includes(v)?'grid':'none')})})
}
function resetContext(seed={}){
 state.context={client:'',device:'',service:'',part:'',supplier:'',comment:'',price:'',...seed}
}
function chooseContext(key){
 const presets={client:'Иванов Иван Иванович',device:'iPhone 13',service:'Замена дисплея',part:'Дисплей iPhone 13',supplier:'FixParts',comment:'Разбит дисплей',price:'5 000 ₽'};
 state.context[key]=state.context[key]?'':presets[key];navigate('draft',{},true)
}
function setupSignature(){
 const c=q('#sigCanvas');if(!c)return;const box=q('#sig');const hint=q('#sigHint'),ctx=c.getContext('2d');let drawing=false,last=null;
 const resize=()=>{const r=box.getBoundingClientRect(),d=devicePixelRatio||1;c.width=r.width*d;c.height=r.height*d;c.style.width=r.width+'px';c.style.height=r.height+'px';ctx.scale(d,d);ctx.lineWidth=2.1;ctx.lineCap='round';ctx.strokeStyle=getComputedStyle(app).getPropertyValue('--fg')}
 resize();
 const pos=e=>{const r=c.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top}};
 c.addEventListener('pointerdown',e=>{drawing=true;last=pos(e);c.setPointerCapture?.(e.pointerId);hint.style.display='none'});
 c.addEventListener('pointermove',e=>{if(!drawing)return;const p=pos(e);ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(p.x,p.y);ctx.stroke();last=p});
 c.addEventListener('pointerup',()=>drawing=false);c.addEventListener('pointercancel',()=>drawing=false);
}
function rerender(){navigate(current,params,true)}
function handleAction(a,el){
 if(a==='font-minus'){scale=Math.max(.88,+(scale-.06).toFixed(2));document.documentElement.style.setProperty('--s',scale);toastMsg('A−');return}
 if(a==='font-plus'){scale=Math.min(1.18,+(scale+.06).toFixed(2));document.documentElement.style.setProperty('--s',scale);toastMsg('A+');return}
 if(a==='language'){lang=lang==='ru'?'en':'ru';renderDrawer();rerender();toastMsg(lang.toUpperCase());return}
 if(a==='theme'){app.classList.toggle('light');toastMsg(app.classList.contains('light')?'Светлая тема':'Тёмная тема');return}
 if(a==='login'){logged=!logged;updateShell();toastMsg(logged?'Вход выполнен':'Выход выполнен');return}
 if(a==='demo'){toastMsg('Действие работает в демонстрационном режиме');return}
 if(a==='new-empty'){resetContext();navigate('draft');return}
 if(a==='new-client-repair'){resetContext({client:'Иванов Иван Иванович'});navigate('draft');return}
 if(a==='new-device-repair'){resetContext({client:'Иванов Иван Иванович',device:'iPhone 13'});navigate('draft');return}
 if(a==='service-new'||a==='service-add'){state.context.service=state.context.service||'Замена дисплея';state.context.price=state.context.price||'5 000 ₽';navigate('draft');return}
 if(a==='part-new'||a==='part-add'){state.context.part=state.context.part||'Дисплей iPhone 13';state.context.price=state.context.price||'3 200 ₽';navigate('draft');return}
 if(a.startsWith('select-client:')){const i=+a.split(':')[1];state.context.client=clients[i][0];navigate('client');return}
 if(a.startsWith('select-device:')){const i=+a.split(':')[1];state.context.device=devices[i][0];navigate('device');return}
 if(a.startsWith('select-service:')){const i=+a.split(':')[1];state.context.service=services[i][0];state.context.price=services[i][2];navigate('service');return}
 if(a.startsWith('select-part:')){const i=+a.split(':')[1];state.context.part=parts[i][0]+' '+parts[i][1];state.context.price=parts[i][3];navigate('part');return}
 if(a.startsWith('choose-supplier:')){const i=+a.split(':')[1];state.context.supplier=suppliers[i][0];toastMsg('Поставщик выбран');navigate('draft');return}
 if(a.startsWith('context:')){chooseContext(a.split(':')[1]);return}
 if(a==='manual-add'){state.context.part=q('#manualName')?.value||'Ручная деталь';state.context.price=q('#manualPrice')?.value||'';state.context.supplier=q('#manualSupplier')?.value||'';state.context.comment=q('#manualComment')?.value||'';navigate('draft');return}
 if(a==='scan'){toastMsg('Распознавание…');setTimeout(()=>navigate('recognition'),350);return}
 if(a==='recognition-confirm'){resetContext({client:'Иванов Иван Иванович',device:'iPhone 13'});navigate('draft');return}
 if(a==='verify-confirm'){resetContext({client:q('#vClient')?.value||'Иванов И.И.',device:q('#vDevice')?.value||'iPhone 13'});navigate('draft');return}
 if(a==='verify-edit'){toastMsg('Поля доступны для редактирования');return}
 if(a==='voice'){const m=q('#micBtn'),t=q('#micText');m?.classList.add('listening');if(t)t.textContent='Слушаю…';setTimeout(()=>{m?.classList.remove('listening');if(t)t.textContent='«iPhone 13 Иванов»';setTimeout(()=>navigate('search_results'),350)},900);return}
 if(a==='do-search'){navigate('search_results');return}
 if(a==='search-new'){resetContext({client:'Иванов Иван Иванович',device:'iPhone 13'});navigate('draft');return}
 if(a==='correction-save'){toastMsg('Корректировка сохранена');navigate('search_results');return}
 if(a==='manual-find'){navigate('order');return}
 if(a==='create-repair'){navigate('diagnostics');return}
 if(a==='create-order'){navigate('order');return}
 if(a.startsWith('diag:')){const i=+a.split(':')[1];state.diagnostics[i]=!state.diagnostics[i];rerender();return}
 if(a==='diag-add'){state.diagnostics.push(false);rerender();return}
 if(a==='cost-add'){openModal(`${hero('Добавить','Выберите источник')}<div class="btnRow">${btn('Услуга','', 'services')}${btn('Деталь','', 'stock')}</div>`);return}
 if(a==='approve'){state.approval='Согласовано';navigate('signature');return}
 if(a==='decline'){state.approval='Отклонено';toastMsg('Согласование отклонено');navigate('draft');return}
 if(a==='sig-clear'){const c=q('#sigCanvas'),ctx=c?.getContext('2d');if(c&&ctx)ctx.clearRect(0,0,c.width,c.height);const h=q('#sigHint');if(h)h.style.display='grid';return}
 if(a==='sig-confirm'){navigate('order');return}
 if(a==='accept-intake'){navigate('work');return}
 if(a==='work-save'){navigate('order_part');return}
 if(a==='order-part'){navigate('ready_qc');return}
 if(a==='to-qc'){navigate('qc');return}
 if(a.startsWith('qc-check:')){const i=+a.split(':')[1];state.checks[i]=!state.checks[i];rerender();return}
 if(a==='qc-pass'){if(state.qcMandatory && Object.keys(state.checks).filter(k=>state.checks[k]).length<8){toastMsg('Отметьте все пункты QC');return}state.qcPassed=true;navigate('payment');return}
 if(a==='qc-fail'){state.qcPassed=false;toastMsg('QC не пройден → возврат в ремонт');navigate('intake');return}
 if(a==='pay'){if(state.qcMandatory&&!state.qcPassed){toastMsg('Оплата заблокирована: сначала QC');return}const v=q('#payMethod')?.value;if(!v){toastMsg('Выберите способ оплаты');return}state.paymentMethod=v;state.paymentOk=true;toastMsg('Прототип: касса подтвердила оплату');setTimeout(()=>navigate('issue'),350);return}
 if(a==='toggle-debt'){state.debtAllowed=!state.debtAllowed;rerender();toastMsg(state.debtAllowed?'Долг разрешён как исключение':'Разрешение долга отменено');return}
 if(a==='issue-client'){toastMsg('Выдача зарегистрирована в прототипе');setTimeout(()=>navigate('documents'),500);return}
 if(a==='issue-blocked'){toastMsg('Выдача заблокирована: нужны QC + оплата / разрешённый долг');return}
 if(a==='call'){openModal(`${hero('Позвонить клиенту','Иванов Иван · +7 (900) 123-45-67')}${btn('Закрыть','modal-close','','primary')}`);return}
 if(a==='message'){openModal(`${hero('Написать клиенту','Выберите канал связи')}${btn('SMS','message-demo')}${btn('Мессенджер','message-demo')}${btn('Закрыть','modal-close')}`);return}
 if(a==='message-demo'){toastMsg('Сообщение — demo');modal.classList.remove('open');syncShade();return}
 if(a==='modal-close'){modal.classList.remove('open');syncShade();return}
 if(a==='order-new'){resetContext({client:'Иванов Иван Иванович',device:'iPhone 13'});navigate('draft');return}
 if(a==='toggle-qc'){state.qcMandatory=!state.qcMandatory;rerender();return}
}
