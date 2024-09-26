import { setLinesWrapper } from "./modules/setLinesWrapper";

function initIntroAnimation() {
  const els =  new SplitType(document.querySelectorAll('.section.hero-internal .heading-span'), {
    types: "lines, words",
    tagName: "span",
  });

  // setLinesWrapper(els.lines, () => {
    gsap.set(els.words, { yPercent: 100 });
  // });

  gsap.to(els.words, {
    yPercent: 0,
    stagger: 0.05,
    delay: 0.5,
    ease: "power4.out"
  });
}

function initClientsCarousel() {
  const carousel = document.querySelector('.client-logos_wrapper');

  if (!carousel) {
    return;
  }

  const items = carousel.querySelectorAll('.client-logos'),
    allLogos = carousel.querySelectorAll('.client-logos_item');
  
  if (!items || !allLogos) {
    return;
  }
  
  const logosAmount = items[0].querySelectorAll('.client-logos_item').length;
  const duration = logosAmount * 5;  
  const tl = gsap.timeline({ paused: true, repeat: -1 });
  gsap.set(items, { xPercent: 0 });


  tl.to(items, {
    xPercent: -100,
    duration,
    ease: "none"
  });

  allLogos.forEach((logo) => {
    logo.addEventListener("mouseenter", () => {
      tl.pause();
    });
    logo.addEventListener("mouseout", () => {
      tl.play();
    });
  });


  tl.play();
}

initClientsCarousel();
document.fonts.ready.then(() => {
  initIntroAnimation();
});