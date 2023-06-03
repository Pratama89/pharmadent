// Toogle Class Active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu di klik
document.querySelector('#hamburger').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klikdiluar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(e){
  if(!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});