const container = document.querySelector(".container");
const left = document.querySelector(".split.left");
const right = document.querySelector(".split.right");

// Safety check (prevents errors if elements not found)
if (container && left && right) {
  left.addEventListener("mouseenter", () => container.classList.add("hover_left"));
  left.addEventListener("mouseleave", () => container.classList.remove("hover_left"));

  right.addEventListener("mouseenter", () => container.classList.add("hover_right"));
  right.addEventListener("mouseleave", () => container.classList.remove("hover_right"));

  // Optional: fade the opposite side text/button
  const setOpacity = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.style.opacity = value;
  };

  left.addEventListener("mouseover", () => {
    setOpacity(".split.right h1", "0.15");
    setOpacity(".split.right a", "0.15");
  });

  left.addEventListener("mouseout", () => {
    setOpacity(".split.right h1", "1");
    setOpacity(".split.right a", "1");
  });

  right.addEventListener("mouseover", () => {
    setOpacity(".split.left h1", "0.15");
    setOpacity(".split.left a", "0.15");
  });

  right.addEventListener("mouseout", () => {
    setOpacity(".split.left h1", "1");
    setOpacity(".split.left a", "1");
  });
}
