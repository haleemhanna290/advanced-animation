# Animation Documentation

## 1. Preloader
Technology: GSAP Timeline

The preloader introduces the Aurelia brand by fading in the main wordmark, revealing the studio subtitle, and expanding a horizontal loading line. This is handled with a single GSAP timeline for a clean sequence that exits quickly without artificial delays.

## 2. Hero Entrance
Technology: GSAP Timeline

The hero uses a coordinated sequence to reveal the navigation, image, headline, supporting text, and CTA buttons. The image gets a clip-path-driven reveal, while each headline line animates upward with staggered timing to create a premium editorial introduction.

## 3. Scroll Reveals
Technology: GSAP ScrollTrigger

Sections such as the introduction, philosophy, CTA, and projects use `ScrollTrigger` to animate when they enter the viewport. These animations rely on opacity and vertical y-offset transitions to keep the motion refined and readable.

## 4. Project Hover
Technology: GSAP / CSS

Project cards use subtle hover motion to scale media, darken overlays, elevate text, and rotate the arrow. The effects are restrained so they still feel premium without becoming distracting or inaccessible on touch devices.

## 5. Image Parallax
Technology: ScrollTrigger

Hero and project imagery use gentle scroll-based parallax movement. The motion is intentionally slow and subtle to feel immersive without creating visual instability or performance issues.

## 6. Horizontal Text
Technology: ScrollTrigger

The decorative marquee moves horizontally as the user scrolls. It adds rhythm and motion to the page without affecting core content layout or readability.

## 7. Magnetic Buttons
Technology: JavaScript + GSAP

Buttons with the `data-magnetic` attribute respond to pointer movement by shifting a few pixels in the direction of the cursor. This creates a subtle lift while preventing excessive motion or jarring behavior.

## 8. Custom Cursor
Technology: JavaScript + GSAP

On desktop devices, a custom circular cursor follows the pointer and expands when hovering interactive elements. Project cards display a VIEW label to signal the interaction, while touch devices ignore the effect to preserve natural behavior.

## 9. Statistics Counter
Technology: GSAP

The statistics section counts from zero to the target number once each element enters the viewport. This creates a polished highlight without repeated refreshes when a user scrolls back up.

## 10. Reduced Motion
Technology: CSS + JavaScript

The project checks `prefers-reduced-motion` in both CSS and JavaScript. When reduced motion is enabled, animations are simplified or removed entirely, content remains immediately accessible, and the site remains usable for all users.

## 11. Performance Optimization

The animation system prioritizes `transform` and `opacity` because they are typically the most efficient CSS properties for motion. Avoiding large layout-affecting properties helps preserve smooth performance, especially on lower-powered devices.

The project also uses ScrollTrigger rather than manual scroll listeners to centralize and optimize updates, while lazy-loading below-the-fold images helps keep the initial page load efficient.
