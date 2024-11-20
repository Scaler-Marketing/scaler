export function initMenu() {
  const menuItems = document.querySelectorAll(".menu-link[data-item]");

  if (!menuItems) {
    return;
  }

  const menuWrapper = document.querySelector(".menu-wrapper"),
    itemsWrapper = menuWrapper.querySelector(".menu-inner"),
    imgsWrapper = menuWrapper.querySelector(".menu-img-wrapper"),
    imgsItems = imgsWrapper.querySelectorAll(".menu-img-item"),
    menuTrigger = document.querySelector(".button.menu");

  gsap.set(itemsWrapper, { clipPath: "inset(0% 0% 100% 0%)" });
  gsap.set(imgsWrapper, { clipPath: "inset(100% 0% 0% 0%)" });
  gsap.set(menuItems, {
    opacity: 0,
    yPercent: 100,
  });

  const tl = gsap.timeline({ paused: true });
  const buttonTl = gsap.timeline({ paused: true });

  buttonTl.fromTo(
    menuTrigger.querySelectorAll(".button-label-inner"),
    {
      xPercent: 0,
    },
    {
      xPercent: -100,
      ease: "power4.inOut",
      duration: 0.5,
    }
  );    

  tl
    .to(menuWrapper, { display: "flex", duration: 0 })
    .to(itemsWrapper, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.out",
      duration: 0.75,
    })
    .to(
      imgsWrapper,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        duration: 0.75,
      },
      "-=.75"
    )
    .to(
      menuItems,
      {
        opacity: 1,
        yPercent: 0,
        stagger: 0.03,
        ease: "power4.out",
      },
      "-=0.5"
    );

  menuTrigger.addEventListener("click", () => {
    if (menuTrigger.classList.contains("active")) {
      tl.reverse();
      buttonTl.reverse();
      menuTrigger.classList.remove("active");
    } else {
      tl.play();
      buttonTl.play();
      menuTrigger.classList.add("active");
    }
  });

  // set first item on the list as the initial element. If a link is active, select that one instead.
  let currentItem = document.querySelector(".menu-link.w--current[data-item]");
  if (!currentItem) {
    currentItem = document.querySelector(".menu-link[data-item]:first-child");
  }
  let currentItemId = currentItem.dataset.item;
  gsap.set(`.menu-img-item[data-item="${currentItemId}"]`, { zIndex: 1 });

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const itemId = item.dataset.item || null;

      if (!itemId || currentItemId === itemId) {
        return;
      }

      const imgWrapper = document.querySelector(
        `.menu-img-item[data-item="${itemId}"]`
      );

      if (!imgWrapper) {
        return;
      }

      const tl = gsap.timeline();

      tl.to(imgsItems, { zIndex: 0, duration: 0 })
        .to(
          document.querySelector(
            `.menu-img-item[data-item="${currentItemId}"]`
          ),
          {
            zIndex: 1,
            duration: 0,
          }
        )
        .to(imgWrapper, {
          zIndex: 2,
          duration: 0,
        })
        .fromTo(
          imgWrapper,
          {
            clipPath: "inset(50%)",
          },
          {
            clipPath: "inset(0%)",
            duration: 0.75,
            ease: "power4.out",
          }
        )
        .fromTo(
          imgWrapper.querySelectorAll(".menu-img"),
          {
            scale: 1.2,
          },
          {
            scale: 1,
            duration: 0.75,
            // stagger: 0.1,
            ease: "power4.out",
          },
          "-=.75"
        );

      currentItemId = itemId;
    });
  });
}
