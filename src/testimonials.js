function initTestimonialsGradients() {
  // Variables
  let sliderContent = document.querySelectorAll(".testimonial-item");
  if (!sliderContent) {
    return;
  }
  let nextButton = document.querySelector(".button.next");
  let prevButton = document.querySelector(".button.prev");
  let currentIndex = 0;

  const mm = gsap.matchMedia();
  let maskSize = "100vw 100vw";

  mm.add("(min-width: 768px)", () => {
    // desktop
    maskSize = "100vw 100vw";
  });

  mm.add("(max-width: 767px)", () => {
    // mobile
    maskSize = "100vh 100vh";
  });


  gsap.set(".testimonial-item", {
    maskRepeat: "no-repeat",
    maskPosition: "center",
    maskSize,
  });
  gsap.set(".testimonial-item:not(:first-child)", {
    maskImage:
      "radial-gradient(circle at 50% 50%, black 0%, rgba(0, 0, 0, 0) 0%)",
  });

  if (nextButton) {
    // Next button click
    nextButton.addEventListener("click", function () {
      let currentSlide = sliderContent[currentIndex];
      if (currentIndex < sliderContent.length - 1) {
        let nextSlide = sliderContent[currentIndex + 1];
  
        transitionSlides(currentSlide, nextSlide);
        currentIndex++;
      } else {
        let nextSlide = sliderContent[0];
  
        transitionSlides(currentSlide, nextSlide);
        currentIndex = 0;
      }
    });
  }

  if (prevButton) {
    // Prev button click
    prevButton.addEventListener("click", function () {
      let currentSlide = sliderContent[currentIndex];
      if (currentIndex > 0) {
        let prevSlide = sliderContent[currentIndex - 1];
  
        transitionSlides(currentSlide, prevSlide);
        currentIndex--;
      } else {
        let prevSlide = sliderContent[sliderContent.length - 1];
  
        transitionSlides(currentSlide, prevSlide);
        currentIndex = sliderContent.length - 1;
      }
    });
  }
}

function transitionSlides(current, next) {
  gsap.fromTo(
    next,
    {
      maskImage:
        "radial-gradient(circle at 50% 50%, black 0%, rgba(0, 0, 0, 0) 5%)",
    },
    {
      duration: 1,
      // ease: "expo.out",
      maskImage:
        "radial-gradient(circle at 50% 50%, black 100%, rgba(0, 0, 0, 0) 100%)",
      onComplete: () => {
        gsap.set(next, { maskImage: "none" });
      }
    }
  );

  gsap.fromTo(
    current,
    {
      maskImage:
        "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 0%, black 5%)",
    },
    {
      duration: 1,
      // ease: "expo.out",
      maskImage:
        "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 100%, black 100%)",
    }
  );

  const tl = gsap.timeline();

  tl.fromTo(
    next.querySelector("p"),
    {
      opacity: 0,
      scale: 0.8,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "expo.out",
    }
  ).fromTo(
    next.querySelector(".testimonials-source"),
    {
      opacity: 0,
      yPercent: 100,
    },
    {
      opacity: 1,
      yPercent: 0,
      duration: .5,
      // ease: "expo.out",
    },
    "-=1"
  );
}
document.fonts.ready.then(() => {
  initTestimonialsGradients();
});
