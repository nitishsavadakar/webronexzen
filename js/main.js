(function(){
  var $=function(s,r){return (r||document).querySelector(s)}, $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var root=document.documentElement;

  // service pop-ups
  var svc=$('#svc'), body=$('#svc-body');
  $$('[data-service]').forEach(function(b){
    b.addEventListener('click',function(){
      var t=document.getElementById(b.getAttribute('data-service'));
      body.replaceChildren(t.content.cloneNode(true));
      svc.showModal(); root.classList.add('lock');
      svc.scrollTop=0;
    });
  });

  // lightbox
  var lb=$('#lb'), lbPic=$('#lb-pic'), lbImg=$('#lb-img'), lbCap=$('#lb-cap'), list=[], idx=0;
  function show(i){
    idx=(i+list.length)%list.length;
    var it=list[idx];
    $('source',lbPic).srcset=it.getAttribute('data-full')+'.webp';
    lbImg.src=it.getAttribute('data-full')+'.jpg';
    lbImg.alt=it.getAttribute('data-alt')||'';
    lbCap.textContent=it.getAttribute('data-cap')||it.getAttribute('data-alt')||'';
  }
  $$('[data-lb]').forEach(function(b){
    b.addEventListener('click',function(){
      var g=b.getAttribute('data-lb');
      list=$$('[data-lb="'+g+'"]');
      show(list.indexOf(b)); lb.showModal(); root.classList.add('lock');
    });
  });
  $('#lb-prev').addEventListener('click',function(){show(idx-1)});
  $('#lb-next').addEventListener('click',function(){show(idx+1)});
  var x0=null;
  lb.addEventListener('touchstart',function(e){x0=e.touches[0].clientX},{passive:true});
  lb.addEventListener('touchend',function(e){
    if(x0===null)return; var dx=e.changedTouches[0].clientX-x0; x0=null;
    if(Math.abs(dx)>50) show(idx+(dx<0?1:-1));
  });
  lb.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight')show(idx+1); if(e.key==='ArrowLeft')show(idx-1);
  });

  // close buttons, backdrop click, unlock scroll
  $$('dialog').forEach(function(d){
    $$('[data-close]',d).forEach(function(b){b.addEventListener('click',function(){d.close()})});
    d.addEventListener('click',function(e){if(e.target===d)d.close()});
    d.addEventListener('close',function(){root.classList.remove('lock')});
  });

  // show more photos
  $$('[data-showmore]').forEach(function(b){
    b.addEventListener('click',function(){
      var g=b.closest('.gal-group'); var o=g.classList.toggle('open');
      b.textContent=o?'Show fewer photos':'Show all photos ('+b.getAttribute('data-count')+')';
    });
  });

  // highlight current section in menu
  if('IntersectionObserver' in window){
    var links={}; $$('.nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){
        $$('.nav a.on').forEach(function(a){a.classList.remove('on')});
        var a=links[e.target.id]; if(a){a.classList.add('on'); a.scrollIntoView({block:'nearest',inline:'center'});}
      }});
    },{rootMargin:'-35% 0px -60% 0px'});
    Object.keys(links).forEach(function(id){var s=document.getElementById(id); if(s)io.observe(s)});
  }

  // scroll reveal: a few places only (headings, service cards, steps, photos, categories, contact cards)
  var calm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!calm&&'IntersectionObserver' in window){
    var groups=[['.head',''],['.card','pop'],['.step',''],['.ie-photos figure','pop'],['.cats li','pop'],['.panel',''],['.why li',''],['.addr',''],['.csr figure','']];
    var ro=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){
        var el=e.target; el.classList.add('in'); ro.unobserve(el);
        el.addEventListener('animationend',function(){el.classList.remove('rv','pop','in')},{once:true});
      }});
    },{rootMargin:'0px 0px -8% 0px',threshold:0.12});
    groups.forEach(function(g){
      $$(g[0]).forEach(function(el,i){
        el.classList.add('rv'); if(g[1])el.classList.add(g[1]);
        el.style.setProperty('--d',String(i%4)); ro.observe(el);
      });
    });
  }
})();
