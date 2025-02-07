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

function start(houseHoldmembers, houseSize) {
    const householdPTS = determineHouseholdpts(houseHoldmembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseSizePTS + householdPTS;
    cfpData.push([houseHoldmembers,houseSize,householdPTS,houseSizePTS,total]);
}

function displayOutput(){

}

start(1,"large");
start(2,"large");
start(3,"large");
start(4,"large");
start(5,"large");
start(6,"large");
start(7,"large");
start(1,"medium");
start(2,"medium");
start(3,"medium");
start(4,"medium");
start(5,"medium");
start(6,"medium");
start(7,"medium");
start(1,"small");
start(2,"small");
start(3,"small");
start(4,"small");
start(5,"small");
start(6,"small");
start(7,"small");
start(1,"large");
start(2,"large");
start(3,"large");
start(4,"large");
start(5,"large");
start(6,"large");
start(7,"large");

displayOutput()