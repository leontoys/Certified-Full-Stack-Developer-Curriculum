/*----------
get elements
------------*/
const submitButton = document.getElementById("submit-btn");
//full name
const fullName = document.getElementById("full-name");
//email
const email = document.getElementById("email");
//order number
const orderNo = document.getElementById("order-no");
//product-code
const productCode = document.getElementById("product-code");
//quantity
const quantity = document.getElementById("quantity")
//complaints group
const complaintsGroup = document.getElementById("complaints-group")
//complain description
const complaintDescription = document.getElementById("complaint-description")
//other check box
const otherCompliant = document.getElementById("other-complaint")

/*-----------------
add event listeners
-------------------*/
//add event listener on submit
submitButton.addEventListener("submit", (event) => {
  //event.preventDefault();
  return isValid(validateForm());
});
//on full name
fullName.addEventListener("change", validateFullName);
//on email
email.addEventListener("change", validateEmail);
//order no
orderNo.addEventListener("change",validateOrderNo)
//product code
productCode.addEventListener("change",validateProductCode)
//quantity
quantity.addEventListener("change",validateQuantity)
//complaints
complaintsGroup.addEventListener("change",validateComplaintsGroup)
//complaint description
complaintDescription.addEventListener("change",validateComplaintDescription)

/*-------------------
function definitions
---------------------*/
//validate form
function validateForm() {
  let result = {};
  result["full-name"] = validateFullName();
  result["email"] = validateEmail();
  result["order-no"] = validateOrderNo()
  result["product-code"] = validateProductCode();
  result["quantity"] = validateQuantity();
  result["complaints-group"] = validateComplaintsGroup();
  result["complaint-description"] = validateComplaintDescription()
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

//validate order no
function validateOrderNo() {
  const regex = /^2024\d{6}/
  if (regex.test(orderNo.value)) {
    orderNo.style.borderColor = "green";
    return true;
  } else {
    orderNo.style.borderColor = "red";
    return false;
  }
}

//validate product code
function validateProductCode(){
  const regex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]{1}\d{3}-[a-zA-Z]{2}\d{1}$/
  if (regex.test(productCode.value)) {
    productCode.style.borderColor = "green";
    return true;
  } else {
    productCode.style.borderColor = "red";
    return false;
  }  
}

//validate quantity
function validateQuantity() {
  if (quantity.value > 0) {
    quantity.style.borderColor = "green";
    return true;
  } else {
    quantity.style.borderColor = "red";
    return false;
  }
}

//complaints group
function validateComplaintsGroup(){
  let checkBoxes = Array.from( complaintsGroup.querySelectorAll("input") )
  if(checkBoxes.some((checkBox) => checkBox.checked === true)){
    complaintsGroup.style.borderColor = "green"
    return true;

  }
  else{
    complaintsGroup.style.borderColor = "red"
    return false;
  }
}

//complaint description
function validateComplaintDescription(){
  console.log("other complaint description")
  if(otherCompliant.checked){
  if(complaintDescription.value.length>=20){
    complaintDescription.style.borderColor = "green"
    return true
  }
  else{
    complaintDescription.style.borderColor = "red"
    return false
  }
}else{
  complaintDescription.style.borderColor = "green"
  return true  
}
}
