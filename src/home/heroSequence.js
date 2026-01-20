export function initHeroSection() {
  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";

  // // Prevent onSplit initialization logic from running multiple times
  // let hasRunSplitInit = false;

  // // Split headline
  // SplitText.create(".hero-subheadline", {
  //   type: "lines",
  //   mask: "lines",
  //   linesClass: "line",
  //   autoSplit: true,
  //   onSplit: (self) => {
  //     if (hasRunSplitInit) return; // <-- only runs once per page load
  //     hasRunSplitInit = true;
  //     gsap.set(self.lines, { yPercent: 100 });

  //     setTimeout(() => {
  //       playHeroIntro();
  //     }, 50);
  //   },
  // });

  playHeroIntro();

  function playHeroIntro() {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".section_home-hero");
    const heroVideo = heroSection.querySelector(".hero-video-bg video");
    const heroHeadline = heroSection.querySelector("[data-hero-headline]");
    const heroSubheadline = heroSection.querySelector(
      "[data-hero-subheadline]"
    );
    const heroCta = heroSection.querySelector(".button");

    const headlineSplit = SplitText.create(heroHeadline, {
      type: "words",
      mask: "words",
    });
    const subheadlineSplit = SplitText.create(heroSubheadline, {
      type: "words",
      mask: "words",
    });

    gsap.set(header, { yPercent: -100 });
    gsap.set(headlineSplit.words, { yPercent: 100 });
    gsap.set(subheadlineSplit.words, { yPercent: 100 });
    gsap.set(heroCta, { yPercent: 110 });

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
    tl.fromTo(
      ".hero-words-wrapper",
      {
        y: "0%",
      },
      {
        y: "-33.33%",
        duration: 1,
        ease: "expo.inOut",
      }
    )
      .to(".hero-words-wrapper", {
        y: "-66.66%",
        duration: 1,
        ease: "expo.inOut",
      })
      .to(
        ".hero-line._01",
        {
          height: 0,
          duration: 1,
          ease: "expo.inOut",
        },
      )
      .to(
        headlineSplit.words,
        {
          yPercent: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        "-=0.5"
      )
      .to(
        subheadlineSplit.words,
        {
          yPercent: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        "-=1"
    )
      .to(
        heroCta,
        {
          yPercent: 0,
          duration: 1,
          ease: "expo.inOut",
        },
        "-=0.5"
    )
      .to(header, {
        yPercent: 0,
        duration: 1,
        ease: "expo.inOut",
      },
        "-=1.5"
    )
      .fromTo(
        ".hero-video-bg",
        { opacity: 0 },
        {
          opacity: "100%",
          duration: 0.5,
          ease: "power4.Out",
          onStart: () => {
            heroVideo?.play();
          },
        },
        "-=1.5"
      );
      // .to(
      //   ".section-reels",
      //   {
      //     marginTop: "-12rem",
      //     duration: 0.5,
      //     ease: "power4.Out",
      //   },
      //   "-=0.5"
      // );

    // Check if intro was already played this session
    const hasSeenIntro =
      canUseDOM && window.sessionStorage.getItem("heroIntroPlayed") === "true";
      window.sessionStorage.setItem("heroIntroPlayed", "true");
    // Play or skip
    if (hasSeenIntro) {
      // Jump straight to end state
      tl.progress(1);
    } else {
      // First visit: delay then play
      setTimeout(() => tl.play(), 1000);
    }
  }
}
