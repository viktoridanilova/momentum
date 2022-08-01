const watch = document.querySelector('.time');
const calendar = document.querySelector('.date');
const greetings = document.querySelector('.greeting');
const name = document.querySelector('.name');


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