import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import AOS from 'aos';
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

import Rellax from 'rellax';
const rellax = new Rellax('.rellax', {
  center: 0.5
});

import Lenis from '@studio-freight/lenis'
const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('.services-nishes__anchor')?.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute('href'))
  });
})



window.addEventListener('DOMContentLoaded', e => {
  const mainVideo = document.querySelector('.hero__video video')
  if(mainVideo){
    const srcMob = mainVideo.dataset.srcMob
    const srcDesc = mainVideo.dataset.src

    if(window.matchMedia('(max-width: 1024px)').matches){
      mainVideo.src = srcMob
    } else {
      mainVideo.src = srcDesc
    }
    // mainVideo.play()

    const observer = new IntersectionObserver((entries, observer) => {
        if(entries[0].isIntersecting){
          mainVideo.play()
        } else {
          mainVideo.pause()
        }
    }, {
      threshold: 0.1
    })
    observer.observe(mainVideo)
  }
})

const header = document.querySelector('.header')
const logo = header.querySelector('.header__logo')
if(window.matchMedia('(min-width: 1025px)').matches && !document.querySelector('.hero')){
  window.addEventListener('scroll', e => {
    if(window.scrollY > 35){
      logo.style.opacity = 0
    } else {
      logo.style.opacity = 1
    }
  })
}


// cursor

import Cursor from "./vendor/cursor";
import Magnetic from "./vendor/magnetic";

if(window.matchMedia('(min-width: 1025px)').matches){
  const cursor = new Cursor();
  cursor.setState('green-color')
}




// buttons
var animateButton = function(e) {

  // e.preventDefault();
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);


};

var bubblyButtons = document.querySelectorAll(".btn");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click',e => {
    animateButton(e)
  } , false);
}



import 'owl.carousel';
  $('.owl-carousel').owlCarousel({
    loop: true,
    smartSpeed: 300,
  });
