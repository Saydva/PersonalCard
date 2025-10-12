// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.5, // Triggers animation when 50% of element is visible
  rootMargin: '0px 0px -50px 0px', // Offset for triggering
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Adds class for animation
      entry.target.classList.add('animate');

      // Stops observing element (animation triggers only once)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Runs when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Finds all .slogan elements
  const sloganElements = document.querySelectorAll('.slogan');

  // Starts observing them
  sloganElements.forEach((element) => {
    observer.observe(element);
  });
});
