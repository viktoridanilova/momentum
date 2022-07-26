const login = document.querySelector('.header__button');
const windowPopUp = document.querySelector('.popup');
const accountPopUp = document.getElementById('nav__links');
const background = document.querySelector('.wrapper__popup');
const registerPopUp = document.querySelector('.popup-footer__link');
const attention = document.querySelector('.popup-form__button');
const logInPopUp = document.querySelector('.popup-footer__link__in');
let eMail = document.getElementById('email');
let password = document.getElementById('psw');

const windowPopUpSimplified = document.querySelector('.popup__simplified');
let popUpOpen = false;

login.addEventListener('click', (event) => {
    background.style.display = "block";
    windowPopUp.style.display = "flex";
    popUpOpen = true;
})

accountPopUp.addEventListener('click', (event) => {
    background.style.display = "block";
    windowPopUp.style.display = "flex";
    popUpOpen = true;

})

registerPopUp.addEventListener('click', (event) => {
    windowPopUp.style.display = "none"; 
    popUpOpen = true;
    windowPopUpSimplified.style.display = "flex";
})

logInPopUp.addEventListener('click', (event) => {
    windowPopUpSimplified.style.display = "none";
    windowPopUp.style.display = "flex";
    popUpOpen = true;
})

attention.addEventListener('click', () => alert(`${eMail.value}\n ${password.value}`));


window.addEventListener('click', (event) => {

    if (!windowPopUp.contains(event.target) && popUpOpen && event.target !== login && event.target !== accountPopUp && event.target !== windowPopUpSimplified) {
        console.log(event.target)
        background.style.display = "none"; 
        windowPopUp.style.display = "none"; 
        popUpOpen = false;
 }
})


