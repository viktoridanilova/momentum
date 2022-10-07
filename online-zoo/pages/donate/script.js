const burgerMenu = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.burger-menu__button-close');
const menu = document.querySelector('.burger-menu__wrapper');
const background = document.querySelector('.wrapper-background');

burgerMenu.addEventListener('click', () => {
        menu.style.display = 'flex';
        menu.style.top = '0px';
        menu.style.transform = 'translateY(0px)';
        background.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    menu.style.top = '-340px';
    background.style.display = 'none';
})

background.addEventListener('click', () => {
    menu.style.top = '-340px';
    background.style.display = 'none';
})