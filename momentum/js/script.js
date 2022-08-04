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
    morning.setHours(6,00,0);
    const morningEnd = new Date();
    morningEnd.setHours(11,59,0);
    
    const afternoon = new Date();
    afternoon.setHours(12,00,0);
    const afternoonEnd = new Date();
    afternoonEnd.setHours(17,59,0);

    const evening = new Date();
    evening.setHours(18,00,0);
    const eveningEnd = new Date();
    eveningEnd.setHours(23,59,0);

    const night = new Date();
    night.setHours(00,00,0);
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&lang=en&appid=4b9833cf58524be6314802104496e329&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    weatherIcon.className = 'weather-icon owf';

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
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