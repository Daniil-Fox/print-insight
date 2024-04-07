function setCookie(name, value, expires, path, domain, secure){
  document.cookie = name + "=" + escape(value) +
  ((expires) ? "; expires=" + expires : "") +
  ((path) ? "; path=" + path : "") +
  ((domain) ? "; domain=" + domain : "") +
  ((secure) ? "; secure=" + secure : "");
}

function getCookie(name){
  let cookie = " " + document.cookie
  let search = " " + name + "="
  let setStr = ""
  let offset = 0
  let end = 0

  if(cookie.length > 0){
    offset = cookie.indexOf(search)

    if(offset != -1){
      offset += search.length
      end = cookie.indexOf(";", offset)

      if(end == -1){
        end = cookie.length
      }

      setStr = unescape(cookie.substring(offset, end))
    }
  }
}

function actionFav(action, id){
    let favorites = getCookie('favorites') ? JSON.parse(getCookie('favorites')) : []

    let inArr = false

    for(let i = 0; i < favorites.length; i++){
      if(favorites[i] == id){
        if(action == 'del'){
          favorites.splice(i, 1)
          inArr = true
        }
      }
    }

    if(action == 'add' && !inArr){
      favorites.push(id)

    }
    let d = new Date()
    d.setMonth(d.getMonth() + 1)

    setCookie('favorites', JSON.stringify(favorites), d.toUTCString(), '/')
    return favorites
}

var products = []
const addToFavBtn = document.querySelectorAll('[data-fav-btn]')


if(localStorage.getItem('products')){
  products = JSON.parse(localStorage.getItem('products'))
}


addToFavBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
    const parent = e.target.closest('[data-product]')
    const id = parent.dataset.product
    const name = parent.querySelector('[data-product-name]').dataset.productName
    const price = parent.querySelector('[data-product-price]').dataset.productPrice
    const quantity = parent.querySelector('[data-product-quantity]')?.dataset?.productQunatity
    const img = parent.querySelector('[data-product-img]').dataset.productImg

    const data = {
      id,
      name,
      price,
      quantity : quantity ? quantity : 1,
      img
    }

    let flag = false
    for(let i = 0; i < products.length; i++){
      if(products[i].id === id){
        flag = true
      }
    }

    if(!flag){
      products.push(data)
      localStorage.setItem('products', JSON.stringify(products))
    }
  })
})

function createCard(data){
  return `<div class="added-item favorites-section__item" data-product="${data.id}">
        <div class="added-item__image">
            <img src="${data.img}" alt="">
        </div>

        <div class="added-item__header">
          <span class="added-item__title">${data.name}</span>
          <div class="added-item__buttons">
            <button class="btn-reset added-item__btn added-item__btn--rm">&times;</button>
            <button class="btn-reset added-item__btn added-item__btn--like active">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.04756 3.11756C8.75473 1.61196 9.72421 0.817436 12.1402 2.17559C14.5971 5.5078 11.4426 7.60499 7.04756 11.2812C2.3806 8.22496 1.14853 6.51249 1 3.43164C3.91995 0.186652 4.86263 1.07004 7.01697 3.08889L7.04756 3.11756Z"
                  fill="#FF0000" />
                <path
                  d="M7.04756 3.11756C8.75473 1.61196 9.72421 0.817436 12.1402 2.17559C14.5971 5.5078 11.4426 7.60499 7.04756 11.2812C2.3806 8.22496 1.14853 6.51249 1 3.43164C3.91995 0.186652 4.86263 1.07004 7.01697 3.08889M7.04756 3.11756L7.01697 3.08889M7.04756 3.11756C7.03734 3.10798 7.02714 3.09842 7.01697 3.08889"
                  stroke="#FF0000" />
              </svg>
            </button>
          </div>

          <div class="added-item__select select">
            <div class="select__header">
              <input type="number" class="select__input input-reset" min="0" max="50" value="${data.quantity}">
              <div class="select__icon">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_735_8260)">
                    <path
                      d="M5.5575 6.44531L9 9.88031L12.4425 6.44531L13.5 7.50281L9 12.0028L4.5 7.50281L5.5575 6.44531Z"
                      fill="black" />
                  </g>
                  <defs>
                    <clipPath id="clip0_735_8260">
                      <rect width="18" height="18" fill="white" transform="matrix(0 1 -1 0 18 0)" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="select__dropdown">
              <div class="select__item">5</div>
              <div class="select__item">10</div>
              <div class="select__item">15</div>
              <div class="select__item">20</div>
              <div class="select__item">25</div>
            </div>
          </div>
        </div>
        <div class="added-item__bottom">
          <span class="added-item__price">
            Цена:
            <span>${data.price}руб.</span>
          </span>
        </div>
      </div>
      `
}


const favoritesList = document.querySelector('.favorites-section__items')

if(favoritesList){
  products.forEach(productData => {
    const card = createCard(productData)
    favoritesList.innerHTML += card
  })
}
