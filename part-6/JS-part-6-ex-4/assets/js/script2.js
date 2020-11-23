let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
let daysBold = days.slice(4)

for(let i = 0; i < days.length; i++) {
    document.getElementsByTagName('ul')[0].innerHTML += '<li class="list-group-item">' + days[i] + '</li>';
    if(i == daysBold){
        i.style.fontWeight = 'bold'
    }
}