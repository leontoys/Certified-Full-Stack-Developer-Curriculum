/*----------
get elements
------------*/
const submitButton = document.getElementById("submit-btn");
//full name
const fullName = document.getElementById("full-name");
//email
const email = document.getElementById("email");

/*-----------------
add event listeners
-------------------*/
//add event listener on submit
submitButton.addEventListener("submit", (event) => {
  event.preventDefault();
  return isValid(validateForm());
});
//on full name
fullName.addEventListener("change", validateFullName);
//on email
email.addEventListener("change", validateEmail);

/*-------------------
function definitions
---------------------*/
//validate form
function validateForm() {
  let result = {};
  result["full-name"] = validateFullName();
  result["email"] = validateEmail();
  return result;
}

//is valid
function isValid(result) {
  return Object.values(result).every((value) => value === true) ? true : false;
}

//validate full name
function validateFullName() {
  if (fullName.value) {
    fullName.style.borderColor = "green";
    return true;
  } else {
    fullName.style.borderColor = "red";
    return false;
  }
}

//validate email
function validateEmail() {
  const regex = /^[a-zA-Z]+@[a-zA-Z].[a-zA-Z]/
  if (regex.test(email.value)) {
    email.style.borderColor = "green";
    return true;
  } else {
    email.style.borderColor = "red";
    return false;
  }
}
