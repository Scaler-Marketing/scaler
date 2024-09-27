import { initNewsSlider } from "./home/newsSlider";
import { initServiceHeroSlider } from "./services/heroSlider";
import { initServicesList } from "./home/servicesList";

document.fonts.ready.then(() => {
  initNewsSlider();
  initServiceHeroSlider();
  initServicesList();
});