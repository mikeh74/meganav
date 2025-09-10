const loadImages = (attribute) => {
    const items = document.querySelectorAll(`[${attribute}]`);

    items.forEach(i => {
        let src = i.getAttribute(attribute);
        let img = new Image();

        img.src = src;
        img.onload = () => {
            i.style.backgroundImage = `url(${src})`;
        };
    });
};

// Debounce utility
function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function lazyResponsiveBackground(
    { attribute = 'data-bg-image',
        breakpoint = 992,
        debounceDelay = 150 } = {}) {

    let loaded = false;
    function checkAndLoadImages() {
        if (window.innerWidth > breakpoint && !loaded) {
            loadImages(attribute);
            loaded = true;
            window.removeEventListener('resize', debouncedCheck);
        }
    }

    const debouncedCheck = debounce(checkAndLoadImages, debounceDelay);
    window.addEventListener('resize', debouncedCheck);
    checkAndLoadImages(); // Initial check on page load
}

export default lazyResponsiveBackground;
