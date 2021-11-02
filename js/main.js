function init(){

  // Move the part 3 to cover the part 2
  gsap.set('.part3', {
    y: () => {
      return -(document.querySelector('.pen-top').clientHeight - 22);
    }
  })

}

window.addEventListener('load', function(){
    init();
});
