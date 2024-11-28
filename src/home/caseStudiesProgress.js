export function initCaseStudiesProgress() {
  const wrapper = document.querySelector('.case-studies-progress-inner'),
    progressBar = document.querySelector('.case-studies-progress'),
    totalCaseStudies = document.querySelectorAll('.case-study-item-link').length,
    scroller = document.querySelector('.case-studies-spacer');
    
  if (!progressBar || !totalCaseStudies) {
    return;
  }

  gsap.fromTo(
    progressBar,
    { scaleY: 0 },
    {
      scaleY: 1,
      scrollTrigger: {
        trigger: scroller,
        start: "top top",
        end: "bottom bottom",
        scrub: true
      }
    }
  )
}