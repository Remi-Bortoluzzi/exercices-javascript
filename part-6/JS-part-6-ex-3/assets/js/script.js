let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

for(let i = 0; i < languages.length; i++) {
    document.getElementsByTagName('ul')[0].innerHTML += '<li class="list-group-item">' + languages[i] + '</li>';
}