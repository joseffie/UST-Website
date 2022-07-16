const accordionButtons = document.querySelectorAll('.accordion__btn');
const accordionContentWraps = document.querySelectorAll('.accordion__content');

accordionButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    let current = e.target.getAttribute('data-accordion-btn');
    for (let j = 0; j < accordionButtons.length; j++) {
      if (current === accordionContentWraps[j].getAttribute('data-accordion-content')) {
        accordionButtons[j].classList.toggle('active');
        accordionContentWraps[j].classList.toggle('active');
      }
    }
  });
});
