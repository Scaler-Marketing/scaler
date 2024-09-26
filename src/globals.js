import { setStaggerText } from "./modules/staggerText";
import { setStaggerElements } from "./modules/staggerElements";
import { setLoadingStates } from "./modules/setLoadingStates";
import { playVideoOnScroll }  from "./modules/playVideoOnScroll";
import { initMenu } from "./modules/menu";
import { setImageMasks } from "./modules/setImageMasks";

initMenu();
playVideoOnScroll();
setStaggerElements();
setLoadingStates();
setImageMasks();

document.fonts.ready.then(() => {
  setStaggerText();
});