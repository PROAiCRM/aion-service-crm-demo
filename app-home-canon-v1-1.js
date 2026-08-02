(()=>{
'use strict';
const logo=document.querySelector('.brand-logo');
if(logo){
  logo.outerHTML=`<svg class="brand-logo" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="canonChrome" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f7fbff"/><stop offset=".2" stop-color="#8fc5ff"/><stop offset=".48" stop-color="#1b5bd8"/><stop offset=".72" stop-color="#7c61ff"/><stop offset="1" stop-color="#e7f4ff"/></linearGradient><linearGradient id="canonDark" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#16325f"/><stop offset="1" stop-color="#070d19"/></linearGradient></defs><path fill="url(#canonChrome)" d="M32 3 57 28 32 61 7 28 32 3Z"/><path fill="url(#canonDark)" d="M32 13 45 29 32 49 19 29 32 13Z"/><path fill="#d9efff" opacity=".68" d="M32 3v10L19 29 7 28 32 3Z"/><path fill="#6f8cff" opacity=".72" d="m32 49 13-20 12-1-25 33Z"/></svg>`;
}
})();
