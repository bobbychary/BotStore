document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const body = document.body;

    // Check the theme preference from localStorage if available
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-theme') {
            toggle.checked = true;
        }
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});



