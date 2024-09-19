
function logginUserSession() {
    if (sessionStorage.getItem("loggedIn") === 'true' ) {
        alert("Welcome Back!");
    } else {
        let userName = prompt("Enter your name");
        sessionStorage.setItem("userName", userName);
        sessionStorage.setItem("loggedIn", true);
        alert(`You are logged in ${userName}`)
    }
}


logginUserSession();