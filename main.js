// DOM Document Object Model
/* abre e fecha o menu quando clicar no icone: ... e X */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar e um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
})
// !Popup

const popup = () => {
  // Get the modal
  setTimeout(function () {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
  }, 1500)
}

function fecharModel() {
  const modal = document.getElementById('myModal')
  modal.style.display = 'none'
}

window.onload = popup()

/* Testimonials */

// Get all testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card')

// Get current testimonial card
let currentCard = 0

// Hide all testimonial cards except first one
for (let i = 1; i < testimonialCards.length; i++) {
  testimonialCards[i].style.display = 'none'
}

// Function to show next testimonial card
function nextCard() {
  testimonialCards[currentCard].style.display = 'none'
  currentCard = (currentCard + 1) % testimonialCards.length
  testimonialCards[currentCard].style.display = 'flex'
}

// Function to show previous testimonial card
function prevCard() {
  testimonialCards[currentCard].style.display = 'none'
  currentCard =
    (currentCard + testimonialCards.length - 1) % testimonialCards.length
  testimonialCards[currentCard].style.display = 'flex'
}

// Call nextCard function every 3.5 seconds
setInterval(nextCard, 3500)
