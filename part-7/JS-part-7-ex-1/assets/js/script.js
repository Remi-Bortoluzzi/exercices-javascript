let button = document.querySelector('button');
let inputs = document.querySelectorAll('input');
document.body.appendChild(document.createElement('p'));
let p = document.querySelector('p');

button.addEventListener('click', () => {
    let number0 = inputs[0].value;
    let number1 = inputs[1].value;
    let result = calculate(number0, number1);
    p.innerText = result;
});

let calculate = (number0, number1) => {
    if (isNaN(number0) || isNaN(number1)) {
        return 'T\'as confondu chiffres et lettres gros';
    } else {
        return number0 * number1;
    }
}