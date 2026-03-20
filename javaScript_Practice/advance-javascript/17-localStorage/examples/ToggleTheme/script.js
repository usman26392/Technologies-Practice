document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.getElementById('theme-toggle');
    
    // Function to apply theme
    const applyTheme = (theme) => {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);
        toggleButton.textContent = (theme) === 'light-mode' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
    };

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    // when we apply explicitly theme on user's browser.
    // localStorage.setItem('theme', 'dark-mode');

    // Load and apply the user's theme preference
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    // console.log(savedTheme);
    applyTheme(savedTheme);

    // Add event listener to the toggle button
    toggleButton.addEventListener('click', toggleTheme);
});

