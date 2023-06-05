const menuIcon = document.getElementById('menuIcon')
const menuClose = document.getElementById('menuClose')

menuIcon.addEventListener('click', toggleMenu)
menuClose.addEventListener('click', toggleMenu)

function toggleMenu (){
    const menu = document.getElementById('menu')
    menu.classList.toggle('inactive')
}