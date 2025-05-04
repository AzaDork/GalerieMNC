export const setupAnimations = () => {
  // Add animation classes
  const style = document.createElement('style');
  style.textContent = `
    .animate-fade-in {
      animation: fadeIn 1s forwards;
    }
    
    .animation-delay-200 {
      animation-delay: 200ms;
    }
    
    .animation-delay-400 {
      animation-delay: 400ms;
    }
    
    .animation-delay-600 {
      animation-delay: 600ms;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Basic intersection observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  
  // Select elements with data-aos attribute
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach(element => {
    observer.observe(element);
  });
  
  return () => {
    observer.disconnect();
  };
};