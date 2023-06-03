const burgerMenu = document.querySelector('.burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', function() {
  navbar.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (!navbar.contains(event.target) && !burgerMenu.contains(event.target)) {
    navbar.classList.remove('active');
  }
});




// const burgerMenu = document.querySelector('.burger-menu');
//const navbar = document.querySelector('.navbar');

//burgerMenu.addEventListener('click', function() {
  //navbar.classList.toggle('active');
//});
