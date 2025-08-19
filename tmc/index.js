
const mainNavImgs = document.querySelectorAll('[data-main-nav-img]');

mainNavImgs.forEach(i => {

    let src = i.getAttribute('data-main-nav-img');
    console.log(src);

    let img = new Image();

    img.src = src;

    img.onload = () => {
        i.style.backgroundImage = `url(${src})`;
        i.classList.add('active');
    };
});

console.log('Main nav images loaded');