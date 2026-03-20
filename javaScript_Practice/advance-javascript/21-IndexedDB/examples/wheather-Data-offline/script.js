let db;
let request = indexedDB.open('weatherApp', 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore('weatherData', { keyPath: 'city' });
};

request.onsuccess = function(event) {
    db = event.target.result;
};

request.onerror = function(event) {
    console.log('Database error: ' + event.target.errorCode);
};

document.getElementById('getWeatherButton').addEventListener('click', fetchWeather);

function fetchWeather() {
    let cityInput = document.getElementById('cityInput');
    let city = cityInput.value;

    // Check if data is already in the IndexedDB
    let transaction = db.transaction(['weatherData'], 'readonly');
    let objectStore = transaction.objectStore('weatherData');
    let getRequest = objectStore.get(city);

    getRequest.onsuccess = function(event) {
        if (event.target.result) {
            displayWeather(event.target.result.data);
        } else {
            fetchWeatherFromAPI(city);
        }
    };

    getRequest.onerror = function(event) {
        console.log('Error retrieving weather data: ' + event.target.errorCode);
    };
}

function fetchWeatherFromAPI(city) {
    // Simulating an API call
    setTimeout(() => {
        let data = {
            temperature: '30°C',
            condition: 'Sunny'
        };
        saveWeatherData(city, data);
        displayWeather(data);
    }, 1000);
}

function saveWeatherData(city, data) {
    let transaction = db.transaction(['weatherData'], 'readwrite');
    let objectStore = transaction.objectStore('weatherData');
    objectStore.put({ city: city, data: data });

    transaction.onerror = function(event) {
        console.log('Error saving weather data: ' + event.target.errorCode);
    };
}

function displayWeather(data) {
    let weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.innerHTML = `Temperature: ${data.temperature}, Condition: ${data.condition}`;
}

