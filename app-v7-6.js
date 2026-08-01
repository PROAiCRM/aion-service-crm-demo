(()=>{
  const text=e=>(e?.textContent||'').replace(/\s+/g,' ').trim();
  const norm=s=>(s||'').toLowerCase().replace(/[^a-zа-яё0-9]+/gi,'');
  const vv=window.visualViewport;
  let baseline=vv?.height||innerHeight;
  let focusTimer=0;

  function viewRoot(labels){
    const set=new Set(labels);
    const h=[...document.querySelectorAll('h1,h2')].find(e=>set.has(text(e)));
    return h?.closest('.view,[data-view],.workspace,[data-workspace]')||h?.parentElement?.parentElement||null;
  }

  function directCards(root,pattern){
    if(!root) return [];
    const candidates=[...root.querySelectorAll('button,a,article,section,li,div')]
      .filter(e=>pattern.test(text(e)));
    return candidates.filter(e=>![...e.children].some(ch=>pattern.test(text(ch))))
      .filter(e=>{
        const r=e.getBoundingClientRect();
        return r.width>innerWidth*.68&&r.height>58&&r.height<230;
      });
  }

  function bindFilter(root,input,cards,emptyText){
    if(!root||!input||!cards.length) return;
    input.classList.add('v76-search-field');
    input.type='search';
    input.setAttribute('inputmode','search');
    input.setAttribute('enterkeyhint','search');
    input.setAttribute('autocomplete','off');
    input.setAttribute('autocorrect','off');
    input.setAttribute('spellcheck','false');

    let empty=root.querySelector('.v76-empty');
    if(!empty){
      empty=document.createElement('div');
      empty.className='v76-empty';
      empty.textContent=emptyText;
      cards[cards.length-1].insertAdjacentElement('afterend',empty);
    }

    const apply=()=>{
      const q=norm(input.value);
      let visible=0;
      cards.forEach(card=>{
        const show=!q||norm(text(card)).includes(q);
        card.hidden=!show;
        card.style.setProperty('display',show?'':'none',show?'':'important');
        if(show) visible++;
      });
      empty.hidden=visible!==0;
      root.dataset.v76Results=String(visible);
    };

    if(!input.dataset.v76Bound){
      input.dataset.v76Bound='1';
      input.addEventListener('input',apply);
      input.addEventListener('search',apply);
      input.addEventListener('change',apply);
    }
    apply();
  }

  function setupWorkspaceSearch(){
    const orders=viewRoot(['Заказы','Orders']);
    if(orders){
      const input=orders.querySelector('input[type="search"],input:not([type="hidden"])');
      const cards=directCards(orders,/№?1254[1-4]|#?A-10/);
      bindFilter(orders,input,cards,'Заказ не найден');
    }

    const clients=viewRoot(['Клиенты','Clients']);
    if(clients){
      const input=clients.querySelector('input[type="search"],input:not([type="hidden"])');
      const cards=directCards(clients,/Иван Петров|Анна Кузнецова|Сергей Дмитриев|Ольга Морозова|Ivan Petrov|Anna Kuznetsova|Sergey Dmitriev|Olga Morozova/);
      bindFilter(clients,input,cards,'Клиент не найден');
    }
  }

  function setViewport(){
    const h=vv?.height||innerHeight;
    const top=vv?.offsetTop||0;
    const active=document.activeElement;
    const editing=!!active&&active.matches?.('input,textarea,select,[contenteditable="true"]');
    if(!editing&&h>baseline-80) baseline=Math.max(baseline,h);
    const keyboard=editing&&(baseline-h>120||h<innerHeight*.72);
    document.documentElement.style.setProperty('--v76-vh',`${Math.round(h)}px`);
    document.documentElement.style.setProperty('--v76-vtop',`${Math.round(top)}px`);
    document.body.classList.toggle('v76-keyboard',keyboard);
    if(!editing) document.body.classList.remove('v76-focus');
  }

  function keepFocusedVisible(target){
    clearTimeout(focusTimer);
    focusTimer=setTimeout(()=>{
      setViewport();
      if(!target?.isConnected||!vv) return;
      const r=target.getBoundingClientRect();
      const top=vv.offsetTop+12;
      const bottom=vv.offsetTop+vv.height-18;
      if(r.bottom>bottom) scrollBy({top:r.bottom-bottom+18,behavior:'smooth'});
      else if(r.top<top) scrollBy({top:r.top-top-12,behavior:'smooth'});
    },260);
  }

  function focusIn(e){
    const t=e.target;
    if(!t.matches?.('input,textarea,select,[contenteditable="true"]')) return;
    document.body.classList.add('v76-focus');
    setViewport();
    keepFocusedVisible(t);
  }

  function focusOut(){
    clearTimeout(focusTimer);
    setTimeout(()=>{
      document.body.classList.remove('v76-focus','v76-keyboard');
      setViewport();
    },220);
  }

  function hardenWidth(){
    document.documentElement.style.setProperty('--v76-doc-width',`${document.documentElement.clientWidth}px`);
  }

  function run(){setupWorkspaceSearch();setViewport();hardenWidth()}
  let queued=false;
  const schedule=()=>{
    if(queued) return;
    queued=true;
    requestAnimationFrame(()=>{queued=false;run()});
  };

  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','style']});
  document.addEventListener('focusin',focusIn,true);
  document.addEventListener('focusout',focusOut,true);
  document.addEventListener('click',()=>[30,120,320].forEach(ms=>setTimeout(run,ms)),true);
  vv?.addEventListener('resize',schedule);
  vv?.addEventListener('scroll',schedule);
  addEventListener('resize',schedule);
  addEventListener('orientationchange',()=>setTimeout(run,300));
  run();
})();
