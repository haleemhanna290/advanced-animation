document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  const { gsap } = window;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initPreloader = () => {
    const preloader = document.querySelector('.preloader');
    const brand = document.querySelector('.preloader__brand');
    const subtitle = document.querySelector('.preloader__subtitle');
    const line = document.querySelector('.preloader__line span');

    if (!preloader || !brand || !subtitle || !line) return;

    if (reduceMotion) {
      document.body.classList.add('is-loaded');
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl
      .set(preloader, { autoAlpha: 1 })
      .from(brand, { autoAlpha: 0, scale: 0.9, duration: 0.9 })
      .from(subtitle, { autoAlpha: 0, y: 20, duration: 0.7 }, '-=0.45')
      .to(line, { width: '100%', duration: 1.2, ease: 'power2.inOut' }, '-=0.2')
      .to(preloader, { autoAlpha: 0, duration: 0.8, ease: 'power2.inOut', onComplete: () => document.body.classList.add('is-loaded') }, '+=0.2');

    gsap.from('.site-header', {
      autoAlpha: 0,
      y: -20,
      duration: 0.7,
      delay: 0.8,
      ease: 'power2.out',
    });

    gsap.from('.hero__image', {
      clipPath: 'inset(10% 10% 10% 10%)',
      scale: 1.14,
      opacity: 0,
      duration: 1.3,
      ease: 'power2.out',
      delay: 0.9,
    });

    gsap.from('.hero__heading .line', {
      y: 70,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 1.05,
    });

    gsap.from('.hero__subtitle', {
      opacity: 0,
      y: 24,
      duration: 0.8,
      delay: 1.4,
      ease: 'power3.out',
    });

    gsap.from('.hero__actions a', {
      opacity: 0,
      y: 18,
      duration: 0.7,
      stagger: 0.12,
      delay: 1.52,
      ease: 'power2.out',
    });

    gsap.to('.hero__badge', {
      y: -8,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1.5,
    });
  };

  const initHeroAnimation = () => {
    if (reduceMotion) {
      gsap.set(['.hero__image', '.hero__heading .line', '.hero__subtitle', '.hero__actions a'], { clearProps: 'all' });
      return;
    }

    const heroImage = document.querySelector('.hero__image');
    if (heroImage) {
      gsap.to(heroImage, {
        yPercent: -3,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }
  };

  const initScrollAnimations = () => {
    const revealTargets = document.querySelectorAll('.fade-up, .intro__text .line, .service-row, .principle, .cta__inner h2, .testimonial__inner');

    revealTargets.forEach((element) => {
      const trigger = element.closest('section') || element;
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger,
            start: 'top 82%',
          },
        }
      );
    });

    gsap.from('.section-heading', {
      autoAlpha: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.section-heading',
        start: 'top 85%',
      },
    });
  };

  const initProjectAnimations = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { autoAlpha: 0, y: 45 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
          },
        }
      );

      const image = card.querySelector('.project-card__media img');
      const overlay = card.querySelector('.project-card__overlay');
      const meta = card.querySelector('.project-card__meta');
      const number = card.querySelector('.project-card__number');
      const arrow = card.querySelector('.project-card__arrow');

      if (!image || !meta || !number || !arrow) return;

      card.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
        gsap.to(overlay, { opacity: 0.85, duration: 0.35, ease: 'power2.out' });
        gsap.to(meta, { y: -12, duration: 0.35, ease: 'power2.out' });
        gsap.to(arrow, { rotate: 45, duration: 0.35, ease: 'power2.out' });
        gsap.to(number, { autoAlpha: 0.4, duration: 0.25, ease: 'power2.out' });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
        gsap.to(overlay, { opacity: 0.7, duration: 0.35, ease: 'power2.out' });
        gsap.to(meta, { y: 0, duration: 0.35, ease: 'power2.out' });
        gsap.to(arrow, { rotate: 0, duration: 0.35, ease: 'power2.out' });
        gsap.to(number, { autoAlpha: 0.8, duration: 0.25, ease: 'power2.out' });
      });
    });
  };

  const initParallax = () => {
    if (reduceMotion) return;

    gsap.utils.toArray('.project-card__media img, .hero__image-wrap').forEach((item) => {
      gsap.to(item, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: item.closest('section, .hero'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    });
  };

  const initTextAnimations = () => {
    const marquee = document.querySelector('.marquee__track');
    if (!marquee) return;

    if (reduceMotion) return;

    gsap.to(marquee, {
      xPercent: -28,
      ease: 'none',
      scrollTrigger: {
        trigger: '.marquee',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.25,
      },
    });
  };

  const initPhilosophyAnimations = () => {
    const principles = document.querySelectorAll('.principle');
    if (!principles.length) return;

    gsap.fromTo(
      principles,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.philosophy',
          start: 'top 80%',
        },
      }
    );
  };

  const initStatisticsAnimation = () => {
    const counters = document.querySelectorAll('.stat-item__value');

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target || 0);
      const suffix = counter.dataset.suffix || '';
      const pad = counter.dataset.pad === 'yes';
      const value = { current: 0 };

      gsap.to(value, {
        current: target,
        duration: 1.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: counter,
          start: 'top 90%',
          once: true,
        },
        onUpdate: () => {
          const output = Math.round(value.current);
          counter.textContent = pad && output < 10 ? `0${output}` : `${output}${suffix}`;
        },
      });
    });
  };

  const initCTAAnimation = () => {
    const cta = document.querySelector('.cta__inner');
    if (!cta) return;

    gsap.fromTo(
      cta,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cta,
          start: 'top 80%',
        },
      }
    );
  };

  initPreloader();
  initHeroAnimation();
  initScrollAnimations();
  initProjectAnimations();
  initParallax();
  initTextAnimations();
  initPhilosophyAnimations();
  initStatisticsAnimation();
  initCTAAnimation();
});
