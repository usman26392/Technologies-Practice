


// Set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Erase a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}





// set a cookie for theme preference
function setThemePreference(theme) {
    setCookie("theme", theme, 365); // Expire in 1 year
}

// Get theme preference
function getThemePreference() {
    return getCookie("theme");
}

// Apply theme preference
function applyTheme() {
    let theme = getThemePreference();
    if(theme) {
        document.body.className = theme
    }
}

// Example usage
setThemePreference("dark"); // User selects dark mode
applyTheme(); // Apply the theme based on cookie value

// get cookie
console.log(getCookie("theme"));