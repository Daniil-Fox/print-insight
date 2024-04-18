import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


// if(window.matchMedia('(min-width: 1025px)').matches){

  const tl = gsap.timeline()
  let percent = "-65vh"

  if(window.matchMedia('(max-width: 1024px)').matches){
    percent = "-30svh"
  }
  tl.to('.credo-first', {yPercent: -50, opacity: 0})
  tl.fromTo('.about-credo__ks', {xPercent: -50}, {y: percent}, "<")
  tl.fromTo('.credo-second', {yPercent: 50, xPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1})

  ScrollTrigger.create({
    animation: tl,
    trigger: '.about-credo__section',
    start: 'top top',
    end: '+=700',
    scrub: 0.5,
    pin: true
  })
// }
