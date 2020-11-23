document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (smoothScroll) {
        smoothScroll.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//let htmlPage = document.getElementsByTagName('html')[0]
//htmlPage.style.scrollBehavior = 'smooth';