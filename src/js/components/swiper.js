const breakpoint = window.matchMedia('(min-width:768px)');
const readMore = document.querySelector('.read-more');
const readMoreImageServices = document.querySelector('.read-more-services');
const readMoreImage = document.querySelector('.read-more__image');
const readMoreText = document.querySelector('.read-more__text');
const readMoreTextServices = document.querySelector('.read-more__text--services');
const buttonServices = document.querySelector('.read-more__text--services');
const wrapper = document.querySelector('.swiper-wrapper');
const wrapperServices = document.querySelector('.swiper__wrapper--services');

let mySwiper = [];

const initDestroySwiper = function () {
  if (breakpoint.matches) {
    if (mySwiper) { //если слайдер существует
      for (let mySwiperElement of mySwiper) {
        mySwiperElement.destroy();
      }
    }
    return;
  }
  mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 26,
    slidesPerView: 1.3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};


function showMenu() {
  wrapper.classList.toggle('wrapper--open');
  if (wrapper.classList.contains('wrapper--open')) {
    readMoreImage.classList.toggle('read-more__text--open');
    readMoreText.textContent = 'Скрыть';
    return;
  }
  readMoreImage.classList.toggle('read-more__text--open');
  readMoreText.textContent = 'Показать все';
}

function showMenuServices() {
  wrapperServices.classList.toggle('wrapper--open');
  if (wrapperServices.classList.contains('wrapper--open')) {
    readMoreImageServices.classList.toggle('read-more__text--open');
    readMoreTextServices.textContent = 'Скрыть';
    return;
  }
  readMoreImageServices.classList.toggle('read-more__text--open');
  readMoreTextServices.textContent = 'Показать все';
}

initDestroySwiper();
buttonServices.addEventListener('click', showMenuServices);
readMore.addEventListener('click', showMenu);
breakpoint.addListener(initDestroySwiper);



