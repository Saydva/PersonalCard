// Intersection Observer pre scroll animácie
const observerOptions = {
  threshold: 0.5, // Spustí animáciu keď je 30% elementu viditeľné
  rootMargin: '0px 0px -50px 0px', // Offset pre spustenie
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Pridá triedu pre animáciu
      entry.target.classList.add('animate');

      // Prestane pozorovať element (animácia sa spustí len raz)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Spustí sa keď sa stránka načíta
document.addEventListener('DOMContentLoaded', () => {
  // Nájde všetky .slogan elementy
  const sloganElements = document.querySelectorAll('.slogan');

  // Začne ich pozorovať
  sloganElements.forEach((element) => {
    observer.observe(element);
  });
});
