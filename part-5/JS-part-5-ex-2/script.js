let password = document.getElementById('password');
let passwordConf = document.getElementById('passwordConf');
let passwordButton = document.getElementById('validateButton');
let formPassword = document.getElementById('formPassword');

formPassword.addEventListener('submit', event => comparePassword(event));

function comparePassword(event){
    if (password.value === passwordConf.value){
        password.className = 'correctPassword';
        passwordConf.className = 'correctPassword';
    }
    else {
        password.className = 'wrongPassword';
        passwordConf.className = 'wrongPassword';
        event.preventDefault();
    }
}