export function initCaseStudies() {
  const caseStudies = document.querySelectorAll(".case-study-item");
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
      const wrapper = document.querySelector('.portfolio-sticky-wrapper');
      gsap.set(wrapper, { y: "0rem", width: "30%" });
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
  
      tl.to(wrapper, {
        ease: "none",
        y: "12rem",
        width: "100%",
        scrollTrigger: {
          trigger: trigger,
          scrub: true,
          start: "top bottom",
          end: "top top",
          // onEnter: () => {
          //   el.style.pointerEvents = "auto";
          // },
          // onEnterBack: () => {
          //   el.style.pointerEvents = "auto";
          // },
          // onLeave: () => {
          //   el.style.pointerEvents = "auto";
          // },
          // onLeaveBack: () => {
          //   el.style.pointerEvents = "auto";
          // },
        },
      });

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
      maskSize: "0vw 0vw",
    });

    gsap.set(mask, { display: "none" });

    tl.to(mask, {
      ease: "none",
      maskSize: "200vw 200vw",
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
