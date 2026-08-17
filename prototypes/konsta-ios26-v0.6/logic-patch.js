// AION Service CRM v0.6 — preserved QC-disabled issue gate.
screens.issue=()=>{
 const qcOk=!state.qcMandatory||state.qcPassed;
 const ok=qcOk&&(state.paymentOk||state.debtAllowed);
 const qcLabel=state.qcMandatory?(state.qcPassed?'✓ QC пройден':'× QC не пройден'):'QC отключён настройкой';
 return `${section('Условия для выдачи',
 `<div class="chips"><span class="chip ${qcOk?'ok':'bad'}">${qcLabel}</span><span class="chip ${state.paymentOk?'ok':'warn'}">${state.paymentOk?'✓ Оплата OK':'Оплата не подтверждена'}</span>${state.debtAllowed?'<span class="chip warn">Разрешён долг</span>':''}</div>`)}
${btn('Выдать клиенту',ok?'issue-client':'issue-blocked','',ok?'primary':'')}
${!state.paymentOk?btn(state.debtAllowed?'Отменить разрешение долга':'Разрешить долг (исключение)','toggle-debt','',''):''}
${btn('Документы','', 'documents')}`;
};

// UI correction is deferred until app5/app6 have defined the existing UI functions/listeners.
setTimeout(()=>{

  const railItems=[
    ['clients','i-user','Клиенты','Clients','clients'],
    ['devices','i-phone','Устройства','Devices','devices'],
    ['services','i-tag','Услуги / прайс','Services / price','services'],
    ['stock','i-box','Детали / склад','Parts / stock','stock'],
    ['suppliers','i-cart','Поставщики','Suppliers','suppliers'],
    ['documents','i-doc','Документы','Documents','documents'],
    ['finance','i-money','Финансы','Finance','finance'],
    ['reports','i-chart','Отчёты','Reports','reports'],
    ['history','i-history','История','History','history'],
    ['settings','i-gear','Настройки','Settings','settings']
  ];
  menu.splice(0,menu.length,...railItems);
  state.pinned=['services','finance','reports'];

  const currentRoot=(screen)=>({
    client:'clients',client_history:'clients',client_docs:'clients',warranty:'clients',warranty_case:'clients',
    device:'devices',service:'services',part:'stock',manual_part:'stock',order_part:'suppliers',
    receipt:'documents',act:'documents',warranty_doc:'documents',qr_status:'documents',repair_history:'documents'
  }[screen]||screen);

  screens.home=()=>`
  <div class="homeWork">
    <section class="homeTasks">
      <div class="homeTasksHead"><b>${lang==='ru'?'Текущие задачи':'Current tasks'}</b></div>
      <div class="homeTasksList">
        <button class="homeTask" data-go="client">
          <span class="homeTaskIcon">${ico('i-clipboard')}</span><span class="homeTaskText"><b>Заказ №000125</b><small>${lang==='ru'?'Позвонить клиенту · Иванов И.':'Call client · Ivanov I.'}</small></span><span class="taskStatus action">${lang==='ru'?'Действие':'Action'}</span><time>09:00</time>
        </button>
        <button class="homeTask" data-go="part">
          <span class="homeTaskIcon">${ico('i-box')}</span><span class="homeTaskText"><b>Заказ №000125</b><small>${lang==='ru'?'Проверить поступление детали':'Check part arrival'}</small></span><span class="taskStatus block">${lang==='ru'?'Деталь':'Part'}</span><time>10:00</time>
        </button>
        <button class="homeTask" data-go="payment">
          <span class="homeTaskIcon">${ico('i-money')}</span><span class="homeTaskText"><b>Заказ №000123</b><small>${lang==='ru'?'Принять оплату · Петров П.':'Accept payment · Petrov P.'}</small></span><span class="taskStatus pay">${lang==='ru'?'Оплата':'Pay'}</span><time>11:00</time>
        </button>
        <button class="homeTask" data-go="qc">
          <span class="homeTaskIcon">${ico('i-shield')}</span><span class="homeTaskText"><b>Заказ №000124</b><small>${lang==='ru'?'Провести QC проверку':'Run QC check'}</small></span><span class="taskStatus qc">QC</span><time>13:00</time>
        </button>
        <button class="homeTask fifthTask" data-go="issue">
          <span class="homeTaskIcon">${ico('i-check')}</span><span class="homeTaskText"><b>Заказ №000122</b><small>${lang==='ru'?'Выдать клиенту · Сидоров С.':'Issue to client · Sidorov S.'}</small></span><span class="taskStatus">${lang==='ru'?'Выдача':'Issue'}</span><time>15:00</time>
        </button>
      </div>
      <button class="allTasks" data-go="tasks">${lang==='ru'?'Все задачи →':'All tasks →'}</button>
    </section>

    <div class="homeActions">
      <button class="homeAction primary" data-act="new-empty"><span class="homeActionIcon">${ico('i-plus')}</span><span class="homeActionText"><b>${lang==='ru'?'Новый ремонт':'New repair'}</b><small>${lang==='ru'?'Создать':'Create'}</small></span></button>
      <button class="homeAction secondary" data-go="stock"><span class="homeActionIcon">${ico('i-box')}</span><span class="homeActionText"><b>${lang==='ru'?'Склад / поставщики':'Stock / suppliers'}</b><small>${lang==='ru'?'Остатки':'Inventory'}</small></span></button>
    </div>

    <div class="homeShortcutsZone" id="freeZone" data-empty="false"><div class="shortcuts" id="shortcuts"></div></div>
  </div>`;

  renderDrawer=function(){
    drawerScroll.innerHTML='';
    const root=currentRoot(current);
    menu.forEach(m=>{
      const b=document.createElement('button');
      b.className='drawerBtn'+(m[4]===root?' current':'')+(state.pinned.includes(m[0])?' pinned':'');
      b.dataset.menu=m[0];
      b.setAttribute('aria-label',lang==='ru'?m[2]:m[3]);
      b.innerHTML=ico(m[1]);
      drawerScroll.appendChild(b);
    });
    requestAnimationFrame(updateRailScroll);
  };

  renderShortcuts=function(){
    const z=(pageNode&&pageNode.querySelector('#shortcuts'))||q('#shortcuts');
    const zone=(pageNode&&pageNode.querySelector('#freeZone'))||q('#freeZone');
    if(!z||!zone)return;
    z.innerHTML='';
    zone.dataset.empty=state.pinned.length?'false':'true';
    state.pinned.slice(0,8).forEach(id=>{
      const m=menu.find(x=>x[0]===id);if(!m)return;
      const b=document.createElement('button');
      b.className='shortcut';b.dataset.short=id;b.setAttribute('aria-label',lang==='ru'?m[2]:m[3]);b.title=lang==='ru'?m[2]:m[3];b.innerHTML=ico(m[1]);z.appendChild(b);
    });
  };

  menuTarget=function(id){const m=menu.find(x=>x[0]===id);return m?m[4]:'home'};

  const baseUpdateShell=updateShell;
  updateShell=function(){baseUpdateShell();renderDrawer();};

  let scrollTrack=drawer.querySelector('.railScrollTrack');
  if(!scrollTrack){
    scrollTrack=document.createElement('div');scrollTrack.className='railScrollTrack';
    scrollTrack.innerHTML='<i class="railScrollThumb" id="railScrollThumb"></i>';drawer.appendChild(scrollTrack);
  }
  function updateRailScroll(){
    const thumb=q('#railScrollThumb');if(!thumb)return;
    const ch=drawerScroll.clientHeight,sh=drawerScroll.scrollHeight;
    const trackH=Math.max(0,ch-20);
    if(!ch||sh<=ch+1){scrollTrack.style.opacity='.28';thumb.style.height='26px';thumb.style.transform='translateY(0)';return;}
    scrollTrack.style.opacity='1';
    const h=Math.max(26,trackH*(ch/sh));
    const maxTop=Math.max(0,trackH-h);
    const top=maxTop*(drawerScroll.scrollTop/(sh-ch));
    thumb.style.height=h+'px';thumb.style.transform='translateY('+top+'px)';
  }
  drawerScroll.addEventListener('scroll',updateRailScroll,{passive:true});

  function syncUiClasses(){
    app.classList.toggle('settings-open',rail.classList.contains('open'));
    app.classList.toggle('rail-open',drawer.classList.contains('open'));
    updateRailScroll();
  }
  new MutationObserver(syncUiClasses).observe(rail,{attributes:true,attributeFilter:['class']});
  new MutationObserver(syncUiClasses).observe(drawer,{attributes:true,attributeFilter:['class']});

  drawer.addEventListener('pointerup',()=>setTimeout(()=>{renderShortcuts();renderDrawer();syncUiClasses()},0));
  stage.addEventListener('pointerup',e=>{if(e.target.closest('.shortcut'))setTimeout(()=>{renderShortcuts();renderDrawer()},170)});

  function applyReviewState(){
    const r=new URLSearchParams(location.search).get('review');
    if(!r)return;
    closeLayers();
    if(r==='rail'){drawer.classList.add('open');syncShade();}
    if(r==='settings'){rail.classList.add('open');syncShade();}
    if(r==='tray'){sheet.classList.add('open');sheetOpen=true;syncShade();}
    syncUiClasses();
  }

  navigate('home',{},true);
  renderDrawer();renderShortcuts();syncUiClasses();
  setTimeout(applyReviewState,220);

},0);
