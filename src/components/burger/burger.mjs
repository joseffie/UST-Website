const burgers = document.querySelectorAll('[data-burger');
const nav = document.querySelector('[data-burger-nav]');

if (burgers) {
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      document.body.classList.toggle('_no-scroll');
      nav.classList.toggle('main-nav--active');
      burgers.forEach((item) => {
        item.classList.toggle('burger--active');
      });
    });
  });
}
