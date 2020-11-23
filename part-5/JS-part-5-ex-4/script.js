let seulgiImg = document.getElementById('seulgiImg');

function changeImage(){
    let getSrc = seulgiImg.getAttribute('src');

    if (getSrc == 'seulgi1.jpg') {
        getSrc = 'seulgi2.jpg';
    }
    else {
      getSrc = 'seulgi1.jpg';
    }
    seulgiImg.setAttribute('src', getSrc);
}
seulgiImg.addEventListener('click', changeImage);
seulgiImg.addEventListener('mouseover', function(){
    seulgiImg.style.width = '40%';
})
seulgiImg.addEventListener('mouseout', function (){
    seulgiImg.style.width = 'initial';
})