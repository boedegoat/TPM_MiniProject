const nav = document.querySelector('.nav')
const navMenuBtn = document.querySelector('.nav-mobile-menu-btn')
const navCloseBtn = document.querySelector('.nav-mobile-close-btn')
const navLinks = document.querySelector('.nav-links')
const navLinkItems = document.querySelectorAll('.nav-link')
const contactForm = document.querySelector('.contact-us-form')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
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

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return emailRegex.test(email)
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?[0-9]\d{1,20}$/
    return phoneRegex.test(phoneNumber)
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { firstname, lastname, email, phoneNumber } = Object.fromEntries(formData)

    if (!validateEmail(email)) {
        alert('Plase input a valid email address')
        return
    }
    if (!validatePhoneNumber(phoneNumber)) {
        alert('Plase input a valid phone number')
        return
    }

    alert(`Thank you ${firstname} ${lastname}. Your message has been sent!`)
    location.reload()
})
