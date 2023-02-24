/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//! On button click we receive input value
//! Input value should be a number and greater than 0

//! Convert value from text input field 
//! Three different outputs with a formula for each one


//VARIABLES

const convertBtn = document.getElementById("convert");

const inputNum = document.getElementById("num-val");
const metersToFeet = document.getElementById("m-ft");
const litersToGallons = document.getElementById("l-gal");
const kiloToPounds = document.getElementById("kg-lbs");


//FUNCTIONS

const convert = () => 
    console.log("Button is clicked!");

 
//EVENT LISTENERS

convertBtn.addEventListener("click", convert());