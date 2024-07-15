import { gsap } from "gsap";
import SplitType from "split-type";
import { setLinesWrapper } from "../modules/setLinesWrapper";

// Link timelines to scroll position
function createBrandCoreTrigger(triggerElement, words) {
  // Reset tl when scroll out of view past bottom of screen
  gsap
    .timeline({
      scrollTrigger: {
        trigger: triggerElement,
        scrub: true,
        start: "top top",
        end: "bottom center",
        markers: false,
        pin: false,
      },
    })
    .to(words, {
      yPercent: 0,
      stagger: 0.2,
      duration: 2,
      ease: "none",
    })
    .addPause(4)
    .to(words, {
      yPercent: -100,
      stagger: 0.2,
      duration: 2,
      ease: "none",
    });
}

export function setBrandCoreText() {
  // Split all words on the brand core section
  const brandCoreText = new SplitType(".brand-core-text", {
    types: "lines, words",
    tagName: "span",
  });

  setLinesWrapper(brandCoreText.lines);

  const sections = document.querySelectorAll(".brand-core-inner");

  sections.forEach((section) => {
    const words = section.querySelectorAll(".word");
    let tl = gsap.timeline({ paused: true });
    createBrandCoreTrigger(section, words);
  });
}