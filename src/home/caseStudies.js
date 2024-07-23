export function initCaseStudies() {
gsap.set(".case-study-item-inner", {
  maskImage:
    "radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0) 65%)",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "0vw 0vw",
});

// Case Studies animations ======================================== //
document.querySelectorAll(".case-study-item").forEach((trigger) => {
  const tl = gsap.timeline();
  const mask = trigger.querySelector(".case-study-item-inner");
  const img = trigger.querySelector(".case-study-item-img");

  tl.to(mask, {
    ease: "none",
    maskSize: "200vw 200vw",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        trigger.style.pointerEvents = "auto";
      },
      onEnterBack: () => {
        trigger.style.pointerEvents = "auto";
      },
      onLeave: () => {
        trigger.style.pointerEvents = "auto";
      },
      onLeaveBack: () => {
        trigger.style.pointerEvents = "auto";
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
      start: "top top",
      end: "center center",
    },
  });
});

document.querySelectorAll(".case-study-title").forEach((trigger) => {
  const el = trigger.querySelector(".case-study-item-marquee");
  gsap.fromTo(
    el,
    {
      yPercent: 100,
    },
    {
      ease: "none",
      yPercent: 0,
      // duration: 1,
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "10% top",
        end: "20% top",
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    el,
    {
      yPercent: 0,
    },
    {
      yPercent: -100,
      ease: "none",
      immediateRender: false,
      // duration: 1,
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "110% top",
        end: "120% top",
        // markers: true,
      },
    }
  );
});  
}