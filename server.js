const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
// Cors for cross origin allowance
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
let port = 8001;
let server = app.listen(port, () => {
    console.log(`server started at port :  ${port}`)
})

// make post raute to ger data from client side
app.post('/dataApi', (request, response) => {
    console.log(request.body)
    const { userResponse, date, temprature } = request.body;
    let neweEntery = {
        userResponse: userResponse,
        date: date,
        temp: temprature
    }
    projectData = neweEntery;
    console.log(projectData)
    response.send("data recieved")
})


app.get('/dataApi', (request, response) => {
    response.send(projectData);
})
