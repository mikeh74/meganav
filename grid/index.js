const loadImages = () => {
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
};

const setupEventListeners = () => {
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

        mainNavSecondaryItems.forEach(item => {
            item.classList.remove('active');
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
                if (targetElement.classList.contains('submenu-active')) {
                    targetElement.ariaHidden = true;
                    item.classList.remove('active');
                    resetSubmenus();
                } else {
                    resetSubmenus();
                    targetElement.classList.add('submenu-active');
                    targetElement.ariaHidden = false;
                    item.classList.add('active');
                    links.forEach(link => {
                        link.tabIndex = 0;
                    });

                }
            };
        });
    });
};

const mobileSetup = () => {
    const mainNavToggle = () => {
        const mainNavLinks = document.querySelector('.main-nav-links');
        if (mainNavLinks) {
            mainNavLinks.classList.toggle('main-nav-links-active');
        }
    }

    const mainNavBtnOpen = document.querySelector('.main-nav-btn-open');
    if (mainNavBtnOpen) {
        mainNavBtnOpen.addEventListener('click', () => {
            mainNavToggle();
        });
    }

    const mainNavBtnClose = document.querySelector('.main-nav-btn-close');
    if (mainNavBtnClose) {
        mainNavBtnClose.addEventListener('click', () => {
            mainNavToggle();
        });
    }
}

// Debounce utility
function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

function setupResponsiveImageLoader() {
    let loaded = false;
    function checkAndLoadImages() {
        if (window.innerWidth > 992 && !loaded) {
            loadImages();
            loaded = true;
            window.removeEventListener('resize', debouncedCheck);
        }
    }
    const debouncedCheck = debounce(checkAndLoadImages, 150);
    window.addEventListener('resize', debouncedCheck);
    checkAndLoadImages(); // Initial check on page load
}

export { setupEventListeners, mobileSetup, setupResponsiveImageLoader };
