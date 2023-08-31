const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Add name validation
  if (name === "") {
    displayError("nameError", "Please enter your name .");
  } else if (!isValidName(name)) {
    displayError("nameError", "Please enter a valid name .");
  }

  if (email === "") {
    displayError("emailError", "Please enter your email address.");
  } else if (!isValidEmail(email)) {
    displayError("emailError", "Please enter a valid email address.");
  }

  if (phone === "") {
    displayError("phoneError", "Please enter your phone number.");
  } else if (!isValidPhone(phone)) {
    displayError("phoneError", "Please enter a valid phone number.");
  }
});

function displayError(id, message) {
  const errorLabel = document.getElementById(id);
  errorLabel.textContent = message;
}

function clearErrors() {
  const errorLabels = document.querySelectorAll(".error-label");
  errorLabels.forEach((label) => {
    label.textContent = "";
  });
}
function isValidName(name) {
  // Your name validation logic here
  return true;
}

function isValidEmail(email) {
  // Your email validation logic here
  return true;
}

function isValidPhone(phone) {
  // Your phone validation logic here
  return true;
}
