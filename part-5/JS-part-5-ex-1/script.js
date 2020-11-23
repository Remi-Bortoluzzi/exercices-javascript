let password = document.getElementById('password');
let passwordConf = document.getElementById('passwordConf');
let passwordButton = document.getElementById('validateButton');
let formPassword = document.getElementById('formPassword');

formPassword.addEventListener('submit', event => comparePassword(event));

function comparePassword(event){
    if (password.value === passwordConf.value){
        password.style.border = 'solid 1px green';
        passwordConf.style.border = 'solid 1px green';
    }
    else {
        password.style.border = 'solid 1px red';
        passwordConf.style.border = 'solid 1px red';
        event.preventDefault();
    }
}