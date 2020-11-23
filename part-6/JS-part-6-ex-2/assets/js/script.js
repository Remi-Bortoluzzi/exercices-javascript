let years = document.getElementsByTagName('ul')[0];

for (let i = 0; i <= 100; i++) {
    if (i%15==0){
        years.innerHTML += '<li class="list-group-item">' + '...' + '</li >';
    }
    else {
        years.innerHTML += '<li class="list-group-item">' + i + '</li >';
    }
}