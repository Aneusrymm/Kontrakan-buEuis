   document.addEventListener("DOMContentLoaded", function() {
      // Fade-in animation for elements on scroll
      const elements = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach(element => {
        observer.observe(element);
      });

      // GSAP animation for hero title
      gsap.from(".animate-pulse", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });

      // Hero Section Slideshow
      const heroImages = document.querySelectorAll('.slider-hero .slider-image');
      let currentHeroIndex = 0;

      function showNextHeroImage() {
        heroImages[currentHeroIndex].classList.remove('active');
        currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
        heroImages[currentHeroIndex].classList.add('active');
      }

      // Initialize the first hero image
      if (heroImages.length > 0) {
        heroImages[currentHeroIndex].classList.add('active');
      }

      // Change hero image every 5 seconds
      setInterval(showNextHeroImage, 5000);

      // Room Details Modal functionality
      function openRoomModal(type) {
        const modal = document.getElementById('roomModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalAvailability = document.getElementById('modalAvailability');
        const roomSlider = document.getElementById('roomSlider');

        let title, price, availability, images;
        // Placeholder images for room types
        const placeholderBase = 'https://placehold.co/600x400/';
        const errorFallback = 'onerror="this.src=\'https://placehold.co/600x400/cccccc/333333?text=Image+Load+Error\'"';

        switch(type) {
          case 'type1':
            title = 'Type 1';
            price = 'Price: Rp16,000,000/tahun';
            availability = 'Tersedia 2 Rumah';
            images = [
              'asset/img/1.jpg',
              'asset/img/2.jpg',
              'asset/img/3.jpg',
              'asset/img/4.jpg',
              'asset/img/6.jpg',
            ];
            break;
          case 'type2':
            title = 'Type 2';
            price = 'Price: Rp1.200,000/bulan';
            availability = 'Tersedia 2 Rumah';
            images = [
              `asset/img/rumahdepan.jpg`,
              `${placeholderBase}DDC1FF/333333?text=Gambar+akan+Segera+hadir`,
              `${placeholderBase}DDC1FF/333333?text=Gambar+akan+Segera+hadir`
            ];
            break;
          case 'type3':
            title = 'Type 3';
            price = 'Price: Rp650,000,000/bulan';
            availability = 'Tersedia 4 Rumah';
            images = [
                `asset/img/belakang1.jpg`,
              `asset/img/rumahbelakang.jpg`,
              `${placeholderBase}FFC1DD/333333?text=Gambar+akan+Segera+Hadir`
            ];
            break;
        }

        modalTitle.textContent = title;
        modalPrice.textContent = price;
        modalAvailability.textContent = availability;
        roomSlider.innerHTML = images.map(img => `<img src="${img}" alt="${title} Image" ${errorFallback}>`).join('');

        modal.style.display = 'flex'; // Use flex to center the modal content
      }

      function closeRoomModal() {
        document.getElementById('roomModal').style.display = 'none';
      }

      // Contact Info Modal functionality
      function openContactModal() {
        document.getElementById('contactModal').style.display = 'flex'; // Use flex to center
      }

      function closeContactModal() {
        document.getElementById('contactModal').style.display = 'none';
      }

      // Close modals when clicking outside
      window.onclick = function(event) {
        const roomModal = document.getElementById('roomModal');
        const contactModal = document.getElementById('contactModal');
        if (event.target == roomModal) {
          closeRoomModal();
        }
        if (event.target == contactModal) {
          closeContactModal();
        }
      };

      // Slider navigation for room details modal
      function scrollSlider(sliderId, direction) {
        const slider = document.getElementById(sliderId);
        const scrollAmount = slider.clientWidth; // Scroll by the width of one image
        slider.scrollBy({
          left: direction * scrollAmount,
          behavior: 'smooth'
        });
      }

      // Expose functions to global scope for onclick attributes
      window.openRoomModal = openRoomModal;
      window.closeRoomModal = closeRoomModal;
      window.openContactModal = openContactModal;
      window.closeContactModal = closeContactModal;
      window.scrollSlider = scrollSlider;

      // Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Tutup menu saat item menu diklik
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik

// Sisanya dari main.js (misalnya, untuk modal atau slider lain) tetap sama
    });

    