import birdsDataEn from './birdsDataEn.js';
const birdsContainer = document.querySelector(".choice__list");
const buttonPlayOrStop = document.querySelector('.play');
const descriptionContainer = document.querySelector(".description");
const itemsBlock = document.querySelector(".choice__list");
const descriptionImg = document.querySelector(".description__img");
const descriptionTitle = document.querySelector(".description__title");
const descriptionSubtitle = document.querySelector(".description__subtitle");
const descriptionText = document.querySelector(".description__text-description");
const text = document.querySelector(".description__text");
const descriptionWrapper = document.querySelector(".wrapper-description");
const resultBirdName = document.querySelector(".current-bird__name");
const choiceItemButton = document.querySelector(".choice__item-button");
const choiceItem = document.querySelectorAll(".choice__item");
const resultImg = document.querySelector(".current-bird__img");
const buttonNext = document.querySelector(".button_next");
const questionsList = document.querySelector(".header__questions-list");
const questionsItem = document.querySelectorAll(".header__questions-item");

let win = false
let currentLevel = 0;
let birdName

function generateBirdName () {
    birdName = birdsDataEn[currentLevel][generateRandomBird(0,5)].name; 
}

generateBirdName ()

function displayBirds(level) {
    const birdItems = document.querySelectorAll(".choice__item");
    birdsDataEn[level].forEach((birdsObject, index) => {
        const birdsItemName = birdItems[index].querySelector(".choice__item-name");
        birdsItemName.innerHTML = birdsObject.name
    })    
}

displayBirds(currentLevel)

itemsBlock.addEventListener("click", (event) => {
    if (win === true) return;
    const clickedElement = event.target.closest('.choice__item')
    const name = clickedElement.innerText
    const obj = birdsDataEn[currentLevel].find(birdsObject => birdsObject.name === name);
    if (win === false) {
        displayCardInfo(obj, name);
        checkBirdName(obj, clickedElement);
    } 
})

function displayCardInfo(birdsObject) {
    text.style.display = 'none';
    descriptionWrapper.style.display = 'flex';
    descriptionWrapper.style.flexDirection = 'column';
    descriptionImg.setAttribute("src", birdsObject.image);
    descriptionTitle.innerHTML = birdsObject.name;
    descriptionSubtitle.innerHTML = birdsObject.species;
    descriptionText.innerHTML = birdsObject.description;
}

function generateRandomBird(min, max) {
    let random = 0;
    min = Math.ceil(0);
    max = Math.floor(6);
    random = Math.floor(Math.random() * (max - min)) + min;
    return random
}

function checkBirdName (birdsObject, element) {
    const name = element.innerText;
    const button = element.querySelector(".choice__item-button");

    if (birdName === name) {
        resultBirdName.innerHTML = name;
        resultImg.setAttribute("src", birdsObject.image)
        button.style.background = "green";
        element.style.background = "#80c980";
        musicWin();
        win = true;
        clickButtonNext();
    } else {
        button.style.background = "red";
        element.style.background = "rgb(169 164 164 / 84%)";
        musicWrong();
    }
}


