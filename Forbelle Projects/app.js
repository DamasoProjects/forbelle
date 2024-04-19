// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
  header = document.querySelector("header");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });

  // Mudar a imagem do logotipo
  const logoImg = clone.querySelector(".logo img");
  logoImg.src = dark ? "./img/logo-dark.png" : "./img/logo.png";

  if (dark) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// Evento de clique no botão de alternar
document.querySelector(".toggle-btn").addEventListener("click", toggleAnimation);

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

document.addEventListener("DOMContentLoaded", function() {
  const produtosButton = document.querySelector('a[href="#recipes"]');
  const descobrirAgoraButton = document.querySelector('.btn[href="#recipes"]');

  produtosButton.addEventListener("click", scrollToRecipes);
  descobrirAgoraButton.addEventListener("click", scrollToRecipes);

  function scrollToRecipes(event) {
    event.preventDefault();
    const sectionOffset = document.getElementById("recipes").offsetTop;
    window.scrollTo({
      top: sectionOffset,
      behavior: "smooth"
    });
  }
});
//slider

const postActionsControllers = document.querySelectorAll(
  ".post-actions-controller"
);



postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (postActionsContent) {
      const isVisible = postActionsContent.getAttribute("data-visible");

      if (isVisible === "false") {
        postActionsContent.setAttribute("data-visible", "true");
        postActionsContent.setAttribute("aria-hidden", "false");
        btn.setAttribute("aria-expanded", "true");
      } else {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
});

function scrollToRecipes() {
  var recipesSection = document.getElementById('recipes');
  recipesSection.scrollIntoView({ behavior: 'smooth' });
}

function handleClickOutside(event) {
  postActionsControllers.forEach((btn) => {
    const targetId = btn.getAttribute("data-target");
    const postActionsContent = document.getElementById(targetId);

    if (postActionsContent && postActionsContent.getAttribute("data-visible") === "true") {
      if (!postActionsContent.contains(event.target) && event.target !== btn) {
        postActionsContent.setAttribute("data-visible", "false");
        postActionsContent.setAttribute("aria-hidden", "true");
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
}

document.addEventListener("click", handleClickOutside);

postActionsControllers.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

const likeBtns = document.querySelectorAll(".post-like");



likeBtns.forEach((likeBtn) => {
  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("active")) {
      likeBtn.classList.remove("active");
    } else {
      likeBtn.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const produtosButton = document.querySelector('a[href="#produtos"]');
  produtosButton.addEventListener("click", function(event) {
    event.preventDefault();
    const targetSection = document.getElementById("produtos");
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});




var swiper = new Swiper(".swiper", {
  grabCursor: true,
  mousewheel: {
    invert: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}



