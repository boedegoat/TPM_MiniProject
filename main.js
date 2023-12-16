const navMenuBtn = document.querySelector('.nav-mobile-menu-btn')
const navCloseBtn = document.querySelector('.nav-mobile-close-btn')
const navLinks = document.querySelector('.nav-links')

navMenuBtn.addEventListener('click', () => {
    navLinks.classList.add('open')
    document.documentElement.style.overflow = 'hidden'
})

navCloseBtn.addEventListener('click', () => {
    navLinks.classList.remove('open')
    document.documentElement.style.overflow = 'auto'
})
