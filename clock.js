let dateTime = document.getElementById('clock');

// Shows current date and Time
function showDateTime() {
  let currentDateTime = new Date();
  dateTime.innerHTML = currentDateTime.getHours() + ':' + currentDateTime.getMinutes() + ':' + currentDateTime.getSeconds()

}

// Interval method to update time LIVE
setInterval(() => {
  showDateTime();
}, 1000);