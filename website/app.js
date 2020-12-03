/* Global Variables */
let cityInput = document.getElementById("cityInput");
let userFeelInput = document.getElementById("feelings");
let generateBtn = document.getElementById("generate");
let personalApiKey = "c7f3b1797amsh1255718ee0c7d32p1db682jsn6a55d139afe7";
let DataObj = {};


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getUTCDate()+ '.' + d.getUTCMonth() + '.' + d.getFullYear();

/**  Create function to get weather data from api */

async function getweather(place="cairo") {
    try {
        let data = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${place}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": personalApiKey,
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "content-type": "application/json"
            }
        }).then(response => response.json())
        console.log(data)
        let temprature = data.main.temp;
        return temprature;
    } catch (error) {
        console.log(error);
    }
}
//getweather("giza")
/**  Create function to post data to server */
let postData = async (url = '/dataApi', data) => {
    let response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.text())
    console.log(response)
}

/** Create function to Update UI dynamiclay */
let UpdateUi = async () => {
    let DataObj = await fetch('/dataApi').then(response => response.json());
    document.getElementById("city").innerText = `${DataObj.userResponse.place}`;
    document.getElementById("date").innerText = `${DataObj.date}`;
    document.getElementById("temp").innerHTML = `${DataObj.temp}<sup class="">o</sup>c`;

}

// click event function 

generateBtn.addEventListener("click", async (e) => {
    let place = cityInput.value;
    let feelings = userFeelInput.value;
    DataObj.userResponse = { place: place, feelings }
    let getTemp = await getweather(place);
    DataObj.date = newDate;
    DataObj.temprature = getTemp;
    postData("/dataApi", DataObj)
    UpdateUi()
})