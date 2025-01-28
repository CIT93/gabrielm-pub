console.log("Hello from inside the main.js file");

//let myVar;

const myVar = "Gabriel";
const myVarType = typeof(myVar);
console.log("myVarType " + myVarType);
console.log(`myVarType ${myVarType}`);



function runNow () {
    if(myVarType === "number") {
        console.log(`Will 11 run`);
    } else {
        console.log(`Will 13 run`);
    }
}

runNow();
runNow();