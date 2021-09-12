let dateTime = document.getElementById("clock");

// Shows current date and Time
function showDateTime() {
  let currentDateTime = new Date();
  let hours =
    currentDateTime.getHours() < 10
      ? "0" + currentDateTime.getHours()
      : currentDateTime.getHours();

  let mins =
    currentDateTime.getMinutes() < 10
      ? "0" + currentDateTime.getMinutes()
      : currentDateTime.getMinutes();
  let secs =
    currentDateTime.getSeconds() < 10
      ? "0" + currentDateTime.getSeconds()
      : currentDateTime.getSeconds();

  dateTime.innerHTML = hours + ":" + mins + ":" + secs;
}

// Interval method to update time LIVE
setInterval(() => {
  showDateTime();
}, 1000);
