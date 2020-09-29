gsap.registerPlugin(ScrollTrigger);

function init(){
  const projects = document.querySelectorAll('.project');

  projects.forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      yPercent: 5,
      scrollTrigger: {
        trigger: project.querySelector('img'),
        start: 'top bottom-=30%',
        end: 'top center',
        toggleActions: 'play none none reverse',
        onUpdate: ({progress, direction, isActive, getVelocity}) => console.log(progress, direction, isActive, getVelocity()),
        onToggle: () => {console.log('toggle')},
        onEnter: () => {console.log('onEnter')},
        onLeave: () => {console.log('onLeave')},
        onEnterBack: () => {console.log('onEnterBack')},
        onLeaveBack: () => {console.log('onLeaveBack')},
      }
    })
  })
}

window.addEventListener('load', function(){
    init();
});
