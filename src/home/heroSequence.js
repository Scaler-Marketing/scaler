export function initHeroSection() {
  // Safety guard for SSR
  const canUseDOM =
    typeof window !== "undefined" && typeof document !== "undefined";

  // SplitText + estados iniciais
  SplitText.create(".hero-subheadline", {
    type: "lines",
    mask: "lines",
    linesClass: "line",
    autoSplit: true,
    onSplit: (self) => {
    },
  });

  const heroVideo = document.querySelector(".hero-video-bg video");
  gsap.set(".hero-line._02, .hero-line._03", { height: 0 });
  gsap.set(".header", { yPercent: -100 });
  gsap.set(".hero-video-bg", { opacity: 0 });
  gsap.set(".hero-subheadline .line", { yPercent: 100 });
  gsap.set(".section-reels", { marginTop: "0rem" });

  // Timeline começa pausado; decidimos depois se damos play ou pulamos pro final
  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      // Marca que a intro já foi vista
      if (canUseDOM) {
        try {
          window.sessionStorage.setItem("heroIntroPlayed", "true");
        } catch (e) {
          // se der erro, só ignora
        }
      }
    },
  });

  // -- Definição da animação original --
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
          if (heroVideo) {
            heroVideo.play();
          }
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
        onStart: () => {
          // reelsThumb.play();
        },
      },
      "-=0.5"
    );

  // -- Lógica de primeira vs. próxima visita --
  let hasSeenIntro = false;

  if (canUseDOM) {
    try {
      hasSeenIntro = window.sessionStorage.getItem("heroIntroPlayed") === "true";
    } catch (e) {
      hasSeenIntro = false;
    }
  }

  if (hasSeenIntro) {
    // Pula direto pro final da timeline (estado final da página)
    tl.progress(1);
  } else {
    // Primeira vez: toca a animação normalmente
    tl.play();
  }
}