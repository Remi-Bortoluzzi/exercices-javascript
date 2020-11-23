let fableList = document.getElementsByTagName('section');

for (const element of fableList) {
    element.style.display = 'none';
    };

let fableLinkList = document.getElementsByClassName('nav-link');
for ( const element of fableLinkList) {
    element.addEventListener('click', showFable)
}
/*
* Fonction qui permet d'afficher la fable voulue
*/
function showFable(){
    //fablePosition Contient la position du début de la chaine fable 
  let fablePosition = this.href.indexOf('#')+1;// this fait référence à ce qui a déclenché l'evenement
  let fable = this.href.substring(fablePosition);
  // On parcours la liste des fables pour afficher que celle selectionner
  for (const element of fableList) {
    if (element.id == fable){
        element.style.display = 'block'
    }else {
        element.style.display = 'none'
    }
    };
}








