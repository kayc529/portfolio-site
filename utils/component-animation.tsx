const VISIBLE_DISTANCE = 250;

export const setAnimations = () => {
  revealAnimatedElements();
};

export const revealAnimatedElements = () => {
  let elementsToReveal = document.querySelectorAll('.--reveal');

  for (let i = 0; i < elementsToReveal.length; i++) {
    let windowHeight = window.innerHeight;
    var elementTop = elementsToReveal[i].getBoundingClientRect().top;
    if (elementTop < windowHeight - VISIBLE_DISTANCE) {
      elementsToReveal[i].classList.add('active');
    } else {
      elementsToReveal[i].classList.remove('active');
    }
  }
};
