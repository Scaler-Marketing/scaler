import { setStaggerText } from "./modules/staggerText";
import { setStaggerElements } from "./modules/staggerElements";
import { setLoadingStates } from "./modules/setLoadingStates";
import { playVideoOnScroll }  from "./modules/playVideoOnScroll";
import { initMenu } from "./modules/menu";

initMenu();
playVideoOnScroll();
setStaggerElements();
setLoadingStates();

document.fonts.ready.then(() => {
  setStaggerText();
});