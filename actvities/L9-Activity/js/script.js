// Validate the form when submitted
function validate() {
    // Get the names n shit from index
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Define regular expressions for each thing
    var nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/; 
    var lastNameRegex = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/; 
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{12,}$/;

    // check First Name
    if (!nameRegex.test(firstName)) {
        alert('Please enter a valid First Name. Letters only, and can include a middle name.');
        return false; 
    }

    // check Last Name
    if (!lastNameRegex.test(lastName)) {
        alert("Please enter a valid Last Name. Letters only, apostrophes and hyphens allowed (e.g., O'Brien, Smith-Burns).");
        return false; 
    }

    // check Email
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address. Example: user@example.com');
        return false; 
    }

    // check Password
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 12 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false; 
    }

    // no problemms then submit that shit
    alert('Form submitted successfully!');
    return true; 
}