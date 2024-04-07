const catalogueGenItems = document.querySelectorAll('.catalogue-gen__item')

catalogueGenItems.forEach(item => {
  const link = item.querySelector('.catalogue-item__bottom')
  item.addEventListener('mouseenter', () => {
    link.style.maxHeight = link.scrollHeight + 'px'
  })
  item.addEventListener('mouseleave', () => {
    link.style.maxHeight = null
  })
})
