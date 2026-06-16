import './../css/minecraft.css';

const since = new Date(1731161544000);

function timeSince(startDate) {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();
  let hours = now.getHours() - startDate.getHours();
  let minutes = now.getMinutes() - startDate.getMinutes();
  let seconds = now.getSeconds() - startDate.getSeconds();

  // Adjust negatives by "borrowing" from the bigger unit
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    // Get days in previous month
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  return { years, months, days, hours, minutes, seconds };
}

function updateCount(element, type, value) {
  element.children[0].textContent = value;
  element.children[1].textContent = value == 1 ? type : type + 's';
}

function updateCounter() {
  const { years, months, days, hours, minutes, seconds } = timeSince(since);

  updateCount(document.getElementById('time-years'), 'year', years);
  updateCount(document.getElementById('time-months'), 'month', months);
  updateCount(document.getElementById('time-days'), 'day', days);
  updateCount(document.getElementById('time-hours'), 'hour', hours);
  updateCount(document.getElementById('time-minutes'), 'minute', minutes);
  updateCount(document.getElementById('time-seconds'), 'second', seconds);
  
  requestAnimationFrame(updateCounter);
}

updateCounter();