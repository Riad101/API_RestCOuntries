fetch("https://restcountries.eu/rest/v2/all")
.then(res=> res.json())
.then(data=> displayCountries(data));

const displayCountries = countries => {
    const countriesDiv = document.getElementById("countries")
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement("div");
        // const countryName = document.createElement("H2");
        // countryName.innerText = country.name;
        // const countryCapital = document.createElement("p");
        // countryCapital.innerText = country.capital;
        // countryDiv.appendChild(countryName);
        // countryDiv.appendChild(countryCapital);
        // countriesDiv.appendChild(countryDiv);  
        
        const countryInfo = `
            <h2>${country.name}</h2>
            <p>${country.capital}</p>
            `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}