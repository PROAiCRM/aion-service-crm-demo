(()=>{
  const text=e=>(e?.textContent||'').replace(/\s+/g,' ').trim();
  const viewLabels={home:['Главная','Home'],orders:['Заказы','Orders'],repair:['Ремонт','Repair'],clients:['Клиенты','Clients'],more:['Ещё','More']};
  const getView=()=>{
    const active=[...document.querySelectorAll('.nav-item.active,[data-view-target].active')]
      .find(e=>Object.values(viewLabels).flat().some(x=>text(e).includes(x)));
    if(active){
      for(const [key,labels] of Object.entries(viewLabels)) if(labels.some(x=>text(active).includes(x))) return key;
    }
    return document.body.dataset.v73View||'home';
  };

  function suppressThemeFeedback(){
    const exact=new Set(['Тема','Theme','Светлая тема','Тёмная тема','Light theme','Dark theme']);
    for(const e of document.querySelectorAll('body *')){
      const t=text(e);
      if(!exact.has(t)) continue;
      let c=e;
      for(let depth=0;c&&c!==document.body&&depth<6;depth++,c=c.parentElement){
        const r=c.getBoundingClientRect();
        const s=getComputedStyle(c);
        const wide=r.width>innerWidth*.56;
        const low=r.top>innerHeight*.46;
        const short=r.height>20&&r.height<150;
        const floating=['fixed','absolute','sticky'].includes(s.position)||c.matches('[role=status],[aria-live],[class*=toast],[class*=snack],[class*=notice],[class*=feedback]');
        if(wide&&low&&short&&(floating||r.width>innerWidth*.78)){
          c.classList.add('v74-suppressed-toast');
          c.style.setProperty('display','none','important');
          c.setAttribute('aria-hidden','true');
          setTimeout(()=>c.remove(),0);
          break;
        }
      }
    }
  }

  function findViewRoot(title){
    const h=[...document.querySelectorAll('h1,h2')].find(e=>text(e)===title);
    return h?.closest('.view,[data-view],.workspace,[data-workspace]')||h?.parentElement?.parentElement||null;
  }

  function polishOrderThumbs(){
    const root=findViewRoot('Заказы')||findViewRoot('Orders');
    if(!root) return;
    const all=[...root.querySelectorAll('button,a,article,section,div')]
      .filter(e=>/№?1254[1-4]|#?A-10/.test(text(e)));
    const cards=all.filter(e=>![...e.children].some(ch=>/№?1254[1-4]|#?A-10/.test(text(ch))));
    cards.slice(0,4).forEach((card,i)=>{
      const cr=card.getBoundingClientRect();
      let thumb=card.querySelector('.v73-thumb,.rear-phone,[class*=order-device],[class*=device-thumb],[class*=phone-thumb]');
      if(!thumb){
        const candidates=[...card.querySelectorAll('*')].filter(n=>{
          const r=n.getBoundingClientRect();
          const tx=text(n);
          return r.width>=42&&r.width<=110&&r.height>=48&&r.height<=130&&r.left<cr.left+135&&tx.length<8;
        });
        thumb=candidates.sort((a,b)=>b.getBoundingClientRect().height-a.getBoundingClientRect().height)[0];
      }
      if(!thumb) return;
      thumb.classList.add('v74-order-thumb','v74-order-phone-'+i);
      thumb.innerHTML='';
      thumb.setAttribute('aria-hidden','true');
    });
  }

  function addClearance(){
    document.body.dataset.v74View=getView();
    document.documentElement.style.setProperty('--v74-bottom','132px');
  }

  function run(){
    suppressThemeFeedback();
    polishOrderThumbs();
    addClearance();
  }

  let pending=false;
  const schedule=()=>{
    if(pending) return;
    pending=true;
    requestAnimationFrame(()=>{pending=false;run()});
  };
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style']});
  document.addEventListener('click',e=>{
    const t=text(e.target?.closest('button,a,[role=button]')||e.target);
    [0,30,100,260,700,1400].forEach(ms=>setTimeout(run,ms));
    if(/Тема|Theme|Светл|Тёмн|Light|Dark/i.test(t)) [40,180,500,1200,2400].forEach(ms=>setTimeout(suppressThemeFeedback,ms));
  },true);
  visualViewport?.addEventListener('resize',schedule);
  addEventListener('resize',schedule);
  const timer=setInterval(run,250);
  setTimeout(()=>clearInterval(timer),8000);
  run();
})();
