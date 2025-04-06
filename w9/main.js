import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js"
import { saveLS, cfpData } from "./storage.js"

function start(houseHoldMembers, houseSize, firstName, lastName) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push({
        firstname: firstName,
        lastname: lastName,
        houseM: houseHoldMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePTS,
        cfpTotal: total
    });
}

renderTbl(cfpData);

function validateField(event) {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById('${fieldId}Error');

    if (field === '') {
        fieldError.textContent = '${fieldId} is required';
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid')
    }    
}




    
    
FORM.addEventListener(`submit`, function(e){
    e.preventDefault();
    const firstnameIsValid = document.getElementById('firstname').value !== '';
    const lastnameIsValid = document.getElementById('firstname').value !== '';
    document.getElementById('firstname').addEventListener('blur',validateField);
    document.getElementById('lastname').addEventListener('blur',validateField);
    document.getElementById('simpleForm').addEventListener('submit', function(event) {
    
        event.preventDefault();
    if (firstnameIsValid && lastnameIsValid) {
        renderTbl(cfpData);
        FORM.reset();
    }
})



//FORM.addEventListener(`submit`, function(e){
    //e.preventDefault();
    //const firstName = FORM.firstname.value;
    //const lastName = FORM.lastname.value;
    //const houseMembers = parseInt(FORM.housem.value);
    //const houseSize = FORM.houses.value;
    //start(houseMembers, houseSize, firstName, lastName);
    //saveLS(cfpData);
    //renderTbl(cfpData);
    //FORM.reset();
})