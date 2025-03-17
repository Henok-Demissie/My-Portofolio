document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
              behavior: "smooth"
          });
      });
  });

  // Dark Mode Toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Slideshow
  let slideIndex = 1;
  showSlides(slideIndex);

  window.changeSlide = function(n) {
      showSlides(slideIndex += n);
  }

  function showSlides(n) {
      let slides = document.getElementsByClassName("slide");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      
      slides[slideIndex-1].style.display = "block";
  }

  setInterval(() => { changeSlide(1); }, 5000);
});
