function initCaseStudyHeroSection() {
  if (!document.querySelector(".section-case-study_hero")) {
    return;
  }

  const titleWrapper = document.querySelector('.case-study_title'),
    marquee = titleWrapper.querySelector('.marquee'),
    dataItems = document.querySelectorAll('.case-study_info'); 
  
  gsap.set(marquee, { yPercent: 100 }); 
  gsap.set(document.querySelectorAll('.case-study_info-label'), { yPercent: 100 }); 
  gsap.set(document.querySelectorAll('.case-study_info-data'), { yPercent: 100 }); 
  
  const tl = gsap.timeline();

  tl.to(marquee, {
    yPercent: 0,
    duration: 0.5,
    delay: 0.5,
    ease: "expo.out",
  });

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

function initCaseStudiesList() {
  if (!document.querySelector(".case-studies-list")) {
    return;
  }

  const items = document.querySelectorAll(".case-studies-list_link");

  if (!items) {
    return;
  }

  items.forEach((item) => {
    const c01 = item.querySelector(".case-studies-list_img._02");
    const c02 = item.querySelector(".case-studies-list_img._03");
    const marquee = item.querySelector('.marquee');
    const services = item.parentElement.querySelector('.case-studies-list_item-footer');

    console.log(item.parentElement, services);

    item.appendChild(services);
    
    gsap.set(marquee, { yPercent: 100 });

    const tl = gsap.timeline({ paused: true });

    tl.to(marquee, {
      yPercent: 0,
      duration: 0.5,
      ease: "power4.inOut",
    }).to(c01, {
      scale: 0.8,
      duration: 0.5,
      ease: "power4.inOut",
    }, 0,
    ).to(
      c02,
      {
        scale: 0.6,
        duration: 0.5,
        ease: "power4.inOut",
      },
      0.1
    );

    item.addEventListener("mouseover", () => {
      tl.play();
    });
    item.addEventListener("mouseout", () => {
      tl.reverse();
    });
  });
}

initCaseStudiesList();