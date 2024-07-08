const formEl = document.getElementById("registration-form");

formEl.addEventListener("submit", (event) => {
  let isValid = true;

  // [Name Validation]
  const name = document.getElementById("name").value;
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const nameError = document.getElementById("nameError");
  if (nameRegex.test(name)) {
    nameError.innerText = "";
  } else {
    nameError.innerText =
      "Name must be between 2 and 30 characters long, and may only contain letters and spaces.";
    isValid = false;
  }

  // [Phone Number Validation]
  const phone = document.getElementById("phone").value;
  const phoneRegex = /^(98|97)\d{8}$/;
  const phoneError = document.getElementById("phoneError");
  if (phoneRegex.test(phone)) {
    phoneError.innerText = "";
  } else {
    phoneError.innerText =
      "Phone number must be 10 digits starting with 98 or 97.";
    isValid = false;
  }

  // [Email Validation]
  const email = document.getElementById("email").value;
  const emailRegex = /^[a-zA-Z][a-zA-Z0-9]*@gmail\.com$/;
  const emailError = document.getElementById("emailError");
  if (emailRegex.test(email)) {
    emailError.innerText = "";
  } else {
    emailError.innerText =
      "Email must start with an alphabet, contain alphanumeric characters, and end with '@gmail.com'.";
    isValid = false;
  }

  // [Form Validation]
  if (isValid) {
    alert("Form submitted!");
    // Send data to the server
  } else {
    event.preventDefault();
  }
});
