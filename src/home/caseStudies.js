export function initCaseStudies() {
  const caseStudies = document.querySelectorAll(".case-study-item");

  if (!caseStudies) {
    return;
  }

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

  // Case Studies animations ======================================== //
  caseStudies.forEach((el, i) => {
    const tl = gsap.timeline();
    const projectId = el.dataset.project;
    const trigger = document.querySelector(
      `.case-study-spacer[data-project="${projectId}"]`
    );
    const mask = el.querySelector(".case-study-item-inner");
    const img = el.querySelector(".case-study-item-img");
    
    if (i === 0) {
      gsap.set(document.querySelector(".case-studies-overlay"), {
        opacity: 1,
      });
      gsap.set(document.querySelector(".hero-video-bg-wrapper"), {
        opacity: 1,
      });
      gsap.set(document.querySelector(".case-studies-overlay-text"), {
        y: "0rem",
      });
      gsap.set(document.querySelectorAll(".case-study-item-footer"), {opacity: 0});

      if (window.outerWidth > 767) {
        const wrapper = document.querySelector('.portfolio-sticky-wrapper');
        gsap.set(wrapper, { y: "-12rem", width: "30%" });

        tl.to(wrapper, {
        ease: "none",
          y: "0rem",
          width: "100%",
          scrollTrigger: {
            trigger: trigger,
            scrub: true,
            start: "top bottom",
            end: "top top",
          },
        });
      }
  
      gsap.to(document.querySelectorAll(".case-study-item-footer"), {
        ease: "none",
        opacity: 1,
        scrollTrigger: {
          trigger: trigger,
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      });

      gsap.to(document.querySelector(".case-studies-overlay"), {
        ease: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: trigger,
          scrub: true,
          start: "top bottom",
          end: "top center",
          onLeave: () => {
            gsap.set(document.querySelector(".case-studies-overlay"), { display: "none" });
          },
          onEnterBack: () => {
            gsap.set(document.querySelector(".case-studies-overlay"), { display: "block" });
          },
        },
      });

      gsap.to(document.querySelector(".case-studies-overlay-text"), {
        ease: "none",
        y: "-10rem",
        scrollTrigger: {
          trigger: trigger,
          scrub: true,
          start: "top bottom",
          end: "top center",
        },
      });
      gsap.to(document.querySelector(".hero-video-bg-wrapper"), {
        ease: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: document.querySelector(".section-hero"),
          scrub: true,
          start: "top top",
          end: "bottom top",
        },
      });

      return;
    }

    gsap.set(mask, {
      maskImage:
        "radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0) 65%)",
      maskRepeat: "no-repeat",
      maskPosition: "center",
      maskSize: maskSizeStart,
    });

    gsap.set(mask, { display: "none" });

    tl.to(mask, {
      ease: "none",
      maskSize: maskSizeEnd,
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "top bottom",
        end: "100vh top",
      },
    });

    gsap.to(mask, {
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          gsap.set(mask, { display: "block" });
        },
        onEnterBack: () => {
          gsap.set(mask, { display: "block" });
        },
        onLeave: () => {
          gsap.set(mask, { display: "none" });
        },
        onLeaveBack: () => {
          gsap.set(mask, { display: "none" });
        },
      },
    });

    tl.from(img, {
      scale: 1.2,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "top bottom",
        end: "bottom center",
      },
    });
  });
}
