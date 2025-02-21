const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
    let houseSizePoints = 0;
    if(size === "large") {
        houseSizePoints = 10;
    } else if(size === "medium") {
        houseSizePoints = 7;
    } else if (size === "small") {
        houseSizePoints = 4;
    } else if (size === "apt") {
        houseSizePoints = 2;
    }
     return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
     return houseHoldPoints;
}

function start(houseHoldMembers, houseSize, firstName, lastName) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        houseM: houseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        firstname: firstName,
        lastname: lastName,
        cfpTotal: total
    });
}

function displayOutput() {
    for(obj of cfpData) {
        const newP = document.createElement("p");
        const newH2 = document.createElement("h2");
        newH2.textContent = `${obj.firstname} ${obj.lastname} has a carbon footprint of ${obj.cfpTotal}`;
        const newH3 = document.createElement("h3");
        newH3.textContent = `Based on number in household and size of home`;
        newP.textContent = `This number is based on the number of members in the home of ${obj.houseM} (score: ${obj.houseMPTS})`;
        newP.textContent += ` and a ${obj.houseS} size of home (score: ${obj.houseSPTS})`;
        OUTPUT.appendChild(newH2);
        OUTPUT.appendChild(newH3);
        OUTPUT.appendChild(newP);
    }
}

FORM.addEventListener(`submit`, function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houses.value;
    start(houseMembers, houseSize, firstName, lastName);
    OUTPUT.innerHTML = "";
    displayOutput();
    FORM.reset();
})
