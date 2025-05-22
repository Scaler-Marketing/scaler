import { setStaggerText } from "./modules/staggerText";
import { setStaggerElements } from "./modules/staggerElements";
import { setLoadingStates } from "./modules/setLoadingStates";
import { playVideoOnScroll } from "./modules/playVideoOnScroll";
import { initMenu } from "./modules/menu";
import { setImageMasks } from "./modules/setImageMasks";
import { initFormSubmit, initContactFormUi } from "./modules/formSubmit";

window.addEventListener("beforeunload", () => {
  console.log('beforeunload');
  setLoadingStates();
});

window.addEventListener("popstate", () => {
  console.log('popstate');
  setLoadingStates();
});

document.addEventListener("pageshow", (event) => {
  console.log('pageshow', event);
  // Check if the page was restored from the bfcache
  if (event.persisted) {
    // Re-run your loading animation
    setLoadingStates();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  playVideoOnScroll();
  setStaggerElements();
  setImageMasks();
  initMenu();
  setTimeout(() => {
    setLoadingStates();
  }, 100);
});

document.fonts.ready.then(() => {
  setStaggerText();
  initFormSubmit();
  initContactFormUi();
});
