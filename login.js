function login() {
    const name = document.getElementById("login-name").value;
    const pass = document.getElementById("login-password").value;

    if (!name || !pass) {
        alert("Please enter all the fields");
        return;
    }

   
    const submitname = localStorage.getItem("username");
    const submitpass = localStorage.getItem("password");

    if (name === submitname && pass === submitpass) {
        alert("Login successful!");
        window.location.href = "homePage.html";
    } else {
        alert("Invalid username or password");
    }
}