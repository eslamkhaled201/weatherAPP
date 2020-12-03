/* Global Variables */
let placeInput = document.getElementById("placeInput");
let userFeelInput = document.getElementById("feelingsInput");
let generateBtn = document.getElementById("generate");
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?';
let qureyOption = 'zip';
let personalApiKey = "&appid=63130463110e9019e37da1a53e7c796a";
let DataObj = {};


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getUTCDate()} / ${d.getUTCMonth()+1} / ${d.getFullYear()}`;

/**  Create function to get weather data from api */

async function getweather(baseURL, place = "85001") {
    try {
        let data = await fetch(`${baseURL}${qureyOption}=${place}${personalApiKey}`).then(response => response.json())
        console.log(data)
        let temprature = data.main.temp;
        return temprature;
    } catch (error) {
        console.log(error);
    }
}

//getweather(baseURL , "cairo")
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
    document.getElementById("content").innerText = `${DataObj.userResponse.feelings}`;
    document.getElementById("date").innerText = `${DataObj.date}`;
    document.getElementById("temp").innerHTML = `${DataObj.temp}<sup class="">o</sup>c`;
}

// click event function 

generateBtn.addEventListener("click", async (e) => {
    let place = placeInput.value;
    if (place == '') {
        alert('no zipcode or city entered')
    } else {
        // determine query option according to user entered place 
        if (isNaN(place) == true) qureyOption = 'q' ;
        let feelings = userFeelInput.value;
        DataObj.userResponse = { place: place, feelings: feelings }
        let getTemp = await getweather(baseURL, place);
        DataObj.date = newDate;
        DataObj.temprature = getTemp;
        postData("/dataApi", DataObj)
        UpdateUi()
    }

})