document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();


    const username = document.getElementById("signup-username").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const termsChecked = document.getElementById("terms-checkbox").checked;

  
    if (username && email && password && termsChecked) {
      
        window.location.href = "Log in.html";
    } else {
        alert("Please fill in all fields and agree to the terms and conditions.");
    }
});
