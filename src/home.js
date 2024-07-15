import { setLinesWrapper } from "./modules/setLinesWrapper";
import { setBrandCoreText } from "./home/brandCoreText";
import { initHeroSection } from "./home/heroSequence";

// set hero sequence
initHeroSection();
// Brand Core section
setBrandCoreText();

gsap.set(".case-study-item-inner", { clipPath: "inset(50%)" });

// Case Studies animations ======================================== //
document.querySelectorAll(".case-study-item").forEach((trigger) => {
  const tl = gsap.timeline();
  const mask = trigger.querySelector(".case-study-item-inner");
  const img = trigger.querySelector(".case-study-item-img");

  tl.to(mask, {
    clipPath: "inset(0%)",
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "center center",
    },
  });

  tl.from(img, {
    scale: 1.2,
    opacity: 0.8,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "center center",
    },
  });
});

// Services ================================== //
const servicesItems = document.querySelectorAll('.services.list-item');

servicesItems.forEach((item) => {
  const tl = gsap.timeline();
  const line = item.querySelector('.services-list-item-line'),
    heading = item.querySelector('h3'),
    description = item.querySelector('.services-list-item-description > p'),
    button = item.querySelector('.button');
  
    const headingLines = new SplitType(heading, {
      types: "lines, words",
      tagName: "span",
    });

    const descriptionLines = new SplitType(description, {
      types: "lines",
      tagName: "span",
    });
  
  let headingEls, descriptionEls;
  
  setLinesWrapper(headingLines.lines, () => {
    headingEls = heading.querySelectorAll('.word');
    gsap.set(headingEls, {yPercent: 100});
  });
  setLinesWrapper(descriptionLines.lines, () => {
    descriptionEls = description.querySelectorAll(".line");
    gsap.set(descriptionEls, { yPercent: 100 });
  });

  gsap.set(line, { xScale: 0 });
  gsap.set(button, { yPercent: 100 });

  tl.to(line, {
    xPercent: 100,
    duration: 0.5,
    ease: "power4.Out",
  }).to(headingEls, {
    yPercent: 100,
    stagger: 0.1,
    duration: 1,
    ease: "power4.Out",
  }).to(descriptionEls, {
    yPercent: 100,
    stagger: 0.1,
    duration: 1,
    ease: "power4.Out",
  }).to(button, {
    yPercent: 100,
    duration: 0.5,
    ease: "power4.Out",
  });
  
});