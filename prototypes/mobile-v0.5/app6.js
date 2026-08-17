document.addEventListener('click',e=>{
 const a=e.target.closest('[data-act]');if(a){e.preventDefault();handleAction(a.dataset.act,a);return}
 const go=e.target.closest('[data-go]');if(go){e.preventDefault();if(go.dataset.go==='home'&&go.closest('#settingsRail')){nav=[];navigate('home',{},true)}else navigate(go.dataset.go);return}
});
q('#bottomPeek').addEventListener('pointerup',(e)=>{e.preventDefault();const fh=q('#firstHint');if(fh)fh.style.display='none';sheet.classList.add('open');sheetOpen=true;drawer.classList.remove('open');rail.classList.remove('open');syncShade()});
q('#sheetTop').addEventListener('pointerup',(e)=>{e.preventDefault();e.stopPropagation();const fh=q('#firstHint');if(fh)fh.style.display='none';
 const isOpen=sheet.classList.contains('open');
 sheet.classList.toggle('open',!isOpen);sheetOpen=!isOpen;
 if(!isOpen){drawer.classList.remove('open');rail.classList.remove('open')}
 syncShade();
});

let sheetY=0,deltaY=0;
sheet.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;sheetY=e.clientY;deltaY=0;sheet.setPointerCapture?.(e.pointerId)});
sheet.addEventListener('pointermove',e=>deltaY=e.clientY-sheetY);
sheet.addEventListener('pointerup',(e)=>{if(e.target.closest('#sheetTop'))return;if(deltaY>42){sheet.classList.remove('open');sheetOpen=false;syncShade()}});

let swipe=null;
app.addEventListener('touchstart',e=>{const p=e.touches[0];swipe={x:p.clientX,y:p.clientY}},{passive:true});
app.addEventListener('touchend',e=>{if(!swipe)return;const p=e.changedTouches[0],dx=p.clientX-swipe.x,dy=p.clientY-swipe.y;
 if(swipe.y>innerHeight-65&&dy<-42){sheet.classList.add('open');sheetOpen=true;drawer.classList.remove('open');rail.classList.remove('open');syncShade()}
 else if(swipe.x>innerWidth-28&&dx<-38){drawer.classList.add('open');sheet.classList.remove('open');rail.classList.remove('open');syncShade()}
 else if(sheetOpen&&dy>48){sheet.classList.remove('open');sheetOpen=false;syncShade()}
 swipe=null
},{passive:true});

let drag=null,longT=null;
drawerScroll.addEventListener('pointerdown',e=>{
 const b=e.target.closest('.drawerBtn');if(!b)return;const id=b.dataset.menu;drag={id,b,sx:e.clientX,sy:e.clientY,active:false};b.setPointerCapture?.(e.pointerId);
 longT=setTimeout(()=>{b.classList.add('tip');setTimeout(()=>b.classList.remove('tip'),900)},430)
});
drawerScroll.addEventListener('pointermove',e=>{
 if(!drag)return;const d=Math.hypot(e.clientX-drag.sx,e.clientY-drag.sy);
 if(d>9){clearTimeout(longT);drag.b.classList.remove('tip');if(!drag.active){drag.active=true;const m=menu.find(x=>x[0]===drag.id);ghost.innerHTML=ico(m[1]);ghost.classList.add('on')}
 ghost.style.left=e.clientX+'px';ghost.style.top=e.clientY+'px';const z=q('#freeZone');if(z){const r=z.getBoundingClientRect();z.classList.toggle('drop',e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom)}}
});
drawerScroll.addEventListener('pointerup',e=>{
 if(!drag)return;clearTimeout(longT);const z=q('#freeZone');
 if(drag.active&&z){const r=z.getBoundingClientRect();const hit=e.clientX>=r.left&&e.clientX<=r.right&&e.clientY>=r.top&&e.clientY<=r.bottom;if(hit){if(!state.pinned.includes(drag.id)&&state.pinned.length<8){state.pinned.push(drag.id);toastMsg('Закреплено на Главной');renderDrawer();renderShortcuts()}else if(state.pinned.length>=8&&!state.pinned.includes(drag.id))toastMsg('Максимум 8 иконок')}}
 else if(!drag.active){navigate(menuTarget(drag.id))}
 ghost.classList.remove('on');z?.classList.remove('drop');drag=null
});
drawerScroll.addEventListener('pointercancel',()=>{clearTimeout(longT);ghost.classList.remove('on');q('#freeZone')?.classList.remove('drop');drag=null});

stage.addEventListener('pointerdown',e=>{
 const b=e.target.closest('.shortcut');if(!b||!b.dataset.short)return;b._sy=e.clientY;b._up=false;b.setPointerCapture?.(e.pointerId)
});
stage.addEventListener('pointermove',e=>{
 const b=e.target.closest('.shortcut');if(!b||b._sy==null)return;if(b._sy-e.clientY>24){b._up=true;b.classList.add('swiping')}
});
stage.addEventListener('pointerup',e=>{
 const b=e.target.closest('.shortcut');if(!b||b._sy==null)return;const id=b.dataset.short;
 if(b._up&&b._sy-e.clientY>35){state.pinned=state.pinned.filter(x=>x!==id);renderShortcuts();renderDrawer();toastMsg('Убрано с Главной')}
 else navigate(menuTarget(id));b._sy=null;b._up=false;b.classList.remove('swiping')
});

renderDrawer();
navigate('home',{},true);
