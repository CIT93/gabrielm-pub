// How to calculate your carbon footprint https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1

// Count the number of members in your household
const myHouseholdmembers = 6;
// Size of your home
const myHousesize = 7;
// Evaluate your food choices
const myFoodchoice = 16;
// Your water consumption
const myWaterconsumption = 2;
// Household purchases made each year
const myPurchases = 4;
// How much waste you produce
const myWasteproduced = 30;
// Amount of waste you recycle
const myWasterecycled = 0;
// Annual transportation score
const myAnnualtransportation = 18;
// Add up your points
const cfpTotal = myHouseholdmembers + myHousesize + myFoodchoice + myWaterconsumption + myPurchases + myWasteproduced + myWasterecycled + myAnnualtransportation
// Write JS to update the rendered html (index.html) with total footprint
const myHeading = document.querySelector("h1");
myHeading.textContent = " My Carbon Footprint total is " + cfpTotal;