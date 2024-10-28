// import fetch from 'node-fetch';

const API_KEY = '5SEL4B7A6BRFVVTV2B4WBJM64';
const BASE_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`

async function getWeather(location) {
    const weather = await fetch(BASE_URL + location + '?key=' + API_KEY)
        .then(function(response) {
            return response.json();
        }).then(function(response) {
            console.log(response.currentConditions.temp);
        }).catch(function(error) {
            console.log(error);
        });
}

async function 

const results = getWeather('Orem,UT');

console.log(results);