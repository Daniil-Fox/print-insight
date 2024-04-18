const clearButtons = document.querySelectorAll('.clear-cart')
const buttons = document.querySelectorAll('.favorites-section__btn')

clearButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()

    const items = document.querySelector('.favorites-section__items')

    items.innerHTML = ''
    buttons.forEach(el => {
      el.style.opacity = 0
      el.style.pointerEvents = 'none'
      el.style.position = 'absolute'

      btn.style.opacity = 0
      btn.style.pointerEvents = 'none'
      btn.style.position = 'absolute'
    })
  })
})
