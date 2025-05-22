import { setBrandCoreText } from "./home/brandCoreText";
import { initHeroSection } from "./home/heroSequence";
import { initCaseStudies } from "./home/caseStudies";
import { initCaseStudiesSlider } from "./home/caseStudiesSlider";
import { initServicesList } from "./home/servicesList";
import { initCaseStudiesProgress } from "./home/caseStudiesProgress";

// set hero sequence
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    // Brand Core section
    ScrollTrigger.refresh();
    initHeroSection();
    setBrandCoreText();
    // Set case studies logic
    initCaseStudies();
    initCaseStudiesSlider();
    initCaseStudiesProgress();
    initServicesList();
  }, 1000);
});