//Responsive Menu
const menuBtn = document.querySelector('.menu-btn');

const navigation = document.querySelector('.navigations').innerHTML;
const navigationMobile = document.querySelector('.responsive-menu .navigations');

navigationMobile.innerHTML = navigation; 


// Swipper
new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  //Auto-scroll
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation Arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive Breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
  }
});

// Popup Image
document.querySelectorAll(".clickable-image").forEach(image => {
  image.addEventListener("click", function () {
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    // Set the popup image source to the clicked image
    popupImg.src = this.src;

    // Show the popup
    popup.classList.remove("hidden");
  });
});

// Close the popup when the close button is clicked
document.getElementById("close").addEventListener("click", function () {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
});

// Close the popup when clicking outside the image
document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target.id === "popup") {
    this.classList.add("hidden");
  }
});
