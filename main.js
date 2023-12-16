const nav = document.querySelector('.nav')
const navMenuBtn = document.querySelector('.nav-mobile-menu-btn')
const navCloseBtn = document.querySelector('.nav-mobile-close-btn')
const navLinks = document.querySelector('.nav-links')
const navLinkItems = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

navMenuBtn.addEventListener('click', () => {
    navLinks.classList.add('open')
    document.documentElement.style.overflow = 'hidden'
})

navCloseBtn.addEventListener('click', () => {
    navLinks.classList.remove('open')
    document.documentElement.style.overflow = 'auto'
})

navLinkItems.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open')
        document.documentElement.style.overflow = 'auto'
    })
})
