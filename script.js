const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${index * 100}ms`;
  observer.observe(item);
});
