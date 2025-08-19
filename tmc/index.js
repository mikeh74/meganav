
const mainNavImgs = document.querySelectorAll('[data-main-nav-img]');

mainNavImgs.forEach(i => {
    let src = i.getAttribute('data-main-nav-img');
    let img = new Image();

    img.src = src;
    img.onload = () => {
        i.style.backgroundImage = `url(${src})`;
        i.classList.add('active');
    };
});

// wire up the main nav
const mainNavSecondaryItems = document.querySelectorAll('.main-nav-secondary-item > a');

mainNavSecondaryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('href');

        if (target.startsWith('#')) {
            const targetElement = document.querySelector(target);
            targetElement.classList.toggle('submenu-active');
        };
    });
});

/**
 * function to find all elements with a class of target-expand and then loop
 * throught them and add an event listener to each one that will take uses to
 * the first link in the current element
 */
const targetExpandElements = document.querySelectorAll('.submenu-links-item');

targetExpandElements.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        // find the first link in the current element
        const firstLink = element.querySelector('a');
        if (firstLink) {
            window.location.href = firstLink.getAttribute('href');
        } else {
            console.warn('No link found in target expand element');
        }
    });
});
