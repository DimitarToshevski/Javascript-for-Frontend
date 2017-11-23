$(timer);
function timer() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let secondsSpan = '#seconds';
    let minutesSpan = '#minutes';
    let hoursSpan = '#hours';
    $('#start-timer').on('click', () => {
        timer = setInterval(step, 1000);
    });
    $('#stop-timer').on('click', () => {
        clearInterval(timer);
        seconds = 0;
        minutes = 0;
        hours = 0;
    });

    function step() {
        //keeping the lead 0 check
        if (seconds < 10) {
            $(secondsSpan).text('0' + seconds);
        } else $(secondsSpan).text(seconds);
        if (minutes < 10) {
            $(minutesSpan).text('0' + minutes);
        } else $(minutesSpan).text(minutes);
        if (hours < 10) {
            $(hoursSpan).text('0' + hours);
        } else $(hoursSpan).text(hours);

        seconds++;

        if (seconds == 60) {
            minutes++;
            seconds = 0;

            if (minutes == 60) {
                hours++;
                minutes = 0;
            }
        }
    }
}