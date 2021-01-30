let api = 'https://apps.runescape.com/runemetrics/profile/profile';
let user = '?user=Imbued';
let activities = '&activities=20';

let url = api + user + activities;

const leaderboard = document.querySelector('#leaderboard');

fetch(url).then((response) => response.json()).then(function (data) {
    console.log("raw data response: ");
    console.log(data);
    console.log("activities response: ");
    console.log(data.activities);
    
}).catch(function (error) {
    console.log(error);
});

