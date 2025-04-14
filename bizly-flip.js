document.addEventListener("DOMContentLoaded", () => {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const containers = document.querySelectorAll('.container');

  containers.forEach(container => {
    if (isTouch) {
      container.addEventListener('click', () => {
        container.classList.toggle('flipped');
      });
    } else {
      container.classList.add('hover-flip');
    }
  });
});