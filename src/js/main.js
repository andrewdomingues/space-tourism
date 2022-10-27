const hamMenu = document.querySelector('#ham-menu')
const hamMenuIconOpen = document.querySelector('#ham-menu-icon-open')
const hamMenuIconClose = document.querySelector('#ham-menu-icon-close')
const menu = document.querySelector('#menu')

hamMenu.addEventListener('click', () => {
  menu.classList.toggle('hide')
  hamMenuIconOpen.classList.toggle('hide')
  hamMenuIconClose.classList.toggle('hide')
})