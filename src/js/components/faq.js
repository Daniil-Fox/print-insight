const faqContainer = document.querySelector('.faq-section__list')

if(faqContainer){
  const faqItems = faqContainer.querySelectorAll('.faq-section__item')
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-section__header')
    const content = item.querySelector('.faq-section__content')
    header.addEventListener('click', e => {
      let isActive = item.classList.toggle('active')

      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
    })

  })
}
