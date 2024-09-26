export function setLoadingStates() {
  const loading = document.querySelector(".loading");
  if (!loading) {
    return;
  }

  const elements = loading.querySelectorAll(".mask");

  gsap.to(elements, {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "expo.out",
    immediateRender: true,
    onComplete: () => {
      loading.style.display = "none";
    }
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
        gsap.to(elements, {
          yPercent: -100,
          duration: 0.5,
          stagger: 0.1,
          ease: "expo.out",
          immediateRender: true,
          onComplete: () => {
            loading.style.display = "none";
          },
        });

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
}
