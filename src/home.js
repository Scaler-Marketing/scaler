import { setLinesWrapper } from "./modules/setLinesWrapper";
import { setBrandCoreText } from "./home/brandCoreText";
import { initHeroSection } from "./home/heroSequence";
import { initTestimonialsGradients } from "./home/testimonialsGradients";
import { initNewsSlider } from "./home/newsSlider";

// set hero sequence
initHeroSection();
// Brand Core section
setBrandCoreText();

gsap.set(".case-study-item-inner", {
  maskImage:
    "radial-gradient(circle at 50% 50%, black 50%, rgba(0, 0, 0, 0) 65%)",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "0vw 0vw",
});

// Case Studies animations ======================================== //
document.querySelectorAll(".case-study-item").forEach((trigger) => {
  const tl = gsap.timeline();
  const mask = trigger.querySelector(".case-study-item-inner");
  const img = trigger.querySelector(".case-study-item-img");

  tl.to(mask, {
    ease: "none",
    maskSize: "200vw 200vw",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        trigger.style.pointerEvents = "auto";
      },
      onEnterBack: () => {
        trigger.style.pointerEvents = "auto";
      },
      onLeave: () => {
        trigger.style.pointerEvents = "auto";
      },
      onLeaveBack: () => {
        trigger.style.pointerEvents = "auto";
      }
    },
  });

  tl.from(img, {
    scale: 1.2,
    opacity: 0.5,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      scrub: true,
      start: "top top",
      end: "center center",
    },
  });
});

document.querySelectorAll(".case-study-title").forEach((trigger) => {
  const el = trigger.querySelector(".case-study-item-marquee");
  gsap.fromTo(
    el,
    {
      yPercent: 100,
    },
    {
      ease: "none",
      yPercent: 0,
      // duration: 1,
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "10% top",
        end: "20% top",
        // markers: true,
      },
    }
  );

  gsap.fromTo(
    el,
    {
      yPercent: 0,
    },
    {
      yPercent: -100,
      ease: "none",
      immediateRender: false,
      // duration: 1,
      scrollTrigger: {
        trigger: trigger,
        scrub: true,
        start: "110% top",
        end: "120% top",
        // markers: true,
      },
    }
  );
});

// Services ================================== //
const servicesItems = document.querySelectorAll(".services-list-item");

servicesItems.forEach((item) => {
  const line = item.querySelector(".services-list-item-line"),
    heading = item.querySelector("h3"),
    description = item.querySelector(".services-list-item-description > p"),
    button = item.querySelector(".button");

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
    headingEls = heading.querySelectorAll(".word");
    gsap.set(headingEls, { yPercent: 100 });
  });
  setLinesWrapper(descriptionLines.lines, () => {
    descriptionEls = description.querySelectorAll(".line");
    gsap.set(descriptionEls, { yPercent: 100 });
  });

  gsap.set(line, { scaleX: 0 });
  gsap.set(button, { yPercent: 100 });

  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom-=20%",
      onEnter: () => {
        const tl = gsap.timeline();
        tl.to(line, {
          scaleX: 1,
          duration: 0.5,
          ease: "expo.out",
        })
          .to(
            headingEls,
            {
              yPercent: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: "expo.out",
            },
            "-=0.25"
          )
          .to(
            descriptionEls,
            {
              yPercent: 0,
              stagger: 0.05,
              ease: "expo.out",
            },
            "-=0.25"
          )
          .to(
            button,
            {
              yPercent: 0,
              duration: 0.3,
              ease: "expo.out",
            },
            "-=0.25"
          );
      },
    },
  });
});

initTestimonialsGradients();
initNewsSlider();