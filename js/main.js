gsap.registerPlugin(ScrollTrigger);

function init(){
  const parallaxTl = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: '.bcg-parallax',
      start: 'top bottom',
      scrub: true
    }
  });

  parallaxTl
    .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4)
    .from('.bcg', {duration: 2, y: '-30%'}, 0);
}

window.addEventListener('load', function(){
    init();
});
