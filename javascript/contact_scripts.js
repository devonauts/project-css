document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on form submission
  
    // Retrieve input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    let isValid = true;
  
    // Validation for the Name field
    if (!name) {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("nameError").style.display = "none";
    }
  
    // Validation for the Email field
    const emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("emailError").style.display = "none";
    }
  
    // Validation for the Message field
    if (!message) {
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("messageError").style.display = "none";
    }
  
    // Populate the box if validation passes
    if (isValid) {
      document.getElementById("submittedName").textContent = name;
      document.getElementById("submittedEmail").textContent = email;
      document.getElementById("submittedMessage").textContent = message;
  
      // Show the sample data section
      document.getElementById("sampleData").classList.remove("hidden");
  
      // Optionally reset the form fields
      document.getElementById("contactForm").reset();
    }
  });
  