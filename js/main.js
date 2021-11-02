gsap.registerPlugin(ScrollTrigger);


function init(){
  
  // Move the part 3 to cover the part 2
  gsap.set('.part3', {
    y: () => {
      return -(document.querySelector('.pen-top').clientHeight - 22)
    },
    scrollTrigger: {
      id: 'pen-body',
      trigger: '.part3',
      start: 'top bottom-=270px',
      end: `+=${(document.querySelector('.pen-top').clientHeight - 22)}`,
      pin: true,
      markers: true,
    }
  })
  
}
window.addEventListener('load', function(){
    init();
});
