const africaMain = document.getElementById('africaMain');

fetch('https://restcountries.com/v3.1/region/africa')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(africa => {
            let africaBlock =
            `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="text-center">
                            <a href="${africa.maps.googleMaps}">
                                <img src="${africa.flags.png}" alt="${africa.name.official}" class="card-img-top photo">
                            </a>
                            <h3 class="card-title mt-3">${africa.name.common}</h3>
                        </div>
                        <p class="card-text mt-3">
                        <b>Capital city:</b> ${africa.capital}
                        <br><b>Population:</b> ${africa.population}
                        <br><b>Area:</b> ${africa.area} km<sup>2</sup>
                        <br><b>Time zone: </b> ${africa.timezones}
                        </p>
                    </div>
                </div>
            </div>`;
            africaMain.innerHTML += africaBlock;
        });
    });
