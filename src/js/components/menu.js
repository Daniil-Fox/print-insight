const menu = document.querySelector('.menu')

const menuBtn = document.querySelectorAll('.menu-btn')
const menuClose = menu.querySelector('.menu__close')

menuBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    menu.classList.add('active')
    document.body.style.overflow = 'hidden'
  })
})

menuClose.addEventListener('click', e => {
  menu.classList.remove('active')
  document.body.style.overflow = null
})


if(menu){
  const catalogueMenu = menu.querySelector('.menu-catalogue')

  catalogueMenu.addEventListener('click', e => {
    e.preventDefault()
    catalogueMenu.addEventListener('click', e => {
      location.href = catalogueMenu.href
    })


    const catalogueMenuItems = menu.querySelector('.menu-dropdown__list')


    let isActive = catalogueMenuItems.classList.toggle('active')


    if(isActive){
      catalogueMenuItems.style.maxHeight = catalogueMenuItems.scrollHeight + 'px'
      setTimeout(() => {
        catalogueMenuItems.style.maxHeight = 'unset'
      }, 300)
    } else {

      catalogueMenuItems.style.maxHeight = catalogueMenuItems.scrollHeight + 'px'
      setTimeout(() => {
        catalogueMenuItems.style.maxHeight = null
      }, 300)
    }
  })

  const dropdownItems = document.querySelectorAll('.menu-dropdown__item')

  dropdownItems.forEach(item => {
    const catalogueMenuLink = item.querySelector('.menu-dropdown__link')
    item.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      const content = item.querySelector('.menu-nav__list')
      let isActive = catalogueMenuLink.classList.toggle('active')

      content.style.maxHeight = isActive ? content.scrollHeight + 'px' : null
    })
  })
}
