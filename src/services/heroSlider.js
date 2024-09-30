export function initServiceHeroSlider() {
  const imagesWrapper = document.querySelector(".service-slider_inner");
  let images = imagesWrapper.querySelectorAll(".service-slider_item");

  if (!images) {
    return;
  }

  const tl = gsap.timeline({
    repeat: -1,
    onComplete: () => {
      tl.seek(0);
    }
  });

  const lastImg = images[0].cloneNode(true);
  imagesWrapper.append(lastImg);

  images = imagesWrapper.querySelectorAll(".service-slider_item");

  images.forEach((img, i) => {
    if (i === 0) {
      return;
    }
    tl.fromTo(
      img,
      {
        clipPath: "inset(50%)",
      },
      {
        clipPath: "inset(0%)",
        duration: 1,
        delay: 1,
        ease: "expo.out",
      }
    );
    tl.fromTo(
      img.querySelector(".service-slider_img"),
      {
        scale: 1.1,
      },
      {
        scale: 1,
        duration: 1,
        ease: "expo.out",
      },
      "-=1"
    );
  });
}