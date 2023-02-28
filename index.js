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

const doConversions = (val) => {
    val = inputNum.value
    convertLength(val)
    convertVolume(val)
    convertMass(val)
    reset(val)
};

const convertLength = (value) => { 
    return length.textContent = 
    `${value} meters = ${(value * metersToFeet).toFixed(3)} feet |
    ${value} feet = ${(value / metersToFeet).toFixed(3)} meters`
};    

const convertVolume = (value) => {
    return volume.textContent = 
    `${value} liters = ${(value * litersToGallons).toFixed(3)} gallons |
    ${value} gallons = ${(value / litersToGallons).toFixed(3)} liters`
};

const convertMass = (value) => { 
    return mass.textContent = 
    `${value} kilos = ${(value * kilosToPounds).toFixed(3)} pounds |
    ${value} pounds = ${(value / kilosToPounds).toFixed(3)} kilos`
}

const reset = () =>
    inputNum.value = "";    
 

 /****** EVENT LISTENERS ******/

convertBtn.addEventListener("click", doConversions);


