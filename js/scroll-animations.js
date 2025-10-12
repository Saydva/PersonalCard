// Pridajte do slogan-animation.js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Pridá triedu pre animáciu
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Animuje len raz
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  },
);

document.addEventListener('DOMContentLoaded', () => {
  // Pozoruje slogan elementy
  const sloganElements = document.querySelectorAll('.slogan');
  sloganElements.forEach((element) => {
    observer.observe(element);
  });
});
