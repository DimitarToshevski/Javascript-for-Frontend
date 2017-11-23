//Write a JS program that retries arrival times for all buses by given bus stop ID when a button is clicked.
//The webhost will respond with valid data to IDs 1287, 1308, 1327 and 2334.

function getInfo() {
    const stopId = $('#stopId');
    const stopName = $('#stopName');
    const busesContainer = $('#buses');

    stopName.text('');
    busesContainer.text('');

    if (stopId.val().length == 0) {
        stopName.text('Stop ID cannot be empty.');
        return;
    }

    $.ajax({
        url: `https://judgetests.firebaseio.com/businfo/${stopId.val()}.json`,
        beforeSend: ()=> {
            stopName.text('Loading...')
        },
        success: loadData,
        error: errorHandler
    });

    function loadData(data) {
        stopName.text(`${data["name"]}`);
        for (let bus in data["buses"]) {
            busesContainer.append($(`<li>Bus ${bus} arrives in ${data["buses"][bus]} minutes</li>`));
        }
    }

    function errorHandler() {
        stopName.text('Error');
    }
}