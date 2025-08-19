const meganav = () => {

// query selector all using data attribute data-mn-target
document.querySelectorAll('[data-mn-target]').forEach(trigger => {

    // loop through all trigger elements
    trigger.addEventListener('click', function (event) {

        event.preventDefault();
        // get the target id from the data attribute
        let targetId = trigger.getAttribute('data-mn-target');

        // this is the element that we are selecting
        let target = document.querySelector(targetId);

        // wrapped in animation frame which might be overkill but intended
        // to ensure that all repaints happen in the same frame
        requestAnimationFrame(() => {
            if (target.classList.contains('mn-open')) {
                target.classList.remove('mn-open');
            } else {
                // close any other open menus before we open the current one
                closeMenu();
                target.classList.add('mn-open');
                document.body.classList.add('mn-active');
            }
        });
    });
});

function closeMenu() {
    document.querySelectorAll('.mn-wrapper').forEach(target => {
        target.classList.remove('mn-open');
    });
    document.body.classList.remove('mn-active');
};

document.addEventListener('click', function (event) {
    if (!event.target.closest('.mn-wrapper') && !event.target.closest('.mn-trigger')) {
        closeMenu();
    }
});

    const navSearch = document.querySelector('.nav-block-link-search');
    const searchBar = document.querySelector('#search-bar');
    const main = document.getElementById('main');

    if (navSearch && searchBar) {
      navSearch.addEventListener('click', (event) => {
        event.preventDefault();

        searchBar.classList.toggle('search-bar--show');
        main.classList.toggle('search-bar--active');
      });

      main.addEventListener('click', (event) => {
        searchBar.classList.remove('search-bar--show');
        main.classList.remove('search-bar--active');
      });
    };
};

export default meganav;
