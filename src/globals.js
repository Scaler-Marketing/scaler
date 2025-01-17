import { setStaggerText } from "./modules/staggerText";
import { setStaggerElements } from "./modules/staggerElements";
import { setLoadingStates } from "./modules/setLoadingStates";
import { playVideoOnScroll } from "./modules/playVideoOnScroll";
import { initMenu } from "./modules/menu";
import { setImageMasks } from "./modules/setImageMasks";
import { initFormSubmit, initContactFormUi } from "./modules/formSubmit";

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
  setLoadingStates();
  initMenu();
});

document.fonts.ready.then(() => {
  setStaggerText();
  initFormSubmit();
  initContactFormUi();
});
