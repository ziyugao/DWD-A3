// make api request
// wait to get a response
// set img src
const timeButton = document.getElementById("main-image");
timeButton.onmouseover = function() {
    const url = "http://worldtimeapi.org/api/timezone/America/New_York";
    const text = document.getElementById("time-text");
    // block until get data
    fetch(url)
        .then(function(response){
            return response.json(); // known as json, parse it to json
        })
        .then(function(json){
            const options = { hour: "2-digit" };
            const date = new Date(json.datetime)
            const hours = date.getHours();
            const minutes = date.getMinutes()
            text.textContent = hours + ":" + minutes // same as `${hours}:${minutes}`
        });
    
}
