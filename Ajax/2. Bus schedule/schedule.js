/*Write a JS program that tracks the progress of a bus on it’s route and announces it inside an info box.
 The program should display which is the upcoming stop and once the bus arrives, to request from the server the name
 of the next one. */

let result = (function solve() {
    const infoContainer = $('span');
    const buttonDepart = $('#depart');
    const buttonArrive = $('#arrive');
    let busStopId = 'depot';
    let nextBusStop = '';

    function depart() {
        buttonDepart.attr('disabled', 'true');
        buttonArrive.removeAttr('disabled');
        $.ajax({
            url: `https://judgetests.firebaseio.com/schedule/${busStopId}.json`,
            success: loadInfo,
            error: () => {
                buttonArrive.attr('disabled', 'true');
                buttonDepart.attr('disabled', 'true');
                infoContainer.text('Error');
            }
        });
    }

    function arrive() {
        buttonArrive.attr('disabled', 'true');
        buttonDepart.removeAttr('disabled');
        infoContainer.text(`Arriving at ${busStopId}`);
        busStopId = nextBusStop;
    }

    function loadInfo(data) {
        busStopId = data['name'];
        infoContainer.text(`Next stop ${busStopId}`);
        nextBusStop = data['next'];

    }

    return {
        depart,
        arrive
    }
})();