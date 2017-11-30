let continentsProblem1 = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};
let continentsProblem2 = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};
let continentsProblem3 = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};
const divContinents = $('.continents');
const divContinentData = $('.continent-data');
const divContinentCountry = $('.continent-country');
const dropdownSelect = $('<select class="dropdown-select">');


let continentEuropeImg = $('<img src="resources/images/europe.png">');

//PROBLEM 1 Rendering Sample Data – 30 pts

function renderAllContinents(continents) {
    for (let continent in continents) {
        console.log(continent);
    }
}

function renderSingleContinent(continent) {
    console.log(continent.name);
    console.log('Countries:');
    for (let country in continent.countries) {
        console.log(`$$$${country}`);
    }
}

function renderSingleCountry(country) {
    if (country) {
        console.log(country['name']);
        console.log(`Capital: ${country['capital']}`);
        console.log(`Official Language: ${country['officialLanguage']}`);
        console.log(`Population: ${country['population']}`);
        console.log(`Area: ${country['area']} km2`);
        console.log(`Political Status: ${country['politicalStatus']}`);
        console.log(`President: ${country['president']}`);
        console.log(`Official Currency: ${country['officialCurrency']}`);
    }
}

//Rendering Single Continent in HTML
function renderSingleContinentInHTML(continent) {
    //Swtich for changing the image for different continents
    switch (continent['name']) {
        case 'Europe':
            continentEuropeImg.attr('src', 'resources/images/europe.png');
            break;
        case 'Asia':
            continentEuropeImg.attr('src', 'resources/images/asia.png');
            break;
        case 'Africa':
            continentEuropeImg.attr('src', 'resources/images/africa.png');
            break;
        case 'Atlantida':
            continentEuropeImg.attr('src', 'resources/images/atlantida.png');
            break;
        case 'Antarctica':
            continentEuropeImg.attr('src', 'resources/images/antarctica.png');
            break;
        case 'Australia':
            continentEuropeImg.attr('src', 'resources/images/australia.png');
            break;
        case 'North America':
            continentEuropeImg.attr('src', 'resources/images/north america.png');
            break;
        case 'Papadopoulos':
            continentEuropeImg.attr('src', 'resources/images/papadopoulos.png');
            break;
        case 'South America':
            continentEuropeImg.attr('src', 'resources/images/south america.png');
            break;
    }
    let countries = continent['countries'];
    dropdownSelect.empty();
    dropdownSelect.append(`<option disabled selected value> -- select an option -- </option>`);
    //Pushing all countries in the in the select
    for (let country in countries)
        dropdownSelect.append(`<option value="${countries[country]['name']}">${countries[country]['name']}</option>`);
    //Render continent data
    divContinentData
        .append(`<h2 class="continent-title">${continent['name']}`)
        .append(`<h3 class="countries-title">Countries</h3>`)
        .append(dropdownSelect)
        .append($('<div class="continent-image">').append(continentEuropeImg))
}

//Rendering Single Country in HTML
function renderSingleCountryInHTML(country) {
    let divPresident;
    if (!country['president']) {
        divPresident = $(`<div class="country-president">
                <strong>Monarch:</strong>
                <div>${country['monarch']}</div>`)
    } else {
        divPresident = $(`<div class="country-president">
                <strong>President:</strong>
                <div>${country['president']}</div>`);
    }
    if (country) {
        let countryData = $('<div class="country-data">');
        divContinentCountry.empty();
        countryData
            .append(`<div class="country-capital">
                <strong>Capital:</strong>
                <div>${country['capital']}</div>`)

            .append(`<div class="country-official-language">
                <strong>Official Language:</strong>
                <div>${country['officialLanguage']}</div>`)

            .append(`<div class="country-population">
                <strong>Population:</strong>
                <div>${country['population']}</div>`)

            .append(`<div class="country-area">
                <strong>Area:</strong>
                <div>${country['area']} km<sup>2</sup></div>`)

            .append(`<div class="country-political-status">
                <strong>Political Status:</strong>
                <div>${country['politicalStatus']}</div>`)

            .append(divPresident)

            .append(`<div class="country-official-currency">
                <strong>Official Currency:</strong>
                <div>${country['officialCurrency']}</div>`);

        divContinentCountry
            .append($('<div class="country-title">').append(`<h2>${country['name']}`))
            .append(countryData);
    }
}

//PROBLEM 2 Rendering Data in HTML – 30 pts
function renderDataInHTML(continents) {
    divContinents
        .append($('<div class="continent">')
            .append(`<h5 class="continent-title">${continents['Europe']['name']}</h5>`));
    renderSingleContinentInHTML(continents['Europe']);
    renderSingleCountryInHTML(continents['Europe']['countries']['Bulgaria']);
}

//PROBLEM 3 Capture Click event and Dropdown menu Choice – 30 pts
function attachEvents(continents) {
    let divContinents = $('.continents');
    for (let continent in continents) {
        divContinents
            .append($('<div class="continent">')
                .append(`<h5 class="continent-title">${continent}</h5>`));
    }
    //Adding event listeners
    let chosenContinent = {};
    $('.continent').click(()=> {
        if($(event.target).hasClass('shownContinent')) {
            $('.shown').hide();
            $('.shown').empty().removeClass('shown');
            $(event.target).removeClass('shownContinent');
        }
        else {
            $('.shownContinent').removeClass('shownContinent');
            $(event.target).addClass('shownContinent');
            $('.shown').empty().removeClass('shown');
            chosenContinent = {};
            renderSingleContinentInHTML(continents[$(event.target).text()]);
            chosenContinent = $(event.target).text();
            dropdownSelect.on('change', () => {
                let country = $(event.target).val();
                renderSingleCountryInHTML(continents[chosenContinent]['countries'][country]);
            });
            $('.continent-data').addClass('shown').show();
            $('.continent-country').addClass('shown').empty().show();
        }
    });


}

//PROBLEM 4 Obtaining Data with AJAX and Rendering Dynamically – 10 pts
function obtainDataDynimically() {
    //Rendering continent names
    $.ajax({
        url: 'https://continental-drift.firebaseio.com/continents.json',
        success: renderDataDynamically
    });
    function renderDataDynamically(continents) {
        let divContinents = $('.continents');
        for (let continent in continents) {
            divContinents
                .append($('<div class="continent">')
                    .append(`<h5 class="continent-title">${continent}</h5>`));
        }
        //Attaching event listeners to continents
        $('.continent').click(()=> {
            if($(event.target).hasClass('shownContinent')) {
                $('.shown').hide();
                $('.shown').empty().removeClass('shown');
                $(event.target).removeClass('shownContinent');
            }
            else {
                $('.shownContinent').removeClass('shownContinent');
                $(event.target).addClass('shownContinent');
                $('.shown').empty().removeClass('shown');
                let chosenContinent = {};
                let continentName = $(event.target).text();
                $.ajax({
                    url: `https://continental-drift.firebaseio.com/continents/${continentName}.json`,
                    success: renderSingleContinentInHTML
                });
                chosenContinent = continentName;
                //Attaching event listener to Selected country
                dropdownSelect.on('change', () => {
                    let country = $(event.target).val();
                    $.ajax({
                        url: `https://continental-drift.firebaseio.com/continents/${chosenContinent}/countries/${country}.json`,
                        success: renderSingleCountryInHTML
                    });
                });
                $('.continent-data').addClass('shown').show();
                $('.continent-country').addClass('shown').empty().show();
            }});
    }
}

//PROBLEM 1 Functions
//renderAllContinents(continentsProblem1);
//renderSingleContinent(continentsProblem1['Europe']);
//renderSingleCountry(continentsProblem1['Europe']['countries']['Bulgaria']);

//PROBLEM 2 Functions
//renderDataInHTML(continentsProblem2);

//PROBLEM 3 Functions
//attachEvents(continentsProblem3);

//PROBLEM 4 Functions
obtainDataDynimically();