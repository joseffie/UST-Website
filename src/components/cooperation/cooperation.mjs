new Swiper('.cooperation__slider', {
  direction: 'horizontal',
  loop: false,
  navigation: {
    nextEl: '.cooperation__btn-next',
    prevEl: '.cooperation__btn-prev',
  },
  pagination: {
    el: '.cooperation__bullets',
    clickable: true,
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    559.98: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1023.98: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  spaceBetween: 40,
});
