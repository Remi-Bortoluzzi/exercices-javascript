let pinkButton = document.getElementById('pinkButton');
let blueButton = document.getElementById('blueButton');
let purpleButton = document.getElementById('purpleButton');
let boldButton = document.getElementById('boldButton');
let italicButton = document.getElementById('italicButton');
let paragraph = document.getElementById('paragraph');

pinkButton.addEventListener('click', function() {
    paragraph.style.color = 'pink';
});
blueButton.addEventListener('click', function() {
    paragraph.style.color = 'blue';
});
purpleButton.addEventListener('click', function() {
    paragraph.style.color = 'purple';
});
boldButton.addEventListener('click', function() {
    paragraph.style.fontWeight = 'bold';
});
italicButton.addEventListener('click', function() {
    paragraph.style.fontStyle = 'italic';
});