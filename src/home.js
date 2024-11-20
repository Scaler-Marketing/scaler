import { setBrandCoreText } from "./home/brandCoreText";
import { initHeroSection } from "./home/heroSequence";
import { initCaseStudies } from "./home/caseStudies";
import { initServicesList } from "./home/servicesList";
import { initCaseStudiesProgress } from "./home/caseStudiesProgress";

// set hero sequence
initHeroSection();
document.fonts.ready.then(() => {
  // Brand Core section
  ScrollTrigger.refresh();
  setBrandCoreText();
  // Set case studies logic
  initCaseStudies();
  initCaseStudiesProgress();
  initServicesList();
});