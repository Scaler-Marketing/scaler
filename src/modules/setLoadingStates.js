export function setLoadingStates() {
  const loading = document.querySelector(".loading");
  if (!loading) {
    return;
  }

  const outElements = loading.querySelectorAll(".loading_inner.out");
  const inElements = loading.querySelectorAll(".loading_inner.in");

  gsap.set(inElements, { yPercent: 0 });
  gsap.set(outElements, { yPercent: 100 });

  gsap.to(inElements, {
    yPercent: -100,
    duration: 1,
    stagger: 0.2,
    ease: "expo.out",
    immediateRender: true,
    onComplete: () => {
      loading.style.display = "none";
      gsap.set(inElements, { yPercent: 100 });
    },
  });

  // Loading animation
  const links = document.querySelectorAll("a");
  links.forEach((l) => {
    l.addEventListener("click", (e) => {
      // e.preventDefault();
      const href = l.href;
      const url = new URL(href);

      if (
        window.location.origin === url.origin &&
        window.location.pathname !== url.pathname &&
        l.target !== "_blank"
      ) {
        e.preventDefault();

        loading.style.display = "block";
        gsap.to(outElements, {
          yPercent: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "expo.out",
          immediateRender: true,
          onComplete: () => {
            // loading.style.display = "none";
          },
        });

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
}
