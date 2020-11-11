// Js code

//set attribute required for three fields Name, Moblie, and Email
const nameInput = document.getElementById('name');
nameInput.required = true;
const mobileInput = document.getElementById('mobile');
mobileInput.required = true;
const emailInput = document.getElementById('email');
emailInput.required = true;

//clicking Add Contact button adds contact to table

const newContact = {
    name: nameInput.value,
    mobile: mobileInput.value,
    email: emailInput.value
};

const submitContactInfo = window.contactsList.push(newContact);
const submitButton = document.getElementById('submit');

submitButton.onclick(submitContactInfo);
 
// name - contains only alphabets and space. less than or equal to 20 characters
nameInput.maxlength = 20;
nameInput.pattern="[a-zA-Z\s]+";

//mobile - contains only numbers. 10 characters in length
mobileInput.length = 20;
mobileInput.type = 'number';

//email - proper validation. 40 or less characters in length
emailInput.maxlength = 40;
emailInput.type = 'email';

//show an error div with id 'error' if any error or empty fields
const inputErrorMessageDiv = document.getElementById('error');
function showError() {
    if (!nameInput.validity.valid 
        || !mobileInput.validity.valid 
        || !emailInput.validity.valid 
        || !nameInput.validity.valueMissing 
        || !mobileInput.validity.valueMissing 
        || !emailInput.validity.valueMissing ) {
            inputErrorMessageDiv.style.display
        }
}
