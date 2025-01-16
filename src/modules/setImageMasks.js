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

  gsap.set(el, {
    clipPath: mask.start,
  });

  if (loading && loading === 'lazy') {
    el.addEventListener('load', () => {

      gsap.fromTo(
        el,
        {
          clipPath: mask.start,
        },
        {
          clipPath: mask.end,
          duration: 1,
          delay: 0.5,
          ease: "expo.out",
        }
      );
    });
  } else {
    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: true,
        start,
        once: true,
        onEnter: () => {
          gsap.fromTo(
            el,
            {
              clipPath: mask.start,
            },
            {
              clipPath: mask.end,
              duration: 1,
              ease: "expo.out",
            }
          );
        },
      },
    });
  }
}
