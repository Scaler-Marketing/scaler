export function initCaseStudiesProgress() {
  const wrapper = document.querySelector('.case-studies-progress-inner'),
    progressBar = document.querySelector('.case-studies-progress'),
    item = progressBar.querySelector('.case-studies-progress-item'),
    totalCaseStudies = document.querySelectorAll('.case-study-item-link').length,
    scroller = document.querySelector('.case-studies-scroll');
    
  if (!progressBar || !totalCaseStudies) {
    return;
  }

  // Populate dots
  for (i = 1; i < totalCaseStudies; i++) {
    // clone dot
    const dotClone = item.cloneNode();
    progressBar.appendChild(dotClone);
  }

  // create a clone of the progress bar
  const progressClone = progressBar.cloneNode(true);
  progressClone.classList.add('progress');
  wrapper.appendChild(progressClone);

  gsap.fromTo(
    progressClone,
    { clipPath: "inset(0% 0% 100% 0%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    }
  )
}