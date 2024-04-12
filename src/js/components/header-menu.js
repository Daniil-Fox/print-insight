const menuBtn = document.querySelector('.header-nav-btn')
const headerNav = document.querySelector('.header-nav')
const searchBtn = document.querySelector('.header-search-btn')
const headerSearch = document.querySelector('.header-search')
const header = document.querySelector('.header')

const headerMenu = document.querySelector('.header__menu')

let isHeaderActive = false
let isNavActive = false
let isSearchActive = false
headerMenu.addEventListener('click', e => {

  if(e.target.classList.contains('header-nav-btn')){
    isHeaderActive = header.classList.add('active')

    isNavActive = headerNav.classList.toggle('active')

    if(isSearchActive){
      headerSearch.style.maxHeight = null
      headerSearch.classList.remove('active')
      isHeaderActive = false
    }


    if(isNavActive){
      headerNav.style.maxHeight = headerNav.scrollHeight + 'px'
    } else {
      headerNav.style.maxHeight = null
      headerNav.classList.remove('active')
      isNavActive = false
      if(!isSearchActive){
        header.classList.remove('active')
      }
    }
  }


  if(e.target.classList.contains('header-search-btn')){
    isHeaderActive = header.classList.add('active')

    isSearchActive = headerSearch.classList.toggle('active')


    if(isNavActive){
      headerNav.style.maxHeight = null
      headerNav.classList.remove('active')
      isNavActive = false
    }


    if(isSearchActive){
      headerSearch.style.maxHeight = headerSearch.scrollHeight + 'px'
    } else {
      headerSearch.style.maxHeight = null
      headerSearch.classList.remove('active')
      isSearchActive = false
      if(!isNavActive){
        header.classList.remove('active')
      }
    }
  }
})
