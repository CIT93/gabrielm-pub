const cfpData = [];

function determineHouseSizePts(size) {
    
    let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
    return houseSizePoints;
}

function determineHouseholdpts(numberInhousehold) {

    let houseHoldpoints = 0;
    if (numberInhousehold === 1) {
    houseHoldpoints = 14;
    } else if (numberInhousehold === 2) {
    houseHoldpoints = 12;
    } else if (numberInhousehold === 3) {
    houseHoldpoints = 10;
    } else if (numberInhousehold === 4) {
    houseHoldpoints = 8;
    } else if (numberInhousehold === 5) {
    houseHoldpoints = 6;
    } else if (numberInhousehold === 6) {
    houseHoldpoints = 4;
    } else if (numberInhousehold > 6) {
    houseHoldpoints = 2;
    }
    return houseHoldpoints;
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseholdpts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMembers,houseSize,houseHoldPTS,houseSizePTS,total]);
}

function displayOutput(){
    for (arr of cfpData){
        console.log(arr)
        const output = document.getElementById("output");
        const newP = document.createElement("p");
        newP.textContent = `When the number of household members is ${arr[0]}, the carbon score for household members is ${arr[2]}. And when the house size is ${arr[1]}, the carbon score for house size is ${arr[3]}. This means the Carbon footprint total so far is ${arr[4]}`;
        output.appendChild(newP)
    }
}

start(3,"apt");
start(2,"apt");
start(4,"small");
start(3,"small");
start(5,"medium");
start(2,"medium");
start(6,"large");
start(7,"large");

displayOutput()

const myHeading = document.querySelector("h1");
myHeading.textContent = " Carbon Footprint Project, Spring 2025 "