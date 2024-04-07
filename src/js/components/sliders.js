import {Navigation, Pagination, Swiper, Thumbs} from 'swiper'
// import {Navigation, Pagination} from 'swiper'
import { Autoplay } from 'swiper'

new Swiper('.look__slider', {
  modules: [Autoplay],
  slidesPerView: 'auto',
  loop: true,
  // centeredSlides: true,
  initialSlide: 2,
  autoplay: {
    disableOnInteraction: false,
  },
  speed: 1000,
})


new Swiper('.services-store__slider>.swiper', {
  slidesPerView: 1,
  modules: [Navigation, Pagination, Autoplay],
  // loop: true,
  autoplay: {
    disableOnInteraction: false,
  },

  speed: 1000,
  pagination: {
    el: '.services-store__pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.services-store__btn--prev',
    nextEl: '.services-store__btn--next',

  }
})

const itemThumbs = new Swiper('.thumbs__slider', {
  slidesPerView: 4,
  spaceBetween: 3
})

const itemSlider = new Swiper('.gallery__slider', {
  slidesPerView: 1,
  modules: [Thumbs, Pagination],
  thumbs: {
    swiper: itemThumbs,
  },
  pagination: {
    el: '.item-section__progress',
    type: 'progressbar'
  }
})


new Swiper('.incart-slider--page>.swiper', {
  modules: [Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  speed: 1000,
  navigation: {
    prevEl: '.incart__btn--prev',
    nextEl: '.incart__btn--next',
  }
})
