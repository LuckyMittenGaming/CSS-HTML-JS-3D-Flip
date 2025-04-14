
document.addEventListener("DOMContentLoaded", () => {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const cards = document.querySelectorAll('.container');
  cards.forEach(card => {
    if (isTouch) {
      card.addEventListener('click', () => card.classList.toggle('flipped'));
    } else {
      card.classList.add('hover-flip');
    }
  });
});
