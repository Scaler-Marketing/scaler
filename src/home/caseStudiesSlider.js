export function initCaseStudiesSlider() {
  const slider = document.querySelector(".case-studies-wrapper");
  const slides = [...slider.querySelectorAll(".case-study-item")];
  const nextBtn = document.querySelector(".case-studies-controls .next");
  const prevBtn = document.querySelector(".case-studies-controls .prev");

  const mm = gsap.matchMedia();
  let maskSizeStart = "0vw 0vw";
  let maskSizeEnd = "200vw 200vw";

  mm.add("(min-width: 768px)", () => {
    // desktop
    maskSizeStart = "0vw 0vw";
    maskSizeEnd = "200vw 200vw";
  });

  mm.add("(max-width: 767px)", () => {
    // mobile
    maskSizeStart = "0vh 0vh";
    maskSizeEnd = "200vh 200vh";
  });

  let current = 0;
  // let autoplayTimer;
  // const interval = 6; // seconds

  // Step 1: Split all [data-slider-stagger] elements
  slides.forEach((slide, i) => {
    const mask = slide.querySelector(".case-study-item-inner");
    const img = slide.querySelector(".case-study-item-img");
    const targets = slide.querySelectorAll("[data-slider-stagger]");
    targets.forEach((el) => {
      SplitText.create(el, {
        type: "words",
        mask: "words",
        wordsClass: "word",
        autoSplit: true,
        onSplit: (self) => {
          if (i > 0) {
            gsap.set(self.words, { yPercent: 100 });
          }
        },
      });
    });

    gsap.set(mask, {
      maskImage:
        "radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0) 65%)",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      maskSize: i === 0 ? maskSizeEnd : maskSizeStart,
    });
  
    if (i > 0) {
      gsap.set(mask, { display: "none" });
      gsap.set(img, { scale: 1.2 });
    }
  });

  function animateTextIn(slide) {
    const targets = slide.querySelectorAll("[data-slider-stagger] .word");
    gsap.to(targets, {
      yPercent: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.06,
    });
  }

  function resetText(slide) {
    const targets = slide.querySelectorAll("[data-slider-stagger] .word");
    gsap.set(targets, { yPercent: 100 });
  }

  function goToSlide(index) {
    if (index === current || gsap.isTweening(slides[current])) return;

    const currentSlide = slides[current];
    const currentMask = currentSlide.querySelector(".case-study-item-inner");
    const nextSlide = slides[index];
    const nextMask = nextSlide.querySelector(".case-study-item-inner");
    const img = nextSlide.querySelector(".case-study-item-img");

    // Kill active tweens
    gsap.killTweensOf([currentSlide, nextSlide]);

    slides.forEach((slide) => slide.classList.remove("is-current"));

    gsap.set(nextSlide, { zIndex: 2 });
    gsap.set(currentSlide, { zIndex: 1 });
    gsap.set(nextMask, { display: "block", maskSize: maskSizeStart });

    gsap.to(nextMask, {
      maskSize: maskSizeEnd,
      duration: 0.6,
      onStart: () => {
        nextSlide.classList.add("is-current");
      },
      onComplete: () => {
        gsap.set(currentSlide, { zIndex: 1 });
        gsap.set(currentMask, { display: "none" });

        resetText(currentSlide);
        animateTextIn(nextSlide);
        current = index;
      },
    });

    gsap.to(img, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  function nextSlide() {
    goToSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    goToSlide((current - 1 + slides.length) % slides.length);
  }

  // function startAutoplay() {
  //   autoplayTimer = gsap.delayedCall(interval, () => {
  //     nextSlide();
  //     startAutoplay();
  //   });
  // }

  // function resetAutoplay() {
  //   if (autoplayTimer) autoplayTimer.kill();
  //   startAutoplay();
  // }

  // Arrow navigation
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    // resetAutoplay();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    // resetAutoplay();
  });

  // Initial setup
  gsap.set(slides, { zIndex: 1 });
  gsap.set(slides[0], { zIndex: 2 });
  slides[0].classList.add("is-current");
  animateTextIn(slides[0]);
  goToSlide(0);
}
