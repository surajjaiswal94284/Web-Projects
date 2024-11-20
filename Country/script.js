const loader = document.querySelector('.loader');
const resultsDiv = document.getElementById('results');

function showLoader() {
    loader.style.display = 'block';
    resultsDiv.innerHTML = '';
}

function hideLoader() {
    loader.style.display = 'none';
}

async function searchCountry() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    if (!searchTerm) {
        resultsDiv.innerHTML = `
            <div class="alert alert-warning d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-triangle me-2"></i>
                Please enter a country name to search.
            </div>`;
        return;
    }

    showLoader();

    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`);
        const data = await response.json();

        if (data.length > 0) {
            const country = data[0];
            const currencies = Object.values(country.currencies || {})
                .map(c => `${c.name} (${c.symbol})`).join(', ');
                
            const languages = Object.values(country.languages || {}).join(', ');
            const timezones = country.timezones.join(', ');

            resultsDiv.innerHTML = `
                <div class="card shadow-sm mb-4">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${country.flags.svg}" class="img-fluid rounded-start" alt="${country.name.common} flag">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h2 class="card-title fw-bold">${country.name.common}</h2>
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="mb-1"><strong>Official Name:</strong> ${country.name.official}</p>
                                        <p class="mb-1"><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
                                        <p class="mb-1"><strong>Currencies:</strong> ${currencies}</p>
                                        <p class="mb-1"><strong>Languages:</strong> ${languages}</p>
                                    </div>
                                    <div class="col-md-6">
                                        <p class="mb-1"><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                                        <p class="mb-1"><strong>Region:</strong> ${country.region}</p>
                                        <p class="mb-1"><strong>Subregion:</strong> ${country.subregion || 'N/A'}</p>
                                        <p class="mb-1"><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
                                    </div>
                                </div>
                                <p class="mt-3"><strong>Timezones:</strong> ${timezones}</p>
                                <a href="${country.maps.googleMaps}" target="_blank" class="btn btn-primary mt-3">
                                    <i class="bi bi-map"></i> View on Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
        } else {
            resultsDiv.innerHTML = `
                <div class="alert alert-danger d-flex align-items-center" role="alert">
                    <i class="bi bi-x-circle me-2"></i>
                    Country not found. Please check the spelling and try again.
                </div>`;
        }
    } catch (error) {
        resultsDiv.innerHTML = `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                <i class="bi bi-exclamation-circle me-2"></i>
                An error occurred. Please try again later.
            </div>`;
    }

    hideLoader();
}

// Enable search on Enter key
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchCountry();
});
