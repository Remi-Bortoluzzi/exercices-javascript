let firstNumber = 10;
let secondNumber = 3;
let result = firstNumber/secondNumber

 while (result > 1){
     firstNumber=result;
     let p = document.createElement ('p');
     p.innerHTML = result
     result = firstNumber/secondNumber; 
     document.body.appendChild(p);
 }


 
