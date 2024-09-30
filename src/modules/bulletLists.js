import { wrapTextWithElement } from "./wrapWithElement";

export function initBulletLists() {
  const lists = document.querySelectorAll('.text-rich-text.is-services-list ul');

  console.log(lists);

  if (!lists) {
    return;
  }

  lists.forEach((list) => {
    const items = list.querySelectorAll('li');

    if (!items) {
      return;
    }

    items.forEach((item) => {
      wrapTextWithElement(item, 'div', 'list-item-text');

      const line = document.createElement('div');
      line.classList.add('list-item-line');
      item.appendChild(line);
    });

    const lines = list.querySelectorAll('.list-item-line'),
      text = list.querySelectorAll('.list-item-text');
    
    gsap.set(lines, { xPercent: -100 });
    gsap.set(text, { yPercent: 100 });

    list.classList.add('ready');

    const tl = gsap.timeline({ paused: true });
    tl.to(lines, {
      xPercent: 0,
      duration: 1,
      ease: "expo.Out",
      stagger: 0.1,
    }).to(text, {
      yPercent: 0,
      duration: 1,
      ease: "expo.Out",
      stagger: 0.1,
    },0.05);

    gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "center bottom",
        once: true,
        onEnter: () => {
          tl.play();
        }
      }
    })
  });
}