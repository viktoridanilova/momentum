import birdsDataEn from './birdsDataEn.js';
const buttonPlayOrStop = document.querySelector('.play');
const itemsBlock = document.querySelector(".choice__list");
const descriptionImg = document.querySelector(".description__img");
const descriptionTitle = document.querySelector(".description__title");
const descriptionSubtitle = document.querySelector(".description__subtitle");
const descriptionText = document.querySelector(".description__text-description");
const text = document.querySelector(".description__text");
const descriptionWrapper = document.querySelector(".wrapper-description");
const resultBirdName = document.querySelector(".current-bird__name");
const choiceItem = document.querySelectorAll(".choice__item");
const resultImg = document.querySelector(".current-bird__img");
const buttonNext = document.querySelector(".button_next");
const questionsItem = document.querySelectorAll(".header__questions-item");
const audioTime = document.querySelector(".current-time");
const audioDuration = document.querySelector(".all-time");
const audioRange = document.querySelector(".player-progress__input");
const birdAudioTime = document.querySelector(".wrapper .current-time");
const birdAudioDuration = document.querySelector(".wrapper .all-time");
const birdAudioRange = document.querySelector(".wrapper .player-progress__input");
const bidrPlayOrStop = document.querySelector(".wrapper .play");
const scoreElement = document.querySelector(".header__score span");
const mainWrapper = document.querySelector(".main__wrapper");
const volumeInput = document.querySelector(".volume-wrapper input");
const blockVictory = document.querySelector(".block-victory");
const blockVictoryContent = document.querySelector(".block-victory__content");

let song = new Audio();
let birdSong = new Audio();
let score = undefined;
let scoreCounter = 5;
let wonFinalRound = false;
let win = false
let currentLevel = 0;
let birdName

function generateBirdName () {
    birdName = birdsDataEn[currentLevel][generateRandomBird(0,5)].name; 
    const obj = birdsDataEn[currentLevel].find(birdsObject => birdsObject.name === birdName);
    song.src = obj.audio;
}

generateBirdName ()

buttonPlayOrStop.addEventListener("click", () => {
    buttonPlayOrStop.classList.toggle("pause");
    if (buttonPlayOrStop.classList.contains('pause')) { 
        playSong(song);
    } else {
        pauseSong(song);
    }
})

bidrPlayOrStop.addEventListener("click", () => {
    bidrPlayOrStop.classList.toggle("pause");
    if (bidrPlayOrStop.classList.contains('pause')) { 
        playSong(birdSong);
    } else {
        pauseSong(birdSong);
    }
})

function playSong (audio) {
    audio.play();
}

function pauseSong (audio) {
    audio.pause();
}

song.addEventListener("timeupdate", () => initProgressBar(audioRange, audioTime, audioDuration, song, buttonPlayOrStop))

function calculatePercentPlayed(elRange, audio) {
    let percentage = (audio.currentTime / audio.duration).toFixed(2) * 100;
    elRange.value = percentage
}


function initProgressBar(elRange, elTime, elDuration, audio, audioButton) {
    if (audio.duration) {
        const currentTime = calculateCurrentValue(audio.currentTime);
        elTime.innerHTML = currentTime;
        elRange.addEventListener('click', seek);
        audio.onended = () => {
            audioButton.classList.add('pause');
            elTime.innerHTML = '00:00';
            elDuration.innerHTML = ""
        };
        elDuration.innerHTML = calculateCurrentValue(audio.duration)
        function seek(e) {
          const percent = e.offsetX / this.offsetWidth;
          audio.currentTime = percent * audio.duration;
        }
        
        calculatePercentPlayed(elRange, audio);
    }
}

function calculateCurrentValue(currentTime) {
    const currentMinute = parseInt(currentTime / 60) % 60;
    const currentSecondsLong = currentTime % 60;
    const currentSeconds = currentSecondsLong.toFixed();
    const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}`: currentMinute}: ${
        currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;

    return currentTimeFormatted;
}

function displayBirds(level) {
    const birdItems = document.querySelectorAll(".choice__item");
    birdsDataEn[level].forEach((birdsObject, index) => {
        const birdsItemName = birdItems[index].querySelector(".choice__item-name");
        birdsItemName.innerHTML = birdsObject.name
    })    
}

displayBirds(currentLevel)

itemsBlock.addEventListener("click", (event) => {
    const clickedElement = event.target.closest('.choice__item');
    const name = clickedElement.innerText
    const obj = birdsDataEn[currentLevel].find(birdsObject => birdsObject.name === name);
    if (win === false) {
        displayCardInfo(obj, name);
        birdSong.addEventListener("timeupdate", () => initProgressBar(birdAudioRange, birdAudioTime, birdAudioDuration, birdSong, bidrPlayOrStop))
        checkBirdName(obj, clickedElement); 
    } else {
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
    bidrPlayOrStop.classList.remove("pause");
    birdAudioRange.value = 0;
    birdAudioDuration.innerHTML = ""
    birdAudioTime.innerHTML = ""
    birdSong.src = birdsObject.audio;
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

    if (birdName === name && !win) {
        resultBirdName.innerHTML = name;
        resultImg.setAttribute("src", birdsObject.image)
        button.style.background = "green";
        element.style.background = "#80c980";
        musicWin();
        win = true;
        pauseSong(song);
        buttonPlayOrStop.classList.remove("pause");
        buttonPlayOrStop.classList.add("play");
        showCongratulations(currentLevel);
        scoreElement.innerHTML = scoreCounter + Number(scoreElement.innerHTML);
        setNextButtonActive();
        
    } else {
        if (element.style.background !== "rgba(169, 164, 164, 0.84)" && !win) {
            button.style.background = "red";
            element.style.background = "rgb(169 164 164 / 84%)";
            musicWrong();
            scoreCounter--;
        } else {
            displayCardInfo(birdsObject) 
        }
    }
}

function musicWin () {
    const audio = new Audio();
    const srcRight = '../music/jg-032316-sfx-elearning-correct-answer-sound-1.mp3';
    audio.src = srcRight;
    audio.play();
}

function musicWrong () {
    const audio = new Audio();
    const srcWrong = '../music/95864731.mp3';
    audio.src = srcWrong;
    audio.play()
}

function playNextLevel () {
    questionsItem.forEach((item, level) => {
        if (level === currentLevel) {
            item.classList.add("active")
        } else {
            item.classList.remove("active")
        }
    })
}

function setNextButtonActive () {
    buttonNext.classList.add("active-button");   
}


buttonNext.addEventListener("click", () => {
    if (win) {
        buttonNext.classList.remove("active-button");
        reset();
        playNextLevel();
        generateBirdName();
        displayBirds(currentLevel);
        buttonPlayOrStop.classList.remove("pause");
        buttonPlayOrStop.classList.add("play");
        birdSong.pause()
        win = false;
    }
})



function reset () {
    resultBirdName.innerHTML = "*****";
    descriptionWrapper.style.display = "none";
    text.style.display = 'block';
    resultImg.setAttribute("src", "../image/silhouette.jpg")
    choiceItem.forEach(item => {
        item.style.background = "none";
        item.querySelector(".choice__item-button").style.background = "rgb(168, 163, 163)"
    })
    win = false;
    currentLevel++;
    generateBirdName();
    scoreCounter = 5;
    audioTime.innerHTML = "";
    audioDuration.innerHTML = "";
}

function showCongratulations (level) {
    if (level === 5) {
        currentLevel = 0;
        wonFinalRound = true;
        pauseSong(song);
        mainWrapper.style.display = "none";
        blockVictory.style.display = "flex";
        blockVictoryContent.innerHTML = `You passed the quiz and scored ${scoreCounter + Number(scoreElement.innerHTML)} out of 30 possible points!`
    } else {
        wonFinalRound = false;
    }
}

volumeInput.addEventListener("change", () => {
    setVolume(volumeInput, song)
})

function setVolume(inputEl, audio) {
    audio.volume = inputEl.value / 100;
}