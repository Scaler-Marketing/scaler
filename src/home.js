import { setLinesWrapper } from "./modules/setLinesWrapper";
import { setBrandCoreText } from "./home/brandCoreText";
import { initHeroSection } from "./home/heroSequence";

// set hero sequence
initHeroSection();
// Brand Core section
setBrandCoreText();

gsap.set(".hero-line._02, .hero-line._03", { height: 0 });
gsap.set(".header", { y: "-100%" });
gsap.set(".hero-subheadline .line", { y: "100%" });
gsap.set(".hero-video-bg", { opacity: 0 });
gsap.set(".reels-video-container", { y: "12rem" });
gsap.set(".brand-core-text .word", { yPercent: 100 });
gsap.set(".case-study-item-inner", { clipPath: "inset(50%)" });

// Case Studies animations ======================================== //
document.querySelectorAll(".case-study-item").forEach((trigger) => {
  const tl = gsap.timeline();
  const mask = trigger.querySelector(".case-study-item-inner");
  const img = trigger.querySelector(".case-study-item-img");

  tl.to(mask, {
    clipPath: "inset(0%)",
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "center center",
    },
  });

  tl.from(img, {
    scale: 1.2,
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "center center",
    },
  });
});
