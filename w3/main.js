function determinedHouseholdpts(numberInhousehold){
    console.log("Inside the function");
if (numberInhousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
} else if (numberInhousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
} else if (numberInhousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
} else if (numberInhousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
} else if (numberInhousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
} else if (numberInhousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
} else if (numberInhousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
}
console.log(`Based on the number of members in the household of ${numberInhousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
const numberInhousehold = 3;


//global scope

determinedHouseholdpts(3)
determinedHouseholdpts(4)

let homeSizepts = 0;
const sizeOfhome = "medium"

if (sizeOfhome === "large") {
    homeSizepts = homeSizepts = 10;
}   else if (sizeOfhome === "medium") {
    homeSizepts = homeSizepts = 7;
}   else if (sizeOfhome === "small") {
    homeSizepts = homeSizepts = 4;
}   else if (sizeOfhome === "apartment") {
    homeSizepts = homeSizepts = 2;
}

console.log(`Based on the size of home ${sizeOfhome} the points would be ${homeSizepts}.`);
