let api = 'https://apps.runescape.com/runemetrics/profile/profile';
let user = '?user=Nayphin';
let activities = '&activities=20';

let url = api + user + activities;

const leaderboard = document.querySelector('#leaderboard');

fetch(url).then((response) => response.json()).then(function (data) {
    
    
}).catch(function (error) {
    console.log(error);
});

