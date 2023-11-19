document.addEventListener('DOMContentLoaded', function () {

var form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    var email = form.elements.email;
    var password = form.elements.password;
    
    
    // console.log(email);
    // console.log(email.value);
    
    if ((email.value === "") || (password.value === "")) { 
            alert("All form fields must be filled in"); 
            return
        }

    name1 = 0
    name2 = 0



});

});

