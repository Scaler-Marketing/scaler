// import { setLinesWrapper } from "../modules/setLinesWrapper";

export function initServicesList() {
  const servicesItems = document.querySelectorAll(".services-list-item");

  if (!servicesItems) {
    return;
  }

  servicesItems.forEach((item) => {
    const line = item.querySelector(".services-list-item-line"),
      heading = item.querySelector("h3"),
      description = item.querySelector(".services-list-item-description > p"),
      button = item.querySelector(".button");

    let headingEls, descriptionEls;

    SplitText.create(heading, {
      type: "lines, words",
      mask: "lines",
      wordsClass: "word",
      linesClass: "line",
      autoSplit: true,
      onSplit: (self) => {
        headingEls = heading.querySelectorAll(".word");
        gsap.set(headingEls, { yPercent: 100 });
      },
    });
        
    // const headingLines = new SplitType(heading, {
    //   types: "lines, words",
    //   tagName: "span",
    // });

    SplitText.create(description, {
      type: "lines",
      mask: "lines",
      linesClass: "line",
      autoSplit: true,
      onSplit: (self) => {
        descriptionEls = description.querySelectorAll(".line");
        gsap.set(descriptionEls, { yPercent: 100 });
      },
    });

    // const descriptionLines = new SplitType(description, {
    //   types: "lines",
    //   tagName: "span",
    // });


    // setLinesWrapper(descriptionLines.lines, () => {
    //   descriptionEls = description.querySelectorAll(".line");
    //   gsap.set(descriptionEls, { yPercent: 100 });
    // });

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
}
