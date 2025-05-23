// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.setAttribute('data-theme', 
        body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
    themeToggle.innerHTML = body.getAttribute('data-theme') === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Set initial theme (light)
body.setAttribute('data-theme', 'light');