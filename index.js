
document.querySelectorAll('.mn-trigger').forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
        event.preventDefault();
        let targetId = trigger.getAttribute('data-mn-target');
        var target = document.querySelector(targetId);
        target.classList.toggle('mn-open');
    });
});
