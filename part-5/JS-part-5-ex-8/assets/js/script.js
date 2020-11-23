//let name = document.getElementById('inputName');
//let age = document.getElementById('inputAge');


//function cloneForm() {
  //  let cloned = name.cloneNode(true);
    //document.getElementById('basicForm').appendChild(cloned);
    //cloned = age.cloneNode(true);
    //document.getElementById('basicForm').appendChild(cloned);
//}

let formCloned = document.getElementById('basicForm')

function cloneForm() {
    let cloned = basicForm.cloneNode(true);
    document.getElementById('formSection').appendChild(cloned);
}