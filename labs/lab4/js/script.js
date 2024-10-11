// make sure all the shit falls within the specs before accepting
function validate() {
    // Get all the shhit from the page and define all regex requirments
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById('country').value;

    var nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/; 
    var lastNameRegex = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/; 
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    // validate all the fields
    if (!nameRegex.test(firstName)) {
        alert('Please enter a valid First Name. Letters only, can include a space between names.');
        return false; 
    }
    if (!lastNameRegex.test(lastName)) {
        alert("Please enter a valid Last Name. Letters only, apostrophes and hyphens allowed (e.g., O'Brien, Parker-Holland).");
        return false; 
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address. Example: user@example.com');
        return false; 
    }

    if (!gender) {
        alert('Please select your gender.');
        return false;
    }

    if (country === "") {
        alert('Please select your country.');
        return false;
    }
    // Display all that below
    displayFormData(firstName, lastName, email, gender.value, country);

    // failsafe
    return false;
}

// once all the boxes been filled out post that shit on the page
function displayFormData(firstName, lastName, email, gender, country) {
    var formData = `
        <h4>Form Data</h4>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Country:</strong> ${country}</p>
    `;
    document.querySelector('.content').innerHTML += formData;
}

//a) it a js method that stops the default action of the event from occuring allowing you to manually so shit

//b) To keep the data on the page, you need to change the function where the new form data is added to the page instead of replacing the shit on the page there each time.
// i dont need to change any lines or sum like that bc i just append all the new shit to the existing page with this line document.querySelector('.content').innerHTML += formData;