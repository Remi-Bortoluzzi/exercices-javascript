let mark = prompt('Donnez une note')
if(mark <= 3){
     alert('Nul');
}
if(mark >= 4 && mark < 6){
    alert('Moyen');
}
if(mark >= 6 && mark < 8){
    alert('Assez bien');
}
if(mark >= 8 && mark < 9){
    alert('Bien');
}
if(mark == 10){
    alert('Excellent');
}