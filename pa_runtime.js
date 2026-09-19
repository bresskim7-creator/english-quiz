/* Tab-local preview boundary. Never replace native Storage or global fetch. */
const PA_RUNTIME=(()=>{
  'use strict';
  const preview=new URLSearchParams(location.search).get('mode')==='preview';
  const DEFAULT_ENDPOINT='https://script.google.com/macros/s/AKfycbxvtGwu5yQPGgUszUHX4iB0e-Mk4wXD1icbBl-Xfk8HH_cTPbs54bqQKcjWjqchVZ8sKg/exec';
  const memory=new Map();
  if(preview)try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);memory.set(k,localStorage.getItem(k));}}catch(_){}
  const storage=preview?{
    get length(){return memory.size;},key:i=>[...memory.keys()][i]??null,
    getItem:k=>memory.get(String(k))??null,setItem:(k,v)=>{memory.set(String(k),String(v));},
    removeItem:k=>{memory.delete(String(k));},clear:()=>memory.clear()
  }:{
    get length(){return localStorage.length;},key:i=>localStorage.key(i),
    getItem:k=>localStorage.getItem(k),setItem:(k,v)=>localStorage.setItem(k,v),
    removeItem:k=>localStorage.removeItem(k),clear:()=>localStorage.clear()
  };
  function endpoint(){try{return storage.getItem('webhook_url')||DEFAULT_ENDPOINT;}catch(_){return DEFAULT_ENDPOINT;}}
  function href(path){const u=new URL(path,location.href);if(preview&&u.origin===location.origin)u.searchParams.set('mode','preview');return u.href;}
  function request(url,options={}){
    const method=String(options.method||'GET').toUpperCase();
    if(preview&&method!=='GET'&&method!=='HEAD')return Promise.reject(Error('Preview cannot send learning records'));
    return fetch(url,options);
  }
  document.addEventListener('DOMContentLoaded',()=>{
    if(!preview)return;
    document.documentElement.dataset.paMode='preview';
    const style=document.createElement('style');
    style.textContent='body{padding-top:52px!important}#pa-preview-banner{position:fixed;top:0;left:0;right:0;z-index:99999;padding:12px 8px;text-align:center;background:#fff1bd;color:#493800;font:700 14px/1.5 sans-serif}#webhook-settings-toggle,#webhook-settings{display:none!important}';
    document.head.appendChild(style);
    const banner=document.createElement('div');banner.id='pa-preview-banner';banner.setAttribute('role','status');banner.textContent='둘러보기 중 · 아이 기록에 반영되지 않아요';document.body.prepend(banner);
    document.title='[둘러보기] '+document.title;
  });
  return Object.freeze({preview,storage,endpoint,href,fetch:request});
})();
const PA_STORAGE=PA_RUNTIME.storage;
