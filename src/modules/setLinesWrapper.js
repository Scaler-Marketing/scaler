export function setLinesWrapper(lines) {
  // Wrap each line in a .line-wrapper span
  lines.forEach(line => {
    const wrapper = document.createElement('span');
    wrapper.classList.add('line-wrapper');
    line.parentNode.insertBefore(wrapper, line);
    wrapper.appendChild(line);
  });
}