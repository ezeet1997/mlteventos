const btn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
if(btn&&menu){
  btn.addEventListener('click',()=>{
    const open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
  }));
}
