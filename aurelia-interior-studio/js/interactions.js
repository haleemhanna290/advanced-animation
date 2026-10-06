document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initMagneticButtons = () => {
    if (reduceMotion) return;

    const buttons = document.querySelectorAll('.magnetic');

    buttons.forEach((button) => {
      const handleMove = (event) => {
        const rect = button.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        const limitedX = Math.max(Math.min(offsetX / 4, 12), -12);
        const limitedY = Math.max(Math.min(offsetY / 4, 12), -12);

        window.gsap.to(button, {
          x: limitedX,
          y: limitedY,
          duration: 0.35,
          ease: 'power2.out',
        });
      };

      const reset = () => {
        window.gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      button.addEventListener('pointermove', handleMove);
      button.addEventListener('pointerleave', reset);
      button.addEventListener('blur', reset);
    });
  };

  const initServiceRowInteractions = () => {
    const serviceRows = document.querySelectorAll('.service-row');

    serviceRows.forEach((row) => {
      const description = row.querySelector('.service-row__text p');
      const number = row.querySelector('.service-row__number');
      const arrow = row.querySelector('.service-row__arrow');

      const reveal = () => {
        if (!description) return;
        row.style.background = 'rgba(255,255,255,0.18)';
        row.style.borderColor = 'rgba(23, 20, 18, 0.18)';
        if (number) number.style.opacity = '0.45';
        if (arrow) {
          arrow.style.transform = 'translateX(6px)';
        }
        description.style.maxHeight = `${description.scrollHeight}px`;
        description.style.opacity = '1';
      };

      const leave = () => {
        if (!description) return;
        row.style.background = 'rgba(255,255,255,0.08)';
        row.style.borderColor = 'rgba(23, 20, 18, 0.12)';
        if (number) number.style.opacity = '1';
        if (arrow) {
          arrow.style.transform = 'translateX(0)';
        }
        description.style.maxHeight = '0';
        description.style.opacity = '0';
      };

      row.addEventListener('mouseenter', reveal);
      row.addEventListener('mouseleave', leave);
      row.addEventListener('focus', reveal);
      row.addEventListener('blur', leave);
      row.addEventListener('click', () => {
        if (description && description.style.maxHeight === '0px') {
          reveal();
        } else {
          leave();
        }
      });
    });
  };

  const initProjectHoverAccessibility = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      card.addEventListener('focus', () => {
        const media = card.querySelector('.project-card__media img');
        const overlay = card.querySelector('.project-card__overlay');
        const meta = card.querySelector('.project-card__meta');
        if (media) {
          window.gsap.to(media, { scale: 1.08, duration: 0.45, ease: 'power2.out' });
        }
        if (overlay) {
          window.gsap.to(overlay, { opacity: 0.85, duration: 0.25, ease: 'power2.out' });
        }
        if (meta) {
          window.gsap.to(meta, { y: -10, duration: 0.25, ease: 'power2.out' });
        }
      });

      card.addEventListener('blur', () => {
        const media = card.querySelector('.project-card__media img');
        const overlay = card.querySelector('.project-card__overlay');
        const meta = card.querySelector('.project-card__meta');
        if (media) {
          window.gsap.to(media, { scale: 1, duration: 0.45, ease: 'power2.out' });
        }
        if (overlay) {
          window.gsap.to(overlay, { opacity: 0.7, duration: 0.25, ease: 'power2.out' });
        }
        if (meta) {
          window.gsap.to(meta, { y: 0, duration: 0.25, ease: 'power2.out' });
        }
      });
    });
  };

  initMagneticButtons();
  initServiceRowInteractions();
  initProjectHoverAccessibility();
});
