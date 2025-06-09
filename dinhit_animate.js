document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(
    '[class*="fade-"], [class*="slide-"], [class*="zoom-"], [class*="flip-"]'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("animate");
        } else {
          el.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  targets.forEach((el) => observer.observe(el));
});
