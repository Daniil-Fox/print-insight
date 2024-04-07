import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

tl.to('.credo-first', {yPercent: -50, opacity: 0})
tl.fromTo('.about-credo__ks', {xPercent: -50}, {yPercent: -100}, "<")
tl.fromTo('.credo-second', {yPercent: 50, xPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1})

ScrollTrigger.create({
  animation: tl,
  trigger: '.about-credo__section',
  start: 'top top',
  end: '+=700',
  scrub: 0.5,
  pin: true
})
