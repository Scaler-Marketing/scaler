function initIntroAnimation() {
  const els =  new SplitType(document.querySelectorAll('.section.hero-internal .heading-span'), {
    types: "lines, words",
    tagName: "span",
  });

  gsap.set(els.words, { yPercent: 100 });

  gsap.to(els.words, {
    yPercent: 0,
    stagger: 0.05,
    delay: 0.5,
    ease: "power4.out"
  });
}

document.fonts.ready.then(() => {
  initIntroAnimation();
});