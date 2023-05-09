window.onload = function () {

    var millisecond = 0;
    var second = 0;
    var minute = 0;

    const min = document.getElementById("min")
    const sec = document.getElementById("sec")
    const millisec = document.getElementById("millisec")

    const start = document.getElementById("start")
    const stop = document.getElementById("stop")
    const reset = document.getElementById("reset")

    var Interval;

    function startTimer() {
        clearInterval(Interval)
        Interval = setInterval(displayTime, 10)
    }
    start.addEventListener("click", startTimer)

    function stopTimer() {
        clearInterval(Interval)
    }
    stop.addEventListener("click", stopTimer)

    function resetTimer() {
        clearInterval(Interval)
        minute = "00"
        second = "00"
        millisecond = "00"

        min.innerHTML = minute
        sec.innerHTML = second
        millisec.innerHTML = millisecond
    }
    reset.addEventListener("click", resetTimer)

    function displayTime() {
        millisecond++;

        if (millisecond <= 9) {
            millisec.innerHTML = "0" + millisecond;
        }

        if (millisecond > 9) {
            millisec.innerHTML = millisecond;

        }

        if (millisecond > 99) {
            second++;
            sec.innerHTML = "0" + second;
            millisecond = 0;
            millisec.innerHTML = "0" + 0;
        }

        if (second > 9) {
            sec.innerHTML = second;
        }

        if (second > 59) {
            minute++;
            min.innerHTML = "0" + minute;
            second = 0;
            sec.innerHTML = "0" + 0;
        }

    }
}



