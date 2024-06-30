//date

document.addEventListener('DOMContentLoaded', function() {
    // Set the current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Set the last modified date in the footer
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
});

//weather
//static values for temperature and wind speed
let temperature = 30; // °C
let windSpeed = 10; //km/h

//function para calcular o windchill
function calcWindChill(temp, windSpeed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}
//function to display the windchill factor
function displayWindChill() {
    let windChillElement = document.getElementById("windChill");

    if (temperature <= 10 && windSpeed > 4.8) {
        let windChill = calcWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill.toFixed(2)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

window.onload = displayWindChill;