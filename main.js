const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const MenuIcon = document.querySelector('.menu')
const carritoCompras = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')


email.addEventListener('click', ()=>{
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
})
MenuIcon.addEventListener('click', ()=>{
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
})
carritoCompras.addEventListener('click', ()=>{
    if (!mobileMenu.classList.contains('inactive')) {
            mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');

    }
    productDetail.classList.toggle('inactive');

})


const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Celular',
    price: 6000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

const renderProducts = (arr) =>{
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img= document.createElement('img')
        img.setAttribute('src',product.img)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' +product.price
        const productName = document.createElement('p')
        productName.innerText= product.name
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
    
        productInfoFigure.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)

