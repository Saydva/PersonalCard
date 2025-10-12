// Browser optimization and performance enhancements

(function () {
  'use strict';

  // Preload critical resources
  function preloadCriticalResources() {
    const criticalImages = [
      './assets/logo.svg',
      './assets/oleg-ivanov-sg_gRhbYXhc-unsplash.jpg',
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }

  // Optimize images loading
  function optimizeImageLoading() {
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
      // Add error handling
      img.addEventListener('error', function () {
        this.src =
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
        this.alt = 'Image not found';
      });

      // Fade in effect when loaded
      img.addEventListener('load', function () {
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          this.style.opacity = '1';
        }, 50);
      });
    });
  }

  // Reduce animations on slower devices
  function optimizeAnimations() {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty(
        '--animation-duration',
        '0.1s',
      );
      return;
    }

    // Reduce animations on slower devices
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    if (connection && connection.effectiveType === 'slow-2g') {
      document.documentElement.style.setProperty(
        '--animation-duration',
        '0.2s',
      );
    }
  }

  // Debounce resize events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Optimize scroll performance
  function optimizeScrollPerformance() {
    let ticking = false;

    function updateScroll() {
      // Add scroll-based optimizations here
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // Check browser support
  function checkBrowserSupport() {
    const features = {
      intersectionObserver: 'IntersectionObserver' in window,
      webp: false,
      modernCSS: CSS.supports('display', 'grid'),
    };

    // Check WebP support
    const webpTest = new Image();
    webpTest.onload = webpTest.onerror = function () {
      features.webp = webpTest.height === 2;
      if (features.webp) {
        document.documentElement.classList.add('webp');
      }
    };
    webpTest.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

    // Add feature classes
    Object.keys(features).forEach((feature) => {
      if (features[feature]) {
        document.documentElement.classList.add(feature);
      }
    });

    return features;
  }

  // Initialize all optimizations
  function init() {
    // Run immediately
    preloadCriticalResources();
    checkBrowserSupport();
    optimizeAnimations();

    // Run when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImageLoading();
        optimizeScrollPerformance();
      });
    } else {
      optimizeImageLoading();
      optimizeScrollPerformance();
    }

    // Handle resize events
    window.addEventListener(
      'resize',
      debounce(() => {
        // Add resize-based optimizations here
      }, 250),
    );
  }

  // Start optimization
  init();
})();
