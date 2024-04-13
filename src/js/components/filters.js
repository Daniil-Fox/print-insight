const filtersContainer = document.querySelector('.filters')
const filtersBtn = document.querySelector('.catalogue-gen__header')
const filtersClose = document.querySelector('.filters__close')

if(filtersContainer){
  filtersBtn.addEventListener('click', e => {
    filtersContainer.classList.add('active')
  })
  filtersClose.addEventListener('click', e => {
    filtersContainer.classList.remove('active')
  })

  const filtersButtons = filtersContainer.querySelectorAll('.filter-head-btn')
  const filtersContent = filtersContainer.querySelectorAll('.filters__content')
  filtersButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      clearActive()
      const data = btn.dataset.filterBtn

      const currentContent = filtersContainer.querySelector(`.filters__content[data-filters-content="${data}"]`)
      btn.classList.add('active')
      currentContent.classList.add('active')
    })
  })

  function clearActive(){
    filtersButtons.forEach(btn => btn.classList.remove('active'))
    filtersContent.forEach(content => content.classList.remove('active'))
  }
}
