import playList from './playList.js';


const watch = document.querySelector('.time');
const calendar = document.querySelector('.date');
const greetings = document.querySelector('.greeting');
const name = document.querySelector('.name');
const background = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const inputCity = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const playListContainer = document.querySelector('.play-list');
const buttonPrev = document.querySelector('.play-prev');
const buttonPlayOrStop = document.querySelector('.play');
const buttonNext = document.querySelector('.play-next');
let audio = new Audio();
let currentSong = null;
let playNum = 0;



function showTime() {
    const time = new Date();
    const currentTime = time.toLocaleTimeString();
    watch.textContent = `${currentTime}`;
    setTimeout(showTime, 1000);
    showDate();
    getTimeOfDay();
}
showTime();

function showDate() {
    const date = new Date();
    const options = {weekday: 'long', day: 'numeric', month: 'long', }
    const currentDate = date.toLocaleDateString('en-US', options);
    calendar.textContent = `${currentDate}`;
}
showDate();


function getTimeOfDay() {
    const currentDate = new Date();

    const morning = new Date();
    morning.setHours(6,0,0);
    const morningEnd = new Date();
    morningEnd.setHours(11,59,0);
    
    const afternoon = new Date();
    afternoon.setHours(12,0,0);
    const afternoonEnd = new Date();
    afternoonEnd.setHours(17,59,0);

    const evening = new Date();
    evening.setHours(18,0,0);
    const eveningEnd = new Date();
    eveningEnd.setHours(23,59,0);

    const night = new Date();
    night.setHours(0,0,0);
    const nightEnd = new Date();
    nightEnd.setHours(5,59,0);
    if (currentDate >= morning && currentDate <= morningEnd) {
        return "morning";
    }
    if (currentDate >= afternoon && currentDate <= afternoonEnd) {
        return "afternoon";
    }
    if (currentDate >= evening && currentDate <= eveningEnd) {
        return "evening";
    }
    if (currentDate >= night && currentDate <= nightEnd) {
        return "night";
    }
}
greetings.textContent = `Good ${getTimeOfDay()}`;

function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getImageNumber() {
    return converNumberToString(getRandomNum(1, 20));
  }

  function converNumberToString(number) {
    if (number > 0 && number <= 9) {
      return number.toString().padStart(2, "0");
    } else return number;
  }

  let randomImageNumber = getImageNumber();
  setBg(randomImageNumber)
  
  function getSlideNext() {
   if(randomImageNumber == 20) {
    randomImageNumber = 0;
   }
   randomImageNumber++
   setBg(converNumberToString(randomImageNumber))
  }

  function getSlidePrev() {
    if (randomImageNumber == 1) {
      randomImageNumber = 21;
    }

    randomImageNumber--;
    setBg(converNumberToString(randomImageNumber))
    
  }

  function setBg(imageNumber) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/viktoridanilova/stage1-tasks/assets/images/${getTimeOfDay()}/${imageNumber}.jpg`;
    img.onload = () => { 
    background.style.background = `url(${img.src}) center/cover rgba(0, 0, 0, 0.5)`;
  };
}

  slidePrev.addEventListener('click', getSlidePrev);

  slideNext.addEventListener('click', getSlideNext);

  async function getWeather() {  

    const value = inputCity.value !== "" ? inputCity.value : "Minsk"
    console.log(value)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&lang=en&appid=4b9833cf58524be6314802104496e329&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
 
    if (res.status === 200 && data.cod !== (400 & 404) && data.weather) {
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${Math.floor(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } else {
      weatherIcon.classList = "";
      temperature.textContent = "The city not found";
      weatherDescription.textContent = "";
      wind.textContent = "";
      humidity.textContent = "";
    } 
  }
  getWeather()

  inputCity.addEventListener('keydown', getWeather);
  
  inputCity.addEventListener('mouseout', getWeather);

  

  function setLocalStorageCity() {
    localStorage.setItem('inputCity', inputCity.value);
  }
  window.addEventListener('beforeunload', setLocalStorageCity)

  function getLocalStorageCity() {
    if(localStorage.getItem('inputCity')) {
      inputCity.value = localStorage.getItem('inputCity');
    }
  }
  window.addEventListener('load', getLocalStorageCity);
  window.addEventListener('load', getWeather);

  const quotesList = []

  async function getQuotes() {  
    
    const quotes = 'data.json';
    fetch(quotes)
    .then(res => res.json())
    .then(data => { 
      quotesList.push(data)
      setRandomQuotes()
    });
    
  }
  getQuotes();

  function setRandomQuotes() {
    const randomNum = getRandomNum(0,10)

    quote.innerHTML = quotesList[0][randomNum].text;
    author.innerHTML = quotesList[0][randomNum].author;
  }

  changeQuote.addEventListener("click", setRandomQuotes);



  playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    playListContainer.append(li);
  })
  
  function playOrPauseAudio() {
    if (audio.paused) {    
      audio.src = playList[playNum].src  
      audio.play()
      audio.currentTime = 0;
      buttonPlayOrStop.classList.add('pause'); 
      document.querySelectorAll(".play-item")[playNum].style.setProperty("--color", "green")
    }
    else {
      audio.pause();
      buttonPlayOrStop.classList.remove('pause'); 
    }  
  }
  
  audio.addEventListener("timeupdate", () => {
    if (!audio.paused && Math.floor(audio.currentTime) === playList[playNum].duration) {
        playNext();
    }
    
  })


  buttonPlayOrStop.addEventListener('click', playOrPauseAudio);

  function playNext() {
    if (playNum >= 3) {
      playNum = -1
    }
    playNum++;
    toggleActiveSong()
    audio.src = playList[playNum].src
    audio.play()  
  }

  function playPrev() {
    if (playNum <= 0) {
      playNum = 4
    }
    playNum--;
    toggleActiveSong()
    audio.src = playList[playNum].src
    audio.play()  
    
  }

  function toggleActiveSong() {
    const querySongList = document.querySelectorAll(".play-item")
    querySongList.forEach(song => {
      song.style.setProperty("--color", "white")
    })

    querySongList[playNum].style.setProperty("--color", "green")
  }

  buttonPrev.addEventListener('click', playPrev);
  buttonNext.addEventListener('click', playNext);




  


