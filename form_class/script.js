document.addEventListener ("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const output = document.getElementById("output");

    //display previously saved Data -- function ()
    displaySavedData();

    form.addEventListener("submit", (e) => {
     e.preventDefault(); // stop page reload

     // form validations

     //basic password check
     const password = document.getElementById("password").value;
     const confirmPassword = document.getElementById("confirmPassword").value;

     if (password !== confirmPassword) {
        alert("passwords do not match");
     }
     const checkPassword = password;

     const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("LastName").value,
        gender: document.getElementById("gender").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        dob: document.getElementById("dob").value,
        address: document.getElementById("address").value,
        extFirstName: document.getElementById("extFirstName").value,
        extLastName: document.getElementById("extLastName").value,
        extphoneNumber: document.getElementById("extPhoneNgit stauumber").value,
        extEmail: document.getElementById("extEmail").value,
        accountType: document.getElementById("accountType").value,
        idType: document.getElementById("idType").value,
        password: checkPassword,
        // work not yet finish here
        firstName: document.getElementById("firstName").value,
 }
     // start a new array // orx load existing records
     const existingData = JSON.parse(sessionStorage.getItem("registrations")) || [];

     //add a new record to the array
     existingData.push(formData);

     // save back to sessionstorage
     sessionStorage.setItem("registrations", JSON.stringify(existingData));


     //refresh the display
    displaySavedData();

     //reset your form
     form.reset();

    });

    function displaySavedData() {
        const data = JSON.parse(sessionStorage.getItem("registrations")) || [];

        if(data.length === 0) {
            output.innerHTML ="<p>No registration saved yet!</p>";
            return;
        }
        
        let html = "<h2>Saved Registrations</h2>";
        data.forEach((entry, index) => {
            html += `
            <div> 
            <h3>Registration #${index + 1}</h3>
            <p>Name: ${entry.firstName} ${entry.LastName}</p>
            <p>Gender: ${entry.gender}</p>
            <p>Phone: ${entry.phoneNumber}</p>
            <p>Date of Birth: ${entry.dob}</p>
            <p>Address: ${entry.address}</p>
            <p>External contact: ${entry.extFirstName} ${entry.extLastName} (${entry.
                extPhoneNumber}, ${entry.extEmail})</p>
            <p>Account Type: ${entry.accountType}</p>
            <p>Id gitType: ${entry.idType}</p>
            <hr>
            </div>
            `;
        });

        output.innerHTML = html; 
    }
})