export function setImageMasks() {
  const imageMasks = document.querySelectorAll("[image-mask]");

  if (!imageMasks) {
    return;
  }

  const maskDirectionMap = {
    top: {
      start: "inset(0% 50% 100%)",
      end: "inset(0% 0% 0%)"
    },
    bottom: {
      start: "inset(100% 50% 0%)",
      end: "inset(0% 0% 0%)",
    },
    left: {
      start: "inset(50% 100% 50% 0%)",
      end: "inset(0% 0% 0% 0%)",
    },
    right: {
      start: "inset(50% 0% 50% 100%)",
      end: "inset(0% 0% 0% 0%)",
    },
    center: {
      start: "inset(50%)",
      end: "inset(0%)",
    }
  };

  imageMasks.forEach((el) => {
    const type = el.getAttribute("image-mask");
    const mask = Object.keys(maskDirectionMap).includes(type) ? maskDirectionMap[type] : maskDirectionMap.center;
    setMask(el, mask);
  });
}

function setMask(el, mask) {
  const start = el.dataset.startPos || "center bottom";
  const loading = el.getAttribute('loading');

  el.style.opacity = 0;

  const imageMaskObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.complete) {
            animateImage(el);
          } else {
            el.addEventListener("load", () => animateImage(el));
          }
          imageMaskObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.1 }
  );

  imageMaskObserver.observe(el);

  function animateImage(el) {
    el.style.opacity = 1;
    gsap.fromTo(
      el,
      {
        // opacity: 0,
        clipPath: mask.start,
      },
      {
        // opacity: 1,
        clipPath: mask.end,
        duration: 1,
        ease: "expo.out",
      }
    );
  }
}
