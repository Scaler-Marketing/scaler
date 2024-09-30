export function wrapTextWithElement(el, tag, className) {
  // Get the text content of the element
  const textContent = el.textContent;

  // Create a new element
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  // Set the text content of the element
  element.textContent = textContent;

  // Clear the original element's content
  el.textContent = "";

  // Append the element to the original element
  el.appendChild(element);
}
