function initIntroAnimation() {
  const headingSpans = document.querySelectorAll(
    ".section.hero-internal .heading-span"
  );
  gsap.set(headingSpans, { opacity: 0 });
  const els = SplitText.create(headingSpans, {
    type: "lines, words",
    mask: "words",
    autoSplit: true,
    onSplit: (self) => {
      gsap.set(headingSpans, { opacity: 1 });
      gsap.set(self.words, { yPercent: 100 });
    },
  });

  gsap.to(els.words, {
    yPercent: 0,
    stagger: 0.05,
    delay: 0.5,
    ease: "power4.out",
  });
}

document.fonts.ready.then(() => {
  initIntroAnimation();
});

// Function to initialize the count-up animation
function initializeCountUpAnimations() {
  // Select all elements with the "count-number" tag
  const countElements = document.querySelectorAll("[count-number]");

  countElements.forEach((el) => {
    // Get the number value from the element's text
    const targetText = el.textContent.trim();

    // Normalize the number by replacing commas with dots (if necessary) and parsing it
    const normalizedValue = parseFloat(targetText.replace(/,/g, ""));

    // Determine the number of decimal places
    const decimalPlaces = targetText.includes(".")
      ? targetText.split(".")[1].length
      : 0;

    // Skip if the value is not a valid number
    if (isNaN(normalizedValue)) return;

    // Create a GSAP ScrollTrigger animation
    gsap.set(el, { textContent: 0 });
    gsap.to(el, {
      textContent: normalizedValue,
      scrollTrigger: {
        trigger: el, // Trigger the animation when the element scrolls into view
        start: "top bottom", // Start when the top of the element hits the bottom of the viewport
        once: true, // Animate only once
      },
      duration: 2, // Animation duration
      ease: "power2.out",
      snap: { textContent: Math.pow(10, -decimalPlaces) }, // Snap to the nearest decimal place
      onUpdate: function () {
        // Format the number dynamically during the animation
        el.textContent = parseFloat(el.textContent).toLocaleString(undefined, {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        });
      },
    });
  });
}

// Initialize the count-up animations when the page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeCountUpAnimations();
});
