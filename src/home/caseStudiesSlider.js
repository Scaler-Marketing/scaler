export function initCaseStudiesSlider() {
  const slider = document.querySelector(".case-studies-wrapper");
  const slides = [...slider.querySelectorAll(".case-study-item")];
  const nextBtn = document.querySelector(".case-studies-controls .next");
  const prevBtn = document.querySelector(".case-studies-controls .prev");
  const pagination = document.querySelector(".case-studies-pagination");

  const mm = gsap.matchMedia();
  let maskSizeStart = "0vw 0vw";
  let maskSizeEnd = "200vw 200vw";

  mm.add("(min-width: 768px)", () => {
    maskSizeStart = "0vw 0vw";
    maskSizeEnd = "200vw 200vw";
  });

  mm.add("(max-width: 767px)", () => {
    maskSizeStart = "0vh 0vh";
    maskSizeEnd = "200vh 200vh";
  });

  let current = 0;

  // Create bullets
  const bullets = slides.map((_, index) => {
    const bullet = document.createElement("div");
    bullet.classList.add("case-studies_bullet");
    if (index === 0) bullet.classList.add("is-active");
    bullet.addEventListener("click", () => {
      goToSlide(index);
    });
    pagination?.appendChild(bullet);
    return bullet;
  });

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

  function updateBullets(index) {
    bullets.forEach((b, i) => {
      b.classList.toggle("is-active", i === index);
    });
  }

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
        updateBullets(index);
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

  nextBtn?.addEventListener("click", () => {
    nextSlide();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
  });

  gsap.set(slides, { zIndex: 1 });
  gsap.set(slides[0], { zIndex: 2 });
  slides[0].classList.add("is-current");
  animateTextIn(slides[0]);
  goToSlide(0);
}
