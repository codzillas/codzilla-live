document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});
// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("animate-me");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.style.transform = "translateY(0)";
          element.style.opacity = "1";
        } else {
          element.style.transform = "translateY(100px)";
          element.style.opacity = "0";
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
});

gsap.from("#animate-me", {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#animate-me",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});
