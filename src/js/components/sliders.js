import {Navigation, Pagination, Swiper, Thumbs} from 'swiper'
// import {Navigation, Pagination} from 'swiper'
import { Autoplay } from 'swiper'
import { EffectFade } from 'swiper'
new Swiper('.look__slider', {
  modules: [Autoplay],
  slidesPerView: 'auto',
  loop: true,
  // centeredSlides: true,
  initialSlide: 2,
  // autoplay: {
  //   disableOnInteraction: false,
  // },
  speed: 1000,
})


const serviceSlider = new Swiper('.services-store__slider>.swiper', {
  slidesPerView: 1,
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  // loop: true,
  autoplay: {
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
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


const serviceContentSlider = new Swiper('.services-store__content-slider', {
  slidesPerView: 1,
  modules: [EffectFade],

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
})


const serviceTitleSlider = new Swiper('.services-store__title-slider', {
  slidesPerView: 1,
  modules: [EffectFade],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
})

serviceSlider.on('slideChange', (swiper) => {
  serviceContentSlider.slideTo(serviceSlider.activeIndex)
  serviceTitleSlider.slideTo(serviceSlider.activeIndex)
})
serviceTitleSlider.on('slideChange', (swiper) => {
  serviceSlider.slideTo(serviceTitleSlider.activeIndex)
  serviceContentSlider.slideTo(serviceTitleSlider.activeIndex)
})
serviceContentSlider.on('slideChange', (swiper) => {
  serviceSlider.slideTo(serviceContentSlider.activeIndex)
  serviceTitleSlider.slideTo(serviceContentSlider.activeIndex)
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



window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };
  resizableSwiper(
    '(max-width: 1024px)',
    '.mood-slider',
    {
      slidesPerView: 'auto',
    }
  );
});
