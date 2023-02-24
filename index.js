/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/****** VARIABLES ******/

//BUTTON
const convertBtn = document.getElementById("convert");

//TEXT INPUT FIELD
const inputNum = document.getElementById("num-val");

//PARAGRAPHS FOR CONVERSION CONTENT
const metersToFeet = document.getElementById("m-ft");
const litersToGallons = document.getElementById("l-gal");
const kiloToPounds = document.getElementById("kg-lbs");


/****** FUNCTIONS ******/


//! Can I use parameters and variables to make this DRYer?

const convertLength = () => { 
    return metersToFeet.textContent = 
    `${inputNum.value} meters = 
    ${Math.round((inputNum.value * 3.2808) * 1000) / 1000} feet |
    ${inputNum.value} feet = 
    ${Math.round((inputNum.value / 3.281) * 1000) / 1000} meters`
};    

const convertVolume = () => {
    return litersToGallons.textContent = 
    `${inputNum.value} liters = 
    ${Math.round((inputNum.value * 0.2642) * 1000) / 1000} gallons |
    ${inputNum.value} gallons = 
    ${Math.round((inputNum.value / 0.264) * 1000) / 1000} liters`
};

const convertMass = () => { 
    return kiloToPounds.textContent = 
    `${inputNum.value} kilos = 
    ${Math.round((inputNum.value * 2.2046) * 1000) / 1000} pounds |
    ${inputNum.value} pounds = 
    ${Math.round((inputNum.value / 2.204) * 1000) / 1000} kilos`
}

const reset = () =>
    inputNum.value = "";    
 

    /****** EVENT LISTENERS ******/

//? Is there a way to have less event listeners?
//? I had to separate them into 4 separate instances to get them to work

convertBtn.addEventListener("click", convertLength); 
convertBtn.addEventListener("click", convertVolume);
convertBtn.addEventListener("click", convertMass);
convertBtn.addEventListener("click", reset);