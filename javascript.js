window.addEventListener('scroll', function() {
    const navTop = document.querySelector('.nav-top');
    if (window.scrollY > 50) {
        navTop.classList.add('scroll');
    } else {
        navTop.classList.remove('scroll');
    }
});
