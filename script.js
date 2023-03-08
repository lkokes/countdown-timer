var countDownDate = new Date('September 16, 2023 15:00:00').getTime();

var countDown = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = days <= 9 ? '0' + days : days;
  hours = hours <= 9 ? '0' + hours : hours;
  minutes = minutes <= 9 ? '0' + minutes : minutes;
  seconds =  seconds <= 9 ? '0' + seconds : seconds;

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("minutes").innerHTML = minutes
  document.getElementById("seconds").innerHTML = seconds

  if (days && hours && minutes && seconds === '00') {
    clearInterval(countDown)
  }

}, 1000);