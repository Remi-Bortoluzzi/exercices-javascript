let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(i => {
    if ((i == 'Samedi') || (i == 'Dimanche')) {
        i = '<strong>' + i + '</strong>';
    }
    document.getElementsByTagName('ul')[0].innerHTML += '<li class="list-group-item">' + i + '</li>';
})