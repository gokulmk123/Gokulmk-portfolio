
// Initialize EmailJS
(function () {
  emailjs.init({
    publicKey: "UJU_dLwO_bD74zN_1",
  });
})();

// Function to send email
function sendMail() {
  // Get form inputs
  const fullNameInput = document.getElementById("from_name");
  const companyNameInput = document.getElementById("companyNameInput");
  const subjectInput = document.getElementById("Subject");
  const emailInput = document.getElementById("emailInput");
  const messageTextarea = document.getElementById("message");

  // Check if all required fields are valid
  if (
    !fullNameInput.checkValidity() ||
    !subjectInput.checkValidity() ||
    !emailInput.checkValidity() ||
    !messageTextarea.checkValidity()
  ) {
    // Add 'is-invalid' class to invalid fields
    if (!fullNameInput.checkValidity()) fullNameInput.classList.add("is-invalid");
    if (!subjectInput.checkValidity()) subjectInput.classList.add("is-invalid");
    if (!emailInput.checkValidity()) emailInput.classList.add("is-invalid");
    if (!messageTextarea.checkValidity()) messageTextarea.classList.add("is-invalid");

    // Stop the function if validation fails
    return;
  }

  // Remove 'is-invalid' class if fields are valid
  fullNameInput.classList.remove("is-invalid");
  subjectInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-invalid");
  messageTextarea.classList.remove("is-invalid");

  // Prepare email parameters
  const parms = {
    from_name: fullNameInput.value,
    companyNameInput: companyNameInput.value,
    Subject: subjectInput.value,
    emailInput: emailInput.value,
    message: messageTextarea.value,
  };

  // Send email using EmailJS
  emailjs
    .send("service_hmjbscc", "template_gpw3c6s", parms)
    .then(() => {
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset();
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    });
}

// Attach event listener to the form
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  sendMail(); 
});