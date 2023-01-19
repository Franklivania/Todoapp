function login() {

    const usernameEmail = document.getElementById('username-email').value
    const password = document.getElementById('login-password').value

    window.location.href = "./Pages/Dashboard.html";
}

function signup() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const newUser = {
        name: name,
        username: username,
        email: email,
        password: password
    };

    window.location.href = "./Dashboard.html";
    
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function logout() {
    window.location.href = "../index.html";
}

// const loginBtn = document.querySelector('#login')
// loginBtn.addEventListener('click', login)


