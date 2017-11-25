let locationProblem1 = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};
let locationProblem2 = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};


//PROBLEM 1 Rendering Sample Data in Console - 30 pts

function renderData(location) {
    console.log(`Location: ${location['name']}`);
    console.log(`Longitude: ${location['longitude']} Latitude ${location['latitude']}`);
    if (location.hasOwnProperty('pokemons')) {
        console.log('Pokemons:');
        for (let pokemon in location['pokemons']) {
            console.log(`###Name: ${location['pokemons'][pokemon]['name']}`);
            console.log(`###Power: ${location['pokemons'][pokemon]['power']}pp`);
            console.log(`###Evolved From: ${location['pokemons'][pokemon]['evolvedFrom']}`);
            console.log(`###Evolves To: ${location['pokemons'][pokemon]['evolvesTo']}`);
        }
    }
}

//PROBLEM 2 Rendering Data in HTML - 30 pts

function renderDataInHTML(location) {
    let containerDiv = $('<div class="container">');
    let resultsDiv = $('<div class="result">');

    //Rendering Location
    let locationDiv = $('<div class="location">');
    let locationCoordinates = $('<div class="location-coordinates">');

    locationCoordinates
        .append(`<h2 class="location-longitude">Longitude: ${location["longitude"]}</h2>`)
        .append(`<h2 class="location-latitude">Latitude: ${location["latitude"]}</h2>`);
    locationDiv
        .append(`<h1 class="location-name">Location: ${location["name"]}</h1>`)
        .append(locationCoordinates);

    resultsDiv.append(locationDiv);

    //Rendering Pokemons
    let pokemonsMainDiv = $('<div class="pokemons">');
    let pokemons = location['pokemons'];

    for (let index in pokemons) {
        let pokemon = pokemons[index];
        let singlePokemonDiv = $('<div class="pokemon">');
        let pokemonStatsDiv = $('<div class="pokemon-stats">');
        pokemonStatsDiv
            .append(`<div class="pokemon-name">Name: ${pokemon["name"]}`)
            .append(`<div class="pokemon-power">Power: ${pokemon["power"]}pp`)
            .append(`<div class="pokemon-evolved-from">Evolved From: ${pokemon["evolvedFrom"]}`)
            .append(`<div class="pokemon-evolves-to">Evolves To: ${pokemon["evolvesTo"]}`);
        singlePokemonDiv
            .append(`<div class="pokemon-title">${pokemon["name"]}</div>`)
            .append(pokemonStatsDiv);
        pokemonsMainDiv.append(singlePokemonDiv);
    }

    resultsDiv.append(pokemonsMainDiv);

    //Rendering All
    containerDiv.append(resultsDiv);
    containerDiv.prependTo($('body'));
}

//PROBLEM 3 Capture Form Input - 10 pts

function attachEvents() {
    let resultDiv = $('.result');
    let input = $('input');
    $('button').on('click', (event) => {
        event.preventDefault();
        if (input.val().length > 0) {
            let resultElementDiv = $(`<div class="result-element">`);
            resultElementDiv.append(input.val());
            resultDiv.append(resultElementDiv);
            input.val('');
        }
    })
}

//PROBLEM 4 Obtaining Data with AJAX and Rendering it Dynamically – 30 pts
function attachEventsProblem4() {
    let input = $('input');
    let resultsDiv = $('.result');

    $('button').on('click', (event) => {
        event.preventDefault();
        //Validating input is not empty
        if (input.val().length > 0) {
            resultsDiv.empty();
            $.ajax({
                url: `https://pokemoncodex.firebaseio.com/locations/${input.val()}.json`,
                beforeSend: () => {resultsDiv.append('<div class="location-name">Loading...</div>')},
                success: renderDataInHTMLProblem4,
                error: errorHandler
            });
            input.val('');
        } else {
            errorHandler()
        }
    });

    function renderDataInHTMLProblem4(location) {
        resultsDiv.empty();

        //Validating in case of Invalid location
        if (location === null) {
            errorHandler();
        }

        //Rendering Location
        let locationDiv = $('<div class="location">');
        let locationCoordinates = $('<div class="location-coordinates">');

        locationCoordinates
            .append(`<h2 class="location-longitude">Longitude: ${location["longitude"]}</h2>`)
            .append(`<h2 class="location-latitude">Latitude: ${location["latitude"]}</h2>`);
        locationDiv
            .append(`<h1 class="location-name">Location: ${location["name"]}</h1>`)
            .append(locationCoordinates);

        locationDiv.appendTo(resultsDiv);

        //Rendering Pokemons
        let pokemonsMainDiv = $('<div class="pokemons">');
        let pokemons = location['pokemons'];

        for (let index in pokemons) {
            let pokemon = pokemons[index];
            let singlePokemonDiv = $('<div class="pokemon">');
            let pokemonStatsDiv = $('<div class="pokemon-stats">');
            pokemonStatsDiv
                .append(`<div class="pokemon-name">Name: ${pokemon["name"]}`)
                .append(`<div class="pokemon-power">Power: ${pokemon["power"]}pp`)
                .append(`<div class="pokemon-evolved-from">Evolved From: ${pokemon["evolvedFrom"]}`)
                .append(`<div class="pokemon-evolves-to">Evolves To: ${pokemon["evolvesTo"]}`);
            singlePokemonDiv
                .append(`<div class="pokemon-title">${pokemon["name"]}</div>`)
                .append(pokemonStatsDiv);
            pokemonsMainDiv.append(singlePokemonDiv);
        }
        pokemonsMainDiv.appendTo(resultsDiv);
        $('.pokemon').on('click', accordion); //attaching accordion function after we have created the element
        resultsDiv.css('display', 'block');
    }

    //Rendering error message on error
    function errorHandler() {
        resultsDiv.append('<div class="error">Error loading location.</div>');
        resultsDiv.css('display', 'block');
        return;
    }

    //The accordion functionality of the pokemons
    function accordion() {
        let pokemonButton = $(this);
        let pokemonStatsDiv = $('.pokemon-stats');

        if (pokemonButton.hasClass('shown')) {
            pokemonButton.find(pokemonStatsDiv).css('display', 'block').slideUp();
            pokemonButton.removeClass('shown');
        } else {
            $('.shown').removeClass('shown').find(pokemonStatsDiv).slideUp();
            pokemonButton.addClass('shown');
            pokemonButton.find(pokemonStatsDiv).css('display', 'block').hide().slideDown();
        }
    }

}


//renderData(locationProblem1);
//renderDataInHTML(locationProblem2);
//attachEvents();
attachEventsProblem4();



