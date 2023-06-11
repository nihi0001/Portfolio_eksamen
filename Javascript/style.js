
//karosel

function prevSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.offsetWidth;
  const maxScroll = slideWidth * (slides.childElementCount - 1);

  if (slides.scrollLeft === 0) {
    slides.scrollLeft = maxScroll;
  } else {
    slides.scrollLeft -= slideWidth;
  }
}

function nextSlide() {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.offsetWidth;
  const maxScroll = slideWidth * (slides.childElementCount - 1);

  if (slides.scrollLeft === maxScroll) {
    slides.scrollLeft = 0;
  } else {
    slides.scrollLeft += slideWidth;
  }
}

// Burger menu

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
/* Burger Menu Functionality */

// Lav variablen "btn", der henviser til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav variablen "menu", der henviser til ".main-menu"
const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  menu.classList.toggle("shown");

  // b) lav variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørg om "menuShown" i if-sætningen nedenfor (=> if (menuShown)), og udskift teksten
  if (menuShown) {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Luk", hvis menuShown er "true"
    btn.textContent = "Luk";
  } else {
    console.log(menuShown); // se i konsollen
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
    btn.textContent = "Menu";
  }
}

// Tilføj et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
