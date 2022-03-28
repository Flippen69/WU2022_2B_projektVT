const burger = document.querySelector('.burger')
const nav = document.querySelector('.navbar_wrapper')
const arrow = document.querySelector('.arrow')

function toggleMenu() {
    nav.classList.toggle('navbar_active')
    burger.classList.toggle('toggle')
    arrow.classList.toggle('non_arrow')
}

burger.addEventListener('click', toggleMenu)