
let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("display-time");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
            if (hours == 60) {
                hours++;
            }
        }
    }

    let s = seconds;
    let hr = hours;
    let min = minutes
    if (s < 10) {
        s = "0" + s;
    }
    if (min < 10) {
        min = "0" + min;
    }

    if (hr < 10) {
        hr = "0" + hr;
    }

displayTime.innerHTML = hr + ":" + min + ":" + s;
}



function watchStart() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [seconds, hours, minutes] = [0,0,0];
    displayTime.innerHTML = "00 : 00 : 00";
}
