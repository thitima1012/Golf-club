document.addEventListener('DOMContentLoaded',function(){
  const menuBtn=document.getElementById('menuBtn');
  const nav=document.getElementById('nav');
  menuBtn.addEventListener('click',()=>{
    if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
  });
});
