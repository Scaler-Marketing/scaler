import { setStaggerText } from "./modules/staggerText";
import { setStaggerElements } from "./modules/staggerElements";
import { setLoadingStates } from "./modules/setLoadingStates";
import { playVideoOnScroll }  from "./modules/playVideoOnScroll";
import { initMenu } from "./modules/menu";
import { setImageMasks } from "./modules/setImageMasks";
import { initFormSubmit, initContactFormUi } from "./modules/formSubmit";


document.addEventListener("DOMContentLoaded", function () {
  initMenu();
  playVideoOnScroll();
  setStaggerElements();
  setImageMasks();
});

document.fonts.ready.then(() => {
  setStaggerText();
  initFormSubmit();
  initContactFormUi();
  setLoadingStates();
});