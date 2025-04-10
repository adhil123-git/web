function index(){
    const name = document.getElementById("indexname").value;
    const pass = document.getElementById("indexpass").value;
    const Cpass = document.getElementById("indexconfirmpass").value;


    if(!name || !pass || !Cpass){
        alert("Please  enter all the fields");
        return;
    }
    if(pass !== Cpass){
        alert("Passwords do not match");
        return;
    }
    if(pass.length < 5){
        alert("Password must be at least 5 characters long");
        return;
    }

    localStorage.setItem("username", name);
    localStorage.setItem("password", pass);
    
    alert("Registration successful!");
    window.location.href = "login.html";

    
}