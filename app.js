

var hours = document.getElementById("hours")
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");
var millisecs = document.getElementById("millisecs");
var interval;

var startButton = document.getElementById("startbutton");
var stopButton = document.getElementById("stopbutton");

var millsec = 0;
var secs = 0;
var min = 0;
var hour = 0 ;

function start() {
  millsec++;
  millisecs.innerHTML = millsec;

  if (millsec === 100) {
    secs++;
    seconds.innerHTML = secs;
    millsec = 0;
  } else if (secs > 59) {
    min++;
    minute.innerHTML = min;
    secs = 0;
     } else if (min > 59) {
         hour++
         hours.innerHTML = hour
         min = 0
     }
  }


function startwatch() {
  interval = setInterval(start, 10);
}



startButton.addEventListener("click", () => {
    startButton.disabled = true;
    stopButton.disabled = false;
  });


  stopButton.addEventListener("click", () => {
      startButton.disabled = false;
      stopButton.disabled = true;
    });  

function resetwatch() {
  clearInterval(interval);
  minute.innerHTML = "00";
  seconds.innerHTML = "00";
  millisecs.innerHTML = "00";
  millsec = 0;
  secs = 0;
  min = 0;
  hour = 0;
}

function stopwatch(){
    clearInterval(interval)
}
