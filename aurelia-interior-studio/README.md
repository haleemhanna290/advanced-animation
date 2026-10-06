# Aurelia – Creative Interior Studio

## Overview

Aurelia is a premium single-page interior design studio website created to demonstrate advanced front-end animation techniques using GSAP and GSAP ScrollTrigger. The project highlights cinematic motion, elegant editorial layouts, and polished interaction patterns suitable for a creative studio brand.

## Features

- Premium interior design landing page with luxury editorial styling
- GSAP-powered preloader and hero entrance animation
- Scroll-triggered section reveals and staggered transitions
- Project card hover animations with layered motion and dark overlays
- Horizontal decorative marquee animation
- Service and philosophy interaction patterns
- Animated statistics counter
- Magnetic CTA and action buttons
- Desktop custom cursor with hover states
- Responsive mobile navigation and adaptive layout
- Accessibility-first semantics and reduced-motion support

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- GSAP
- GSAP ScrollTrigger

## Animation Features

- Preloader timeline with brand fade-in and loading bar expansion
- Hero content reveal sequence with layered GSAP timeline
- Scroll-based fades, y-offset reveals, and staggered entrances
- Horizontal motion using ScrollTrigger for decorative marquee text
- Parallax effect for supporting imagery
- Magnetic desktop button behavior
- Custom cursor interactions for hover states
- Counter animation for studio statistics

## Accessibility

- Semantic HTML for structural clarity
- Keyboard-accessible navigation and interactive elements
- Visible focus states across buttons and links
- ARIA labels and state updates for menu toggles
- Reduced motion support using `prefers-reduced-motion`
- Responsive layout that remains usable without hover or animation

## Performance

- Motion is built around transform and opacity for efficiency
- ScrollTrigger is used instead of repeated scroll listeners
- Images are lazy-loaded below the fold, while the hero image remains eager
- No heavy frameworks or libraries beyond GSAP
- Animations are simplified for mobile and reduced-motion users

## Project Structure

```text
aurelia-interior-studio/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── animations.js
│   ├── interactions.js
│   └── cursor.js
├── assets/
│   ├── images/
│   └── icons/
├── README.md
├── ANIMATIONS.md
└──
```

## Running Locally

1. Open the project folder in a browser, or serve it locally using a simple static server.
2. For example:

```bash
cd aurelia-interior-studio
python -m http.server 8000
```

3. Open `http://localhost:8000` in a browser.

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

## Future Improvements

- Add a dedicated project detail page
- Include a contact form with validation
- Expand the immersive gallery with extra animated case studies
- Add more refined CMS-style content structure for content editing

## Author

Created for Codveda Technologies — Front-End Development Internship, Level 3, Task 3: Advanced Animations.
