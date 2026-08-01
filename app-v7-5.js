(()=>{
  const txt=e=>(e?.textContent||'').replace(/\s+/g,' ').trim();
  const norm=s=>(s||'').toLowerCase().replace(/[^a-zа-яё0-9]+/gi,'');

  function dialogFor(labels){
    const exact=new Set(labels);
    const h=[...document.querySelectorAll('h1,h2,h3,[role="heading"],strong,b')]
      .find(e=>exact.has(txt(e)));
    if(!h) return null;
    let n=h;
    for(let i=0;n&&n!==document.body&&i<9;i++,n=n.parentElement){
      const r=n.getBoundingClientRect();
      const s=getComputedStyle(n);
      const dialog=n.matches('[role="dialog"],[aria-modal="true"],[class*="sheet"],[class*="modal"],[class*="drawer"]');
      const floating=['fixed','absolute'].includes(s.position)&&r.width>innerWidth*.76&&r.height>180;
      if(dialog||floating) return n;
    }
    return h.closest('section,article,div')||null;
  }

  function wideCard(marker,sheet){
    let n=marker;
    const sw=sheet.getBoundingClientRect().width;
    for(let i=0;n&&n!==sheet&&i<7;i++,n=n.parentElement){
      const r=n.getBoundingClientRect();
      if(r.width>sw*.72&&r.height>56&&r.height<190) return n;
    }
    return marker.closest('button,a,article,li,[role="button"]');
  }

  function setupSearch(){
    const sheet=dialogFor(['Найти заказ','Find order']);
    if(!sheet) return;
    sheet.classList.add('v75-sheet','v75-search-sheet');
    const input=sheet.querySelector('input[type="search"],input:not([type="hidden"])');
    if(!input) return;
    input.classList.add('v75-search-input');

    const markers=[...sheet.querySelectorAll('strong,b,h3,h4,span,div')]
      .filter(e=>/№?1254[1-4]|#?A-10/.test(txt(e))&&txt(e).length<90);
    const cards=[...new Set(markers.map(m=>wideCard(m,sheet)).filter(Boolean))]
      .filter(c=>/№?1254[1-4]|#?A-10/.test(txt(c)));
    cards.forEach(c=>c.classList.add('v75-search-result'));

    let counter=sheet.querySelector('.v75-search-counter');
    if(!counter){
      counter=document.createElement('div');
      counter.className='v75-search-counter';
      input.insertAdjacentElement('afterend',counter);
    }
    let empty=sheet.querySelector('.v75-search-empty');
    if(!empty){
      empty=document.createElement('div');
      empty.className='v75-search-empty';
      empty.textContent='Заказ не найден';
      counter.insertAdjacentElement('afterend',empty);
    }

    const apply=()=>{
      const q=norm(input.value);
      let visible=0;
      cards.forEach(card=>{
        const show=!q||norm(txt(card)).includes(q);
        card.hidden=!show;
        card.style.setProperty('display',show?'':'none',show?'':'important');
        if(show) visible++;
      });
      counter.textContent=q?`Найдено: ${visible}`:`Все заказы: ${cards.length}`;
      empty.hidden=visible!==0;
    };
    if(!input.dataset.v75Bound){
      input.dataset.v75Bound='1';
      input.addEventListener('input',apply);
      input.addEventListener('search',apply);
    }
    apply();
  }

  function setupQr(){
    const sheet=dialogFor(['QR']);
    if(!sheet||!/Открыть камеру|Open camera/i.test(txt(sheet))) return;
    sheet.classList.add('v75-sheet','v75-qr-sheet');
    const open=[...sheet.querySelectorAll('button,a,[role="button"]')]
      .find(e=>/Открыть камеру|Open camera/i.test(txt(e)));
    if(!open) return;
    open.classList.add('v75-camera-button');

    let input=sheet.querySelector('input[type="file"]');
    if(!input){
      input=document.createElement('input');
      input.type='file';
      input.hidden=true;
      sheet.appendChild(input);
    }
    input.accept='image/*';
    input.setAttribute('capture','environment');

    const note=[...sheet.querySelectorAll('*')].find(e=>/Кадр остаётся локально|stays local/i.test(txt(e)));
    const preview=note?.parentElement||null;
    if(preview) preview.classList.add('v75-qr-preview');

    if(!open.dataset.v75Bound){
      open.dataset.v75Bound='1';
      open.addEventListener('click',e=>{
        e.preventDefault();
        input.click();
      });
      input.addEventListener('change',()=>{
        const file=input.files?.[0];
        if(!file||!preview) return;
        const old=preview.querySelector('img');
        if(old?.dataset.url) URL.revokeObjectURL(old.dataset.url);
        const url=URL.createObjectURL(file);
        preview.innerHTML='';
        const img=document.createElement('img');
        img.src=url; img.alt='Локальный кадр'; img.dataset.url=url;
        const status=document.createElement('div');
        status.className='v75-qr-status';
        status.textContent='Кадр получен · распознавание QR пока не подключено';
        preview.append(img,status);
      });
    }
  }

  function clearance(){
    document.documentElement.style.setProperty('--v75-bottom-clearance','164px');
  }

  function run(){setupSearch();setupQr();clearance()}
  let queued=false;
  const schedule=()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;run()});
  };
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','style']});
  document.addEventListener('click',()=>[30,120,320].forEach(ms=>setTimeout(run,ms)),true);
  addEventListener('resize',schedule);
  visualViewport?.addEventListener('resize',schedule);
  run();
})();
