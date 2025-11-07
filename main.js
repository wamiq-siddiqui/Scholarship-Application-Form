let form = document.getElementById("form")

function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

form.addEventListener("submit", function (event) {
    event.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cpass = document.getElementById("cpass").value
    let qualification = document.querySelector('input[name="qualification"]:checked')
    let department = document.getElementById("department").value

    if (name == "") {
        alert("Full Name is required!")
        return;
    }

    if (email == "") {
        alert("Email is required!")
        return;
    }

    if (validateEmail(email) == false) {
        alert("Invalid email format!")
        return;
    }

    if (password == "") {
        alert("Password is required!")
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long!")
        return;
    }

    if (cpass == "") {
        alert("Confirm Password is required!")
        return;
    }

    if (password != cpass) {
        alert("Passwords do not match!")
        return;
    }

    if (!qualification) {
        alert("Please select your qualification!")
        return;
    }

    if (department == "") {
        alert("Please select your department!")
        return;
    }

    alert("Form submitted successfully!")
})