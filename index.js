/****** VARIABLES ******/

//BUTTON
const convertBtn = document.getElementById("convert");

//TEXT INPUT FIELD
const inputNum = document.getElementById("num-val");

//NUMBER VARIABLES
const metersToFeet = 3.281;
const litersToGallons = 0.264;
const kilosToPounds = 2.204

//PARAGRAPHS FOR CONVERSION CONTENT
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");


/****** FUNCTIONS ******/

//! Can I use parameters and variables to make this DRYer / less repetitive?

const convertLength = () => { 
    let value = inputNum.value;

    return length.textContent = 
    `${value} meters = ${(value * metersToFeet).toFixed(3)} feet |
    ${value} feet = ${(value / metersToFeet).toFixed(3)} meters`
};    

const convertVolume = () => {
    let value = inputNum.value;

    return volume.textContent = 
    `${value} liters = ${(value * litersToGallons).toFixed(3)}} gallons |
    ${value} gallons = ${(value / litersToGallons).toFixed(3)} liters`
};

const convertMass = () => { 
    let value = inputNum.value;

    return mass.textContent = 
    `${value} kilos = ${(value * kilosToPounds).toFixed(3)} pounds |
    ${value} pounds = ${(value / kilosToPounds).toFixed(3)} kilos`
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



/* CONVERSIONS
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/* CODE I TRIED BUT DID NOT WORK

OBJECT
let data = [
    {
        meters: Math.round((inputNum.value * 3.2808) * 1000) / 1000,
        feet: Math.round((inputNum.value / 3.281) * 1000) / 1000
    }

]

console.log(data[0].meters);

let feet = Math.round((inputNum.value * 3.2808) * 1000) / 1000;
let meters = Math.round((inputNum.value / 3.281) * 1000) / 1000;
let gallons = Math.round((inputNum.value * 0.2642) * 1000) / 1000;
let liters = Math.round((inputNum.value / 0.264) * 1000) / 1000;
let pounds = Math.round((inputNum.value * 2.2046) * 1000) / 1000;
let kilos = Math.round((inputNum.value / 2.204) * 1000) / 1000;

const convertUnits = () => 
    metersToFeet.textContent = `${inputNum.value} meters = ${feet} feet | ${inputNum.value} feet = ${meters} meters`;
    litersToGallons.textContent = `${numValue} liters = ${gallons} gallons | ${numValue} gallons = ${liters} liters`;
    kiloToPounds.textContent = `${numValue} kilos = ${pounds} pounds | ${numValue} pounds = ${kilos} kilos`;

convertBtn.addEventListener("click", convertUnits);

FUNCTION WITH PARAMETERS

function convert(text, num) {
    let value = inputNum.value;

    return text.textContent = 
    `${value} meters = 
    ${Math.round((value * num) * 1000) / 1000} feet |
     ${value} feet = 
     ${Math.round((value / num) * 1000) / 1000} meters`
}

convertBtn.addEventListener("click", convert(length, metersToFeet)); 
convertBtn.addEventListener("click", convert(volume, litersToGallons)); 
convertBtn.addEventListener("click", convert(mass, kilosToPounds));



*/    