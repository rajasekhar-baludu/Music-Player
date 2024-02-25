document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission if validation fails
    
    // Get the email and password input values
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("pass");
    
    // Check if both fields are filled
    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Please enter both email and password.");
    } else {
        // Redirect to another web page after successful validation
        window.location.href = "Index.html";
    }
});