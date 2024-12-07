"use strcit";

//DOM => Document Object Model

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        password : password.value
    };

    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/login", {
        method : "POST",
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify(req)
    })
}