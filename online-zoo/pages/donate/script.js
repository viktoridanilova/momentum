const burgerMenu = document.querySelector('.burger-menu');
const closeButton = document.querySelector('.burger-menu__button-close');
const menu = document.querySelector('.burger-menu__wrapper');
const background = document.querySelector('.wrapper-background');
const moneySelectWrapper = document.querySelector(".progress-bar__money");
const inputDonate = document.querySelector(".input-summ")
const selectableInputs = document.querySelectorAll(".progress-bar__money-input")
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

moneySelectWrapper.addEventListener("click", setDonateValue)

addEventListener("DOMContentLoaded", () => inputDonate.value = 100)

function setDonateValue() {
    const selectInputValue = document.querySelector("input:checked").value;
    inputDonate.value = selectInputValue
}

inputDonate.addEventListener("input", (event) => setCurrentCheckedValue(event.target.value))

function setCurrentCheckedValue(value) {
    selectableInputs.forEach(el => el.checked = el.value === value)
}
