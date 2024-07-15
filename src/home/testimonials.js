import { setLinesWrapper } from "../modules/setLinesWrapper";

export function initTestimonials() {
  // Split all words on the brand core section
  const testimonialsText = new SplitType(".testimonial-item p", {
    types: "lines",
    tagName: "span",
  });

  setLinesWrapper(testimonialsText.lines, () => {
    // Set initial state
    gsap.set(".testimonial-item:not(:first-child) p .line", { y: "110%" });
  });

  // Variables
  let sliderContent = document.querySelectorAll(".testimonial-item p");
  let nextButton = document.querySelector(".button.next");
  let prevButton = document.querySelector(".button.prev");
  let namesList = document.querySelector(".testimonials-names-list");
  let currentIndex = 0;

  // Next button click
  nextButton.addEventListener("click", function () {
    if (currentIndex < sliderContent.length - 1) {
      let currentSlide = sliderContent[currentIndex];
      let nextSlide = sliderContent[currentIndex + 1];
      gsap.to(currentSlide.querySelectorAll(".line"), {
        y: "-110%",
        stagger: 0.05,
      });
      gsap.to(nextSlide.querySelectorAll(".line"), { y: "0%", stagger: 0.05 });
      gsap.to(namesList, { y: "-=1.5rem" });
      currentIndex++;
    }
    // Disable next button if last slide
    nextButton.disabled = currentIndex === sliderContent.length - 1;
    prevButton.disabled = false;
  });

  // Prev button click
  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      let currentSlide = sliderContent[currentIndex];
      let prevSlide = sliderContent[currentIndex - 1];
      gsap.to(currentSlide.querySelectorAll(".line"), {
        y: "100%",
        stagger: 0.05,
      });
      gsap.to(prevSlide.querySelectorAll(".line"), { y: "0%", stagger: 0.05 });
      gsap.to(namesList, { y: "+=1.5rem" });
      currentIndex--;
    }
    // Disable prev button if first slide
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = false;
  });

  // Initial button state
  nextButton.disabled = false;
  prevButton.disabled = true;
}