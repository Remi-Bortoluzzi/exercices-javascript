let texts = document.querySelectorAll('input');

for (let i = 0; i < texts.length; i++) {
    texts[i].addEventListener('focus', function() {
        texts[i].style.border = 'solid 6px black';
    });
    texts[i].addEventListener('blur', function() {
        texts[i].removeAttribute('style');
    });
}