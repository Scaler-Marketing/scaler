import { initServiceHeroSlider } from "./services/heroSlider";
import { initServicesList } from "./home/servicesList";
import { initBulletLists } from "./modules/bulletLists";

document.fonts.ready.then(() => {
  initServiceHeroSlider();
  initServicesList();
  initBulletLists();
});