import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

gsap.fromTo('.concl__subtitle', {y: '5rem', opacity: 0}, {y: '0', opacity: 1, duration: 1, scrollTrigger: {
  trigger: '.concl',
  start: 'center center',

}})
// gsap.fromTo('.concl__overlay', {y: '5rem', opacity: 0}, {y: '0', opacity: 1, duration: 1, scrollTrigger: {
//   trigger: '.concl',
//   start: 'center center',

// }})
