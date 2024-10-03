
document.querySelectorAll('.mn-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function() {
        var target = document.querySelector('.mn-wrapper');
        target.classList.toggle('mn-open');
    });
});
