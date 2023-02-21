const email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const MenuIcon = document.querySelector('.menu')
const carritoCompras = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')


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
