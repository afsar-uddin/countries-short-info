const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')

    // console.log(countries)

    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('single-country')
        div.innerHTML = `
            <img src=${country.flag} />
            <h3>${country.name}</h3>
            <button onclick="loadByDetail('${country.name}')">Short Information</button>
            `;

        countriesContainer.appendChild(div);
        // console.log(country)
    });
}

const loadByDetail = detail => {
    const url = `https://restcountries.eu/rest/v2/name/${detail}`;
    // console.log(url)

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = countryDetail => {
    // console.log(countryDetail)

    const singleCountry = document.getElementById('country-detail')
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

const loaded = () => {
    document.getElementById('loaded').style.display = "none"
}