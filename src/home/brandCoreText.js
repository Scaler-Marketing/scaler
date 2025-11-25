// import { setLinesWrapper } from "../modules/setLinesWrapper";

// Link timelines to scroll position
function createBrandCoreTrigger(
  triggerElement,
  words,
  isLast,
  isDelayedStagger,
  index
) {
  if (isDelayedStagger) {
    const height = (triggerElement.getBoundingClientRect().height / window.outerHeight);
    words.forEach((word, i) => {
      const start = i * 20;
      const end = start + 5;
      gsap.fromTo(
        word,
        {
          yPercent: 105,
        },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            scrub: true,
            start: `${start}% top`,
            end: `${end}% top`,
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
        yPercent: 105,
      },
      {
        yPercent: 0,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: triggerElement,
          scrub: true,
          start: "top top",
          end: "25% top",
          markers: false,
          pin: false,
        },
      }
    );
  }

  if (!isLast) {
    let start, end;
    if (isDelayedStagger) {
      const height =
      triggerElement.getBoundingClientRect().height / window.outerHeight;
      start = "70% top";
      end = "75% top";
    } else {
      start = "40% top";
      end = "50% top";
    }
    gsap.fromTo(
      words,
      {
        yPercent: 0,
      },
      {
        yPercent: -105,
        stagger: 0.1,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: triggerElement,
          scrub: true,
          start,
          end,
          markers: false,
          pin: false,
        },
      }
    );
  }

  if (isLast) {
    const button = triggerElement.querySelector(".button");
    gsap.set(button, { yPercent: 101 });
    gsap.to(
      button,
      {
        yPercent: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: triggerElement,
          scrub: true,
          start: "top top",
          end: "25% top",
          markers: false,
          pin: false,
        },
      }
    );    
  }
}

export function setBrandCoreText() {
  // Prevent onSplit initialization logic from running multiple times
  let hasRunSplitInit = false;

  // Split all words on the brand core section
  SplitText.create(".brand-core-text", {
    type: "lines, words",
    mask: "lines",
    wordsClass: "word",
    linesClass: "line",
    autoSplit: true,
    onSplit: (self) => {
      if (hasRunSplitInit) return; // <-- only runs once per page load
      hasRunSplitInit = true;

      // gsap.set(".brand-core-text .word", { yPercent: 100 });
      const sections = document.querySelectorAll(".brand-core-step");

      sections.forEach((section, i) => {
        const isDelayedStagger = section.classList.contains("_03");
        const words = section.querySelectorAll(".word");
        const isLast = i === sections.length - 1;
        createBrandCoreTrigger(section, words, isLast, isDelayedStagger, i);
      });
    },
  });
}
