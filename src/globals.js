import { setStaggerText } from "./modules/staggerText";
import { setStaggerElements } from "./modules/staggerElements";
import { playVideoOnScroll }  from "./modules/playVideoOnScroll";
import { initMenu } from "./modules/menu";

initMenu();
playVideoOnScroll();
setStaggerElements();

document.fonts.ready.then(() => {
  setStaggerText();
});