gsap.registerPlugin(ScrollTrigger);

function init(){
    gsap.set("#project02", {scrollTrigger: {
        trigger: '#project02',
        start: 'top bottom-=10%',
        end: 'bottom center-=10%',
        toggleClass: 'active',
        markers: true
    }})
}

window.addEventListener('load', function(){
    init();
});
