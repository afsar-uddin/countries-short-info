// Data load
const loadCountries = async () => {
    try {
        const url = 'https://restcountries.eu/rest/v2/all';
        const res = await fetch(url);
        const data = await res.json(res);
        displayCountries(data);
    } catch (error) {
        console.log('someting wrong...')
    }
}

loadCountries();

// Display data
const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')

    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('single-country')
        div.innerHTML = `
            <img src=${country.flag} />
            <h3>${country.name}</h3>
            <button onclick="loadByDetail('${country.name}')">Short Information</button>
            `;

        countriesContainer.appendChild(div)
    });
}

// data load
const loadByDetail = async detail => {
    try {
        const url = `https://restcountries.eu/rest/v2/name/${detail}`;
        const res = await fetch(url);
        const data = await res.json(url);
        displayCountryDetail(data[0]);
    } catch (error) {
        console.log('something wrong...')
    }
}

// short data load as sticky
const displayCountryDetail = countryDetail => {
    const singleCountry = document.getElementById('country-detail');
    singleCountry.innerHTML = `
        <div>
            <h3>${countryDetail.name}</h3>
            <p>Capital: ${countryDetail.capital}</p>
            <p>Population: ${countryDetail.population}</p>
            <p>Area: ${countryDetail.area} SQR Miles</p>
            <p>Region: ${countryDetail.region}</p>
        </div>
    `;
}

// preloader
const loaded = () => {
    document.getElementById('loaded').style.display = "none"
}