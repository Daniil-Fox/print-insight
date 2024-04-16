import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const printWord = document.querySelectorAll('.word-print .letter')
const insightWord = document.querySelectorAll('.word-insight .letter')

if(printWord && printWord.length > 0){
  let xCoord = -500 // на какое значение уйдет первая и последняя буква влево и по модулю вправо соответственно

  const xCoordStep = xCoord / Math.round(printWord.length / 2) // равный шаг по иксу

  let yCoord = 0 // инициализация по y


  const timelinePrint = gsap.timeline()
  const timelineInsight = gsap.timeline()



  const yCoordConst = -100  // на какое значение уйдет первая и последняя буква в конце анимации
  printWord.forEach((letter, index) => {

    xCoord -= xCoordStep
    if(index <= printWord.length / 2){
      yCoord = yCoordConst * (index + 1)
      timelinePrint.to(letter, {x: xCoord, yPercent: yCoord, opacity: 0}, "<")
    } else {
      let i = printWord.length - index
      yCoord = yCoordConst * i--
      timelinePrint.to(letter, {x: xCoord, yPercent: yCoord, opacity: 0}, "<")
    }
  })


  let xCoordIns = -500 // на какое значение уйдет первая и последняя буква влево и по модулю вправо соответственно

  const xCoordStepIns = xCoordIns / Math.round(insightWord.length / 2) // равный шаг по иксу
  let yCoordIns = 0 // инициализация по y
  const yCoordConstIns = -100  // на какое значение уйдет первая и последняя буква в конце анимации
  insightWord.forEach((letter, index) => {
    xCoordIns = xCoordIns - xCoordStepIns
    console.log(xCoordIns);
    if(index <= insightWord.length / 2){
      yCoordIns = (yCoordConstIns * (index + 1)) / 2

      timelineInsight.to(letter, {x: xCoordIns, yPercent: yCoordIns, opacity: 0}, "<")


    } else {
      let i = insightWord.length - index
      yCoordIns = (yCoordConstIns * i--) / 2
      timelineInsight.to(letter, {x: xCoordIns, yPercent: yCoordIns, opacity: 0}, "<")
    }
  })

  const tlCircle = gsap.timeline()

  tlCircle
  .fromTo('.hero__video', {opacity: 0}, {opacity: 1})
  .to('.hero__video', {width: '100vw', height: '100vh', borderRadius: '0%', x: '0', y: '0'})
  .to('.hero__container', {opacity: 1})
  .fromTo('header', {y: -100, opacity: 0}, {y: 0, opacity: 1}, "<")
  .fromTo('.hero__container .lines', {opacity: 0}, {opacity: 1})
  .set('.header__logo', {opacity: 0})
  const globalTimeline = gsap.timeline({ scrollTrigger: {
    trigger: '.main-screen',
    start: 'top top',
    end: '+=3000',
    scrub: 1.5,
    pin: '.hero',
    ease: 'none'
  }
  })

  globalTimeline.add(timelinePrint).add(timelineInsight, "<").add(tlCircle)
}
