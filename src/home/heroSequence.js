export function initHeroSection() {
  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";

  // Prevent onSplit initialization logic from running multiple times
  let hasRunSplitInit = false;

  // Prevent flash: always hide lines as early as possible
  gsap.set(".hero-subheadline .line", { yPercent: 100 });

  // Split headline
  SplitText.create(".hero-subheadline", {
    type: "lines",
    mask: "lines",
    linesClass: "line",
    autoSplit: true,
    onSplit: () => {
      if (hasRunSplitInit) return; // <-- only runs once per page load
      hasRunSplitInit = true;

      gsap.set(".hero-line._02, .hero-line._03", { height: 0 });
      gsap.set(".header", { yPercent: -100 });
      gsap.set(".hero-video-bg", { opacity: 0 });
      gsap.set(".hero-subheadline .line", { yPercent: 100 });
      gsap.set(".section-reels", { marginTop: "0rem" });
    },
  });

  const heroVideo = document.querySelector(".hero-video-bg video");

  // Intro timeline (starts paused)
  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      if (canUseDOM) {
        window.sessionStorage.setItem("heroIntroPlayed", "true");
      }
    },
  });

  // Animation sequence --------------------------------------------
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
        yPercent: 0,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=1"
    )
    .to(
      ".hero-subheadline .line",
      {
        yPercent: 0,
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
          heroVideo?.play();
        },
      },
      "-=1.5"
    )
    .to(
      ".section-reels",
      {
        marginTop: "-12rem",
        duration: 0.5,
        ease: "power4.Out",
      },
      "-=0.5"
    );

  // Check if intro was already played this session
  const hasSeenIntro =
    canUseDOM && window.sessionStorage.getItem("heroIntroPlayed") === "true";

  // Play or skip
  if (hasSeenIntro) {
    // Jump straight to end state
    tl.progress(1);
  } else {
    // First visit: delay then play
    setTimeout(() => tl.play(), 1000);
  }
}
