gsap.registerPlugin(ScrollTrigger);

function init(){
  gsap.to(['#intro h1', '#intro p'], {
    autoAlpha: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '#intro .content',
      start: 'top top+=5%',
      end: 'bottom center',
      pin:true,
      scrub: true,
      markers: true
    }
  })
}

window.addEventListener('load', function(){
    init();
});
