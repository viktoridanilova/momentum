const burgerMenu = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.burger-menu__button-close');
const menu = document.querySelector('.burger-menu__wrapper');
const background = document.querySelector('.wrapper-background');

const userCards = document.querySelector('.layout-4-column');
const popup = document.getElementById('wrapper-popup');
const closePopup = document.querySelector('.close-popup');

const scroll = document.querySelector('.testimonials__scroll');
const target = document.querySelector('.testimonials__user-card');
const carouselScroll = document.querySelector('.layout-4-column');

const buttonLeft = document.querySelector('.pets__button-left');
const buttonRight = document.querySelector('.pets__button-right');
const carousel = document.querySelector('.carousel');
const itemLeft = document.querySelector('.pets__wrapper_left');
const itemCenter = document.querySelector('.pets__wrapper');
const itemRight = document.querySelector('.pets__wrapper_right');
const randomImgLeft = document.querySelectorAll('.random_left');
const randomImgRight = document.querySelectorAll('.random_right');
const cardLeft = document.querySelectorAll('.card_left');
const body = document.querySelector('.body');



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
    popup.style.display = 'none';
    popup.classList.remove("wrapper-popup")
    popup.removeChild(selectedCard);
    body.classList.remove('body_scroll'); 
})

let selectedCard

const showPopup = (event) => {
    selectedCard =
    event.path.length ? event.path.find(el => el.className.includes('testimonials__user-card')).cloneNode(true) : null
    if (!popup.classList.contains('wrapper-popup') && selectedCard && window.innerWidth <= 640) {
        selectedCard.classList.remove('testimonials__user-card'); 
        selectedCard.classList.remove('passive'); 
        selectedCard.classList.add('popup__user-card');
       
        popup.appendChild(selectedCard);
        popup.classList.add('wrapper-popup');
        popup.style.display = 'block';
        popup.style.transform = 'translateY(0px)';
        
        closePopup.style.display = 'block';
        background.style.display = 'block';
        body.classList.add('body_scroll');      
    }   
}

userCards.addEventListener('click', showPopup);

closePopup.addEventListener('click', () => {
    debugger
    popup.style.display = 'none';
    closePopup.style.display = 'none';
    background.style.display = 'none';
    popup.classList.remove('wrapper-popup');
    popup.removeChild(selectedCard);
    body.classList.remove('body_scroll'); 
})


const scrollMoveLeft = () => {
    carouselScroll.style.transform = `translateX(${currentTranslateX}px)`;
}
const scrollMoveRight = () => {
    carouselScroll.style.transform = `translateX(${currentTranslateX}px)`;
}
let prevValues = [0];
let currentTranslateX = 0;

const rangeScroll = function(){
    const currentValue = scroll.value;
    prevValues.unshift(currentValue);
    const delta = Number(currentValue) - prevValues[1];

    if (prevValues[1] < currentValue) {
        currentTranslateX -= 297 * delta;
        scrollMoveRight();
    } else {

        currentTranslateX += 297 * Math.abs(delta) ;
        scrollMoveLeft();
    }
}

scroll.addEventListener("input", rangeScroll);

const moveLeft = () => {
    carousel.classList.add('transition-left');
    buttonLeft.removeEventListener('click', moveLeft);
    buttonRight.removeEventListener('click', moveRight);
}

const moveRight = () => {
    carousel.classList.add('transition-right');
    buttonRight.removeEventListener('click', moveRight);
    buttonLeft.removeEventListener('click', moveLeft);
}

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);

const animalCards = [itemLeft, itemCenter, itemRight];

carousel.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-left') {
        carousel.classList.remove('transition-left');
        const currentCard = animalCards[2];

        animalCards.pop(currentCard);
        animalCards.unshift(currentCard);
        carousel.replaceChildren(...animalCards);             

    } 
    if (animationEvent.animationName === 'move-right') {
        const currentCard = animalCards[0];
        carousel.classList.remove('transition-right');
        animalCards.shift(currentCard);
        animalCards.push(currentCard);
        carousel.replaceChildren(...animalCards); 
    }

    buttonLeft.addEventListener('click', moveLeft);
    buttonRight.addEventListener('click', moveRight);
})




