const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav_grid')

function toggleMenu() {
    nav.classList.toggle('nav-active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMenu)