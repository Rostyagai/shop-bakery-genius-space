const mobileMenu = document.querySelector('#mobile-menu');
const menuBtnOpen = document.querySelector('#menu-btn-open');
const menuBtnClose = document.querySelector('#menu-btn-close');
const menuLink = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
menuLink[0].addEventListener('click', toggleMenu);
menuLink[1].addEventListener('click', toggleMenu);
menuLink[2].addEventListener('click', toggleMenu);
menuLink[3].addEventListener('click', toggleMenu);