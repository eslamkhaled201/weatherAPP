# Weather-Journal App Project

## Overview
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI.

# Technologies Used :
For Clint side :
    1- HMTL, 
    2- CSS,
    3- BOOTSTRAP, 
    4- JS and AJAX. 
For Server Side :
    1- Node.js, 
    2- Express.js.

## How was it implemented ?
1- Build user interface includes :
    *header for display the name of website ,
    *main body includes : 
        => inputs form for get place or location and feelings of user,
        => button for get weather 
        => div for displaying temprature , date and user entered place or location
 
2- Build client side functionality as following :
    A- get user inputs ,
    B- make funtion get request by user entered place for weather api to get weather(temp) and save temp at global data object ,
    c- make post request for sending data to server side and store it ,
    D- make UI update function to get data from our sever and change UI content by the returend data ,
    E- make click event of get weather button to chain the exection of periouvs functions

3- Build server side as following :
    A- importing project main functionlity modules ,
    B- make app instance , global project data object 
    c- enable body parser as middlewhere , 
    D- enable cros origin sharing for sharing data between our server side and client side ,
    d- pointng at our website folder
    E- create server instance runs at port 8001 ,
    F- make get route to get data from client side and store it at the global project data object ,
    G- make post raute to send data to the client side.

