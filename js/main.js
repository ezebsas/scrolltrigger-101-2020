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
        toggleActions: 'play none none reverse'
      }
    })
  })
}

window.addEventListener('load', function(){
    init();
});
