
 ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


### Overview

[Scrimba](https://scimba.com) Module 3 solo project - unit converter
Frontend Developer Career Path


### The challenge

Requirements:
- follow the design spec [Figma design](https://www.figma.com/file/w4ctQVGzbJpFRoS41wQi4V/Unit-Conversion-(Copy)?node-id=0%3A1&t=HMzMxtgPubz4mkv8-0)
- generate all conversions when the user clicks "convert"
- round the numbers down to three decimal places

Personal stretch goals
 - follow the design spec with no changes
 - responsive design


 ### Screenshot

### Links

- Scrim: [Scrim](https://scrimba.com/scrim/co66f4672bc42a373fbd1968f)
- Github: [Github](https://github.com/casserole27/counter-app)
- Live Site: [Live Site](https://www.clewisdev.com/counter-app/)

## My process

Create Github repository
- initialize README

Setup basic HTML file 
- insert my personal comment credit
- head tag includes stylesheet/link and fonts, double check for meta viewport tag
- initial semantic, accessible markup: placing main, heading and paragraph tags
 - commit and push

Setup basic CSS file
- insert my personal comment credit
- decide on mobile or desktop-first design based on design file examples
- set up root selector with variables: colors, border radius, and font size
- margin, padding, box-size reset, root
- decide on global styles
- commit and push

Consult Figma design files
 - use rems or ems
 - adjust text properties: size, line height, color
 - insert images and color properties
 - decide on layout tools and markup accordingly
 - add effects: borders, box shadows, etc
 - commit and push after each major change

Publish live URL

Check markup and accessibility
(https://validator.w3.org/)
(https://wave.webaim.org/)
 - make adjustments as necessary
 - commit and push
 - finish README


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Responsive Web Design
- vanilla JavaScript

### What I learned

- It is easier to assign specific numbers to variables to be used inside a function.
- I tried building with arrow functions, and their syntax seems way more usable to me.
- I learned the .toFixed() is way easier than Math.round() for certain size numbers.

```javascript
const convertLength = () => { 
    let value = inputNum.value;

    return length.textContent = 
    `${value} meters = ${(value * metersToFeet).toFixed(3)} feet |
    ${value} feet = ${(value / metersToFeet).toFixed(3)} meters`
};  
```  
### Continued development

DRYer code questions:
- functions with parameters
When I try to make a function with parameters, or use funcion() in an event listener, it doesn't work. It seems to try to run all of the code immediately. Why is this?
- multiple event listeners
Is there a way to do this without so many event listeners?


### Useful resources

[Scrimba help](https://projects.scrimba.com/unit-converter)


## Author

- Website - [C Lewis](https://www.clewisdev.com)
- LinkedIn - [LinkedIn](https://www.linkedin.com/in/clewisdev/)


## Acknowledgments





