const selectItems = document.querySelectorAll('.select')

if(selectItems && selectItems.length > 0){
  selectItems.forEach(el => {
    const btn = el.querySelector('.select__icon')
    const selectDropdown = el.querySelector('.select__dropdown')
    const input = el.querySelector('.select__input')
    const selectValues = selectDropdown.querySelectorAll('.select__item')
    btn.addEventListener('click', e => {
      e.preventDefault()
      let isActive = selectDropdown.classList.toggle('active')
      selectDropdown.style.maxHeight = isActive ? selectDropdown.scrollHeight + 'px' : null
    })

    selectValues.forEach(val => {
      val.addEventListener('click', e => {
        input.value = val.textContent

        selectDropdown.classList.remove('active')
        selectDropdown.style.maxHeight = null
      })
    })
  })
}
