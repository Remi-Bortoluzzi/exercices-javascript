let text = document.getElementById('text');

function bold() {
    text.style.fontSize = '';
    text.style.color='';
    text.style.fontWeight = 'bold';
}
function color() {
    text.style.fontSize = '';
    text.style.fontWeight = '';
    text.style.color = 'red';
}
function grow() {
    text.style.fontWeight = '';
    text.style.color='';
    text.style.fontSize = '2em';
}