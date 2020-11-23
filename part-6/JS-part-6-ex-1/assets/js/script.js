let years = document.getElementById('yearsList');

for (let year = 2020; year <= 2030; year++) {
    let classLi = '';
    if ((year%4==0) && ((year%100!=0) || (year%400==0))){
      classLi = 'text-danger';
    }
    years.innerHTML += '<li class="list-group-item '+ classLi + '">' + year + '</li >';
}