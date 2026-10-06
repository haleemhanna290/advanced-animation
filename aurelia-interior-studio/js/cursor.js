document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  if (reduceMotion || isTouch) {
    return;
  }

  const cursor = document.querySelector('.cursor');
  if (!cursor) return;

  const viewableTargets = document.querySelectorAll('a, button, .project-card, .service-row, .magnetic');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  const setCursorPosition = () => {
    window.gsap.to(cursor, {
      x: mouseX,
      y: mouseY,
      duration: 0.22,
      ease: 'power3.out',
    });
  };

  document.addEventListener('pointermove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.classList.add('is-visible');
    setCursorPosition();
  });

  viewableTargets.forEach((target) => {
    target.addEventListener('pointerenter', () => {
      cursor.classList.add('is-active');
      if (target.classList.contains('project-card')) {
        cursor.querySelector('.cursor__label').textContent = 'VIEW';
      } else {
        cursor.querySelector('.cursor__label').textContent = '';
      }
    });

    target.addEventListener('pointerleave', () => {
      cursor.classList.remove('is-active');
      cursor.querySelector('.cursor__label').textContent = 'VIEW';
    });
  });

  document.addEventListener('pointerleave', () => {
    cursor.classList.remove('is-visible');
  });

  setCursorPosition();
});
