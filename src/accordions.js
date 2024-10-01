function initAccordions() {
  const accordions = document.querySelectorAll(".accordion-list");

  if (!accordions) {
    return;
  }

  accordions.forEach((accordion) => initAccordion(accordion));
}

function initAccordion(accordion) {
  const items = accordion.querySelectorAll(".accordion-item");

  if (!items) {
    return;
  }

  let currentItemIndex = -1;

  items.forEach((item, i) => {
    const trigger = item.querySelector(".accordion-item_trigger"),
      wrapper = item.querySelector(".accordion-item_content");
    
    gsap.set(wrapper, { height: 0 });
    
    trigger.addEventListener("click", (e) => {
      if (currentItemIndex === i) {
        closeAccordion(item);
        currentItemIndex = -1;
      } else {
        if (currentItemIndex !== -1) {
          const previousItem = items[currentItemIndex];
          closeAccordion(previousItem, previousItem.querySelectorAll('.accordion-item-title .char'));
        }
        openAccordion(item);
        currentItemIndex = i;
      }
    });
  });
}

function openAccordion(item) {
  const trigger = item.querySelector(".accordion-item_trigger"),
    icon = trigger.querySelector(".accordion-item_icon"),
    wrapper = item.querySelector(".accordion-item_content");
  
  gsap.to(icon, {
    rotate: "45deg",
    duration: 0.5,
    stagger: 0.01,
    ease: "expo.out"
  });

  gsap.to(wrapper, {
    height: "auto",
    duration: .5,
    ease: "expo.inOut"
  });

  trigger.classList.add('active');
}

function closeAccordion(item) {
  const trigger = item.querySelector(".accordion-item_trigger"),
    icon = trigger.querySelector(".accordion-item_icon"),
    wrapper = item.querySelector(".accordion-item_content");
  
  gsap.to(icon, {
    rotate: "0deg",
    duration: 0.5,
    stagger: 0.01,
    ease: "expo.out"
  });

  gsap.to(wrapper, {
    height: "0",
    duration: .5,
    ease: "expo.inOut"
  });

  trigger.classList.remove("active");
}

initAccordions();