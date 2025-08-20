
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

const mainNavSecondaryItems = document.querySelectorAll('.main-nav-secondary-item > a');
const submenus = document.querySelectorAll('.main-nav-secondary-item .submenu');

const resetSubmenus = () => {
    submenus.forEach(submenu => {
        submenu.classList.remove('submenu-active');
        const links = submenu.querySelectorAll('a');
        links.forEach(link => {
            link.tabIndex = -1;
        });
    });
};

mainNavSecondaryItems.forEach(item => {

    const target = item.getAttribute('href');

    if (!target || !target.startsWith('#') || target === '#') {
        console.warn('Invalid target for main nav secondary item:', item);
        return; // Skip this item if the target is invalid
    }

    const targetElement = document.querySelector(target);

    item.addEventListener('click', (e) => {
        e.preventDefault();

        const links = targetElement.querySelectorAll('.submenu a');

        targetElement.classList.add('submenu-loaded');
        if (target && target.startsWith('#')) {
            if(targetElement.classList.contains('submenu-active')) {
                targetElement.ariaHidden = true;
                resetSubmenus();
            } else {
                resetSubmenus();
                targetElement.classList.add('submenu-active');
                targetElement.ariaHidden = false;

                links.forEach(link => {
                    link.tabIndex = 0;
                });

            }
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

const mainNavBtn = document.querySelector('.main-nav-btn');
const mainNavLinks = document.querySelector('.main-nav-links');

if (mainNavBtn) {
    mainNavBtn.addEventListener('click', () => {
        console.log('Main nav button clicked');
        mainNavLinks.classList.toggle('main-nav-links-active');
    });
}
