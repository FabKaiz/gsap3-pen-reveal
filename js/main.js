gsap.registerPlugin(ScrollTrigger);

function getTopPartsHeight() {
  return document.querySelector('.pen-top').clientHeight - 22
}


function init(){
  
  // Move the part 3 to cover the part 2
  gsap.set('.part3', {
    y: () => {
      return -(getTopPartsHeight())
    },
    scrollTrigger: {
      id: 'pen-body',
      trigger: '.part3',
      start: 'top bottom-=270px',
      end: `+=${(getTopPartsHeight())}`,
      pin: true,
      pinSpacing: false,
    }
  });

  gsap.set('.part4', {y: '-547px'});
  gsap.set('.part5', {y: '-722px'});
  gsap.set('.part6', {y: '-842px'});

  // Tween the tip of the pen back to 0
  gsap.to('.part6', {y: 0, ease: 'none', scrollTrigger: {
    trigger: '.pen-body',
    start: 'top bottom-=640px',
    end: '+=842px',
    scrub: true,
    markers: true,
  }});
  
}
window.addEventListener('load', function(){
    init();
});
