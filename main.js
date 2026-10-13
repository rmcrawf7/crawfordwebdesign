(function(){
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  var h=document.querySelector('header');
  addEventListener('scroll',function(){h&&h.classList.toggle('scrolled',scrollY>8)},{passive:true});
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('site-nav');
  if(btn&&nav){
    btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Close menu':'Open menu')});
    nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
    addEventListener('keydown',function(e){if(e.key==='Escape'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
  }
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  } else els.forEach(function(el){el.classList.add('in')});
})();
(function(){
  var frames=document.querySelectorAll('.concept-frame');
  function fit(){frames.forEach(function(f){var i=f.querySelector('iframe');if(i)i.style.transform='scale('+(f.clientWidth/1280)+')'})}
  fit(); addEventListener('resize',fit);
  if('ResizeObserver' in window){var ro=new ResizeObserver(fit);frames.forEach(function(f){ro.observe(f)})}
})();
