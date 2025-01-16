function initCaseStudyHeroSection() {
  if (!document.querySelector(".section-case-study_hero")) {
    return;
  }

  const dataItems = document.querySelectorAll('.case-study_info'); 
  
  gsap.set(document.querySelectorAll('.case-study_info-label'), { yPercent: 100 }); 
  gsap.set(document.querySelectorAll('.case-study_info-data'), { yPercent: 100 }); 
  
  const tl = gsap.timeline();

  dataItems.forEach((item) => {
    tl.to(item.querySelector(".case-study_info-label"), {
      yPercent: 0,
      duration: 0.5,
      ease: "expo.out",
    }, "-=0.4");
    tl.to(item.querySelectorAll(".case-study_info-data"), {
      yPercent: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "expo.out",
    }, "-=0.4");
  });
}

initCaseStudyHeroSection();

// Function to initialize GSAP animations and bind event listeners
function initCaseStudiesItems(newItems) {
  if (!newItems) {
    return;
  }

  newItems.forEach((item) => {
    // Check if the item is already initialized
    if (item.dataset.gsapInitialized) return;

    const c01 = item.querySelector('.news-item-thumb-img._02');
    const c02 = item.querySelector('.news-item-thumb-img._03');

    if (!c01 || !c02) return; // Skip if elements are missing

    const tl = gsap.timeline({ paused: true });

    tl.to(c01, {
      scale: 0.8,
      duration: 0.3,
      ease: "expo.inOut",
    }).to(
      c02,
      {
        scale: 0.6,
        duration: 0.3,
        ease: "expo.inOut",
      },
      "-=0.3"
    );

    item.addEventListener("mouseover", () => {
      tl.play();
    });

    item.addEventListener("mouseout", () => {
      tl.reverse();
    });

    // Mark the item as initialized
    item.dataset.gsapInitialized = "true";
  });
}

// Initialize GSAP animations for existing items on page load
initCaseStudiesItems(document.querySelectorAll(".news-item_wrapper"));
initCaseStudiesItems(document.querySelectorAll(".case-studies-list_item"));

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
  'cmsload',
  (listInstances) => {
    // The callback passes a `listInstances` array with all the `CMSList` instances on the page.
    const [listInstance] = listInstances;

    // The `renderitems` event runs whenever the list renders items after switching pages.
    listInstance.on('renderitems', (renderedItems) => {
    	const els = renderedItems.map((i) => i.element);
      initCaseStudiesItems(els);
    });
  },
]);