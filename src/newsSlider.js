function initNewsSlider() {
  if (!document.querySelector(".news-slider")) {
    return;
  }

  const sliders = document.querySelectorAll(".news-slider_wrapper");

  sliders.forEach((s) => {
    const sliderEl = s.querySelector('.news-slider');

    if (!sliderEl) {
      return
    }

    const slider = new Swiper(sliderEl, {
      slidesPerView: "auto",
      navigation: {
        nextEl: s.querySelector(".news-section_arrows .button.next"),
        prevEl: s.querySelector(".news-section_arrows .button.prev"),
      },
      // spaceBetween: 30,
    });

    // gsap logic
    const slides = s.querySelectorAll(".news-item");
    gsap.set(slides, {
      y: "3rem",
      opacity: 0,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: s,
        start: "25% bottom",
        onEnter: () => {
          gsap.to(
            slides,
            {
              y: "0rem",
              opacity: 1,
              stagger: 0.1,
              duration: 0.5,
              ease: "expo.out"
            }
          );
        },
      },
    });

    // slides.forEach((slide) => {
    //   const c01 = slide.querySelector('.news-item-thumb-img._01');
    //   const c02 = slide.querySelector('.news-item-thumb-img._03');

    //   const tl = gsap.timeline({ paused: true });

    //   tl.to(c01, {
    //     scale: .8,
    //     duration: .3,
    //     ease: "expo.inOut"
    //   }).to(c02, {
    //     scale: .6,
    //     duration: .3,
    //     ease: "expo.inOut"
    //   }, "-=0.3");

    //   slide.addEventListener('mouseover', () => { tl.play(); })
    //   slide.addEventListener('mouseout', () => { tl.reverse(); })
    // });
  });
}

document.fonts.ready.then(() => {
  initNewsSlider();
});
