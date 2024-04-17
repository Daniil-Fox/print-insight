import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo('.concl__subtitle', {y: '5rem', opacity: 0}, {y: '0', opacity: 1, duration: 1, scrollTrigger: {
  trigger: '.concl',
  start: 'center center',

}})
gsap.fromTo('.concl__overlay', {y: '5rem', opacity: 0}, {y: '0', opacity: 1, duration: 1, scrollTrigger: {
  trigger: '.concl',
  start: 'center center',

}})



const tl = gsap.timeline()

tl.to('.work__wrapper', {width: '100vw', height: '100%', borderRadius: 0, x: 0, duration: 1})
.to('.work__item--animate', {opacity: 1, duration: .5})
.to('.work__item--animate>.work__image', {width: '100%', height: '100%', borderRadius: 0, duration: .8})
.to('.work__item--form', {opacity: 1, y: 0, duration: .8}, "<")

ScrollTrigger.create({
  trigger: ".work__wrapper",
  animation: tl,
  start: 'bottom bottom'
})
