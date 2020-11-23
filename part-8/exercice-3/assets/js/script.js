let paragraphs = document.getElementsByTagName('p');
window.addEventListener('scroll', () => {
  for (let element of paragraphs) {
    if (element.offsetTop <= (window.innerHeight + window.scrollY - 200)){
      element.className = 'show';
    }
    else {
      element.className = 'hide';
    }
  };
});