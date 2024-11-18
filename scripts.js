document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const form = document.querySelector('form');
  
    let index = 0;
    let autoSlide;
  
    function updateCarousel() {
      const offset = -index * 100;
      carouselContainer.style.transform = `translateX(${offset}%)`;
    }
  
    function startAutoSlide() {
      autoSlide = setInterval(() => {
        index = (index + 1) % items.length;
        updateCarousel();
      }, 5000);
    }
  
    function stopAutoSlide() {
      clearInterval(autoSlide);
    }
  
    // Control buttons
    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      index = (index === 0) ? items.length - 1 : index - 1;
      updateCarousel();
      startAutoSlide();
    });
  
    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      index = (index + 1) % items.length;
      updateCarousel();
      startAutoSlide();
    });
  
    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        prevButton.click();
      } else if (event.key === 'ArrowRight') {
        nextButton.click();
      }
    });
  
    // Form validation
    form.addEventListener('submit', (event) => {
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const password = form.querySelector('#password').value.trim();
  
      if (!name || !email || !password) {
        event.preventDefault();
        alert('Por favor, completa todos los campos.');
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        event.preventDefault();
        alert('Por favor, ingresa un correo electrónico válido.');
      }
    });
  
    // Start automatic carousel
    startAutoSlide();
  });
  
