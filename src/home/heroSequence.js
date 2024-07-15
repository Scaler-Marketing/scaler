import { setLinesWrapper } from "../modules/setLinesWrapper";

export function initHeroSection() {
  const heroSubheadline = new SplitType(".hero-subheadline p", {
    types: "lines",
    tagName: "span",
  });

  setLinesWrapper(heroSubheadline.lines);

  const tl = gsap.timeline();
  gsap.set(".hero-line._02, .hero-line._03", { height: 0 });
  gsap.set(".header", { y: "-100%" });
  gsap.set(".hero-subheadline .line", { y: "100%" });
  gsap.set(".hero-video-bg", { opacity: 0 });
  gsap.set(".reels-video-container", { y: "12rem" });
  gsap.set(".brand-core-text .word", { yPercent: 100 });
  gsap.set(".case-study-item-inner", { clipPath: "inset(50%)" });

  const heroVideo = document.querySelector(".hero-video-bg video");
  const reelsThumb = document.querySelector(".reels-video-thumb");
  reelsThumb.muted = true;
  reelsThumb.loop = true;
  reelsThumb.playsinline = true;

  tl.to(".hero-words-wrapper", {
    y: "-33.33%",
    duration: 1,
    ease: "expo.inOut",
  })
    .to(".hero-words-wrapper", {
      y: "-66.66%",
      duration: 1,
      ease: "expo.inOut",
    })
    .to(
      ".hero-line",
      {
        height: "25vh",
        duration: 1,
        ease: "power4.inOut",
      },
      2.1
    )
    .to(".hero-line-spacer", {
      width: "100%",
      duration: 1,
      ease: "power4.inOut",
    })
    .to(
      ".header",
      {
        y: "0%",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=1"
    )
    .to(
      ".hero-subheadline .line",
      {
        y: "0%",
        duration: 0.5,
        ease: "power4.Out",
        stagger: 0.05,
      },
      "-=0.5"
    )
    .to(
      ".hero-video-bg",
      {
        opacity: "100%",
        duration: 0.5,
        ease: "power4.Out",
        onStart: () => {
          heroVideo.play();
        },
      },
      "-=1.5"
    )
    .to(
      ".reels-video-container",
      {
        y: "0rem",
        duration: 0.5,
        ease: "power4.Out",
        onStart: () => {
          reelsThumb.play();
        },
      },
      "-=0.5"
    );
}
