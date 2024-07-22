export function initMenu() {
  const menuItems = document.querySelectorAll('.menu-link[data-item]');

  if (!menuItems) {
    return;
  }

  const menuWrapper = document.querySelector('.menu-wrapper'),
    itemsWrapper = menuWrapper.querySelector('.menu-inner'),
    imgsWrapper = menuWrapper.querySelector('.menu-img-wrapper'),
    menuTrigger = document.querySelector('.button.menu');
  
  gsap.set(itemsWrapper, { clipPath: 'inset(0% 0% 100% 0%)' });
  gsap.set(imgsWrapper, { clipPath: "inset(100% 0% 0% 0%)" });
  gsap.set(menuItems, {
    opacity: 0,
    yPercent: 100
  });
  
  const tl = gsap.timeline({ paused: true });

  tl
    .to(menuWrapper, { display: "flex", duration: 0 })
    .to(itemsWrapper, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "expo.inOut",
      duration: 1,
    })
    .to(imgsWrapper, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "expo.inOut",
      duration: 1,
    }, "-=1")
    .to(menuItems, {
      opacity: 1,
      yPercent: 0,
      stagger: 0.03,
      ease: "expo.out",
    }, "-=0.25");
  
  menuTrigger.addEventListener('click', () => {
    console.log('click');
    if (menuTrigger.classList.contains('active')) {
      console.log('reverse()');
      tl.reverse();
      menuTrigger.classList.remove('active');
    } else {
      console.log('play()');
      tl.play();
      menuTrigger.classList.add('active');
    }
  });
}