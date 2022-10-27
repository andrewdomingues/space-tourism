const hamMenu = document.querySelector('#ham-menu')
const hamMenuIconOpen = document.querySelector('#ham-menu-icon-open')
const hamMenuIconClose = document.querySelector('#ham-menu-icon-close')
const menu = document.querySelector('#menu')

hamMenuIconOpen.addEventListener('click', () => {
  menu.classList.remove('menu-close')
  menu.classList.add('menu-open')
  hamMenuIconOpen.classList.add('hide')
  hamMenuIconClose.classList.remove('hide')
})
hamMenuIconClose.addEventListener('click', () => {
  hamMenuIconClose.classList.add('hide')
  hamMenuIconOpen.classList.remove('hide')
  menu.classList.remove('menu-open')
  menu.classList.add('menu-close')
})