import {Navigation, Pagination, Swiper, Thumbs} from 'swiper'
import { Autoplay } from 'swiper'
import { EffectFade } from 'swiper'

new Swiper('.look__slider', {
  modules: [Autoplay],
  slidesPerView: 'auto',
  loop: true,
  initialSlide: 2,
  speed: 1000,
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
  },
  breakpoints : {
    320 : {
      slidesPerView: 2,
      spaceBetween: 12
    },
    1025 : {
      slidesPerView: 5,
      spaceBetween: 30,
    }
  }
})

//

new Swiper('.mood-slider', {
  slidesPerView: 4,

  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 18
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})


const servicesItems = document.querySelectorAll('[data-tab-item]')
const servicesTabs = document.querySelectorAll('[data-tab-content]')

if(servicesItems && servicesItems.length > 0){
  const options = {
    slidesPerView: 1,
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    autoplay: {
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },

    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      prevEl: '.services-store__btn--prev',
      nextEl: '.services-store__btn--next',

    }
  }

  options.pagination.el = servicesTabs[0].querySelector('.swiper-pagination')

  let swiper = new Swiper(servicesTabs[0].querySelector('.swiper'), options);
  servicesItems.forEach((item, index) => {
    item.addEventListener('click', e => {
      clearTabsActive(swiper)

      const dataset = item.dataset.tabItem;
      let active = [...servicesTabs].find(item => item.dataset.tabContent == dataset)

      active.classList.add('active')

      const slider = active.querySelector('.swiper')
      const pagination = active.querySelector('.swiper-pagination')
      options.pagination.el = pagination
      swiper = new Swiper(slider, options);
    })
  })

  function clearTabsActive(swiper){
    if (swiper !== undefined) swiper.destroy(true, true);
    servicesTabs.forEach(el => {
      el.classList.remove('active')
    })
  }
}
