let name = document.getElementById('name');
let email = document.getElementById('email');
let age = document.getElementById('age');
let validateButton = document.getElementById('validateButton');

name.addEventListener('input', checkName);
email.addEventListener('input', checkEmail);
age.addEventListener('input', checkAge);

let regexpName = /\D+[A-Za-zÀ-ÖØ-öø-ÿ]/;
function checkName(){
    if (regexpName.test(name.value)){
        nameError.className = 'errorTextHidden';
    }
    else {
        nameError.className = 'errorTextVisible';
    }
}

let regexpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function checkEmail(){
    if (regexpEmail.test(email.value)){
        emailError.className = 'errorTextHidden';
    }
    else {
        emailError.className = 'errorTextVisible';
    }
}

let regexpAge = /^(?:[0-9]|[1-9][0-9])$/ 
function checkAge(){
    if (regexpAge.test(age.value)){
        ageError.className = 'errorTextHidden';
    }
    else {
        ageError.className = 'errorTextVisible';
    }
}