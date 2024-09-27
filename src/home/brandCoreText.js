import { setLinesWrapper } from "../modules/setLinesWrapper";

// Link timelines to scroll position
function createBrandCoreTrigger(
  triggerElement,
  words,
  isLast,
  isDelayedStagger
) {
  if (isDelayedStagger) {
    words.forEach((word, i) => {
      gsap.fromTo(
        word,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            scrub: true,
            start: `${10 * i}% top`,
            end: `${(10 * i) + 10}% top`,
            markers: false,
            pin: false,
          },
        }
      );
    });
  } else {
    gsap.fromTo(
      words,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement,
          scrub: true,
          start: "top top",
          end: "30% top",
          markers: false,
          pin: false,
        },
      }
    );
  }

  if (!isLast) {
    gsap.fromTo(
      words,
      {
        yPercent: 0,
      },
      {
        yPercent: -100,
        stagger: 0.1,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: triggerElement,
          scrub: true,
          start: "70% top",
          end: "bottom top",
          markers: false,
          pin: false,
        },
      }
    );
  }
}

export function setBrandCoreText() {
  // Split all words on the brand core section
  const brandCoreText = new SplitType(".brand-core-text", {
    types: "lines, words",
    tagName: "span",
  });

  setLinesWrapper(brandCoreText.lines, () => {
    gsap.set(".brand-core-text .word", { yPercent: 100 });
  });

  const sections = document.querySelectorAll(".brand-core-inner");

  sections.forEach((section, i) => {
    const isDelayedStagger = section.classList.contains("_03");
    console.log(section, isDelayedStagger);
    const words = section.querySelectorAll(".word");
    const isLast = i === sections.length - 1;
    createBrandCoreTrigger(section, words, isLast, isDelayedStagger);
  });
}
