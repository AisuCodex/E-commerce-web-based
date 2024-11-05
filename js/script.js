document.addEventListener('DOMContentLoaded', function () {
  // Newsletter Form Submission
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      alert('Thank you for subscribing!');
      this.reset();
    });
  }

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menuBtn');
  const mainNav = document.querySelector('.main-nav');

  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  }

  // Add to Cart Functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartCount = document.querySelector('.cart-count');
  let count = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener('click', function () {
      count++;
      cartCount.textContent = count;
      alert('Product added to cart!');
    });
  });
});
