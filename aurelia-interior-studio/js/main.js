document.addEventListener('DOMContentLoaded', () => {
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.body.classList.add(reduceMotionQuery.matches ? 'reduce-motion' : 'has-motion');

  const navLinks = document.querySelectorAll('.nav__link');
  const sections = [...document.querySelectorAll('main section[id]')];

  const setActiveNav = () => {
    const scrollPosition = window.scrollY + 180;
    let currentId = '#top';

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        currentId = `#${section.id}`;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === currentId;
      link.classList.toggle('is-active', isActive);
    });
  };

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();

  const progressBar = document.querySelector('.page-progress');
  if (progressBar && window.gsap && window.ScrollTrigger) {
    const reduceMotion = reduceMotionQuery.matches;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    };

    if (reduceMotion) {
      updateProgress();
      window.addEventListener('scroll', updateProgress, { passive: true });
    } else {
      ScrollTrigger.create({
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          progressBar.style.width = `${self.progress * 100}%`;
        },
      });
    }
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const siteHeader = document.querySelector('.site-header');

  if (menuToggle && mobileMenu && siteHeader) {
    const closeMenu = () => {
      siteHeader.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('hidden', 'hidden');
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = siteHeader.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        mobileMenu.removeAttribute('hidden');
      } else {
        mobileMenu.setAttribute('hidden', 'hidden');
      }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  const updateHeaderState = () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('is-scrolled');
    } else {
      siteHeader?.classList.remove('is-scrolled');
    }
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
});
