export function initFormSubmit() {
  const forms = document.querySelectorAll("form");

  if (!forms) {
    return;
  }

  forms.forEach((form) => {
    const formSubmitButton = form.querySelector(".button.is-submit");
    const submitButton = form.querySelector(".form_submit");
    const label = form.querySelector(".button-label");

    if (!formSubmitButton || !submitButton) {
      return;
    }
  
    // add event listener to the form submit button
    formSubmitButton.addEventListener("click", function (e) {
      e.preventDefault(); // prevent the default action
      // check if the form is valid
      if (form.checkValidity()) {
        // if valid, submit the form and change the button text
        submitButton.click();
        
        label.textContent = submitButton.getAttribute("data-wait");
      } else {
        // if not valid, report validity (this will show the HTML5 validation messages)
        form.reportValidity();
      }
    });
  });
}

export function initContactFormUi() {
  const formWrapper = document.querySelector(".contact-component");
  const formTriggers = document.querySelectorAll("[data-contact-trigger]");

  if (!formWrapper || !formTriggers) {
    return;
  }

  const formEl = formWrapper.querySelector(".contact-form"),
    imgEl = formWrapper.querySelector(".contact-img_wrapper"),
    closeBtn = formWrapper.querySelector('.button.is-modal-close');

  gsap.set(formWrapper, { display: "none" });
  gsap.set(imgEl, { clipPath: "inset(0% 0% 100% 0%)" });
  gsap.set(formEl, { clipPath: "inset(100% 0% 0% 0%)" });
  gsap.set(closeBtn, { yPercent: -200 });

  const tl = gsap.timeline({ paused: true });

  tl.to(formWrapper, { display: "flex", duration: 0 })
    .to(formEl, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power4.out",
      duration: 0.75,
    }, 0)
    .to(
      imgEl,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "power4.out",
        duration: 0.75,
      }, 0)
    .to(
      closeBtn,
      {
        yPercent: 0,
        ease: "power4.out",
        duration: .5,
      }, .5);

  closeBtn.addEventListener("click", () => {
    tl.reverse();
  });

  formTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      tl.play();
    });
  });
}