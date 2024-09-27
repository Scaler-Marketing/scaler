import { setBrandCoreText } from "./home/brandCoreText";
import { initHeroSection } from "./home/heroSequence";
import { initTestimonialsGradients } from "./home/testimonialsGradients";
import { initNewsSlider } from "./home/newsSlider";
import { initCaseStudies } from "./home/caseStudies";
import { initServicesList } from "./home/servicesList";
import { initCaseStudiesProgress } from "./home/caseStudiesProgress";

// set hero sequence
initHeroSection();
document.fonts.ready.then(() => {
  // Brand Core section
  setBrandCoreText();
  // Set case studies logic
  initCaseStudies();
  initCaseStudiesProgress();
  initTestimonialsGradients();
  initNewsSlider();
  initServicesList();
});