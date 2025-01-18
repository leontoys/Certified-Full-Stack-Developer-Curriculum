/*---
get elements
---*/
const submitButton = document.getElementById("submit-btn")
//full name
const fullName = document.getElementById("full-name")
//email
const email = document.getElementById("email")
//order number
const orderNo = document.getElementById("order-no")


/*---
add event listeners
---*/
//add event listener on submit
submitButton.addEventListener("submit",(event)=>{
    event.preventDefault();
    return isValid(validateForm())
})
//on full name
fullName.addEventListener("change",validateFullName)
//on email
email.addEventListener("change",validateEmail) 
//on order number
orderNo.addEventListener("change",validateOrderNo) 

/*-------------------
function definitions
---------------------*/ 
//validate form
function validateForm(){
    let result = {}

    result["full-name"] = validateFullName()
    result["email"] = validateEmail()

    return result
}

//is valid
function isValid(result){
    return Object.values(result).every( value => value===true )? true : false;
}


//validate full name
function validateFullName(){
    if(fullName.value){
        fullName.style.borderColor = "green"
        return true
    }else{
        fullName.style.borderColor = "red"
        return false
    }    
}

//validate email
function validateEmail(){
//email
console.log("testing-email",email.value,email.value.checkValidity())
if(email.value.checkValidity()){
  email.style.borderColor = "green"
  return true
}else{
  email.style.borderColor = "red"
  return false
}  
}
//validate order number
function validateOrderNo(){
  const regex = /^2024\d{6}/
  if(orderNo.value.test(regex)){
    orderNo.style.borderColor = "green"
    return true
  }
  else{
    orderNo.style.borderColor = "red"
    return false
  }
}



/* //get form
const form = document.getElementById("form")

//add change Event Listener to form
form.addEventListener("change",formChange)

fullName.addEventListener("change",validateForm)

function validateForm() {

//result object initial
const result = {
"full-name" : false, 
"email" : false, 
"order-no" : false, 
"product-code" : false, 
"quantity" : false, 
"complaints-group" : false, 
"complaint-description" : false, 
"solutions-group": false,
"solution-description" : false
}

fullName.value?
result["full-name"] = true:
result["full-name"] = false; 

//return object
return result;
}



//event listener for form change
const formChange = (event)=>{
  console.log("---testing---",event.target.value)
  switch(event.target.id){
    case "full-name":
      event.target.value.trim()? 
      event.target.style.borderColor = "green":
      event.target.style.borderColor = "red"    
      break;
    case "email":
      event.target.checkValidity()?
      event.target.style.borderColor = "green":
      event.target.style.borderColor = "red"    
      break;
    case "order-no":
      let regex = /^2024\d{6}/;
      regex.test(event.target.value)?
      event.target.style.borderColor = "green":
      event.target.style.borderColor = "red" 
    case "product-code":
      regex = /^[a-z|A-Z]{2}\d{2}-[a-z|A-Z]\d{3}-[a-z|A-Z]{2}\d$/
      regex.test(event.target.value)?
      event.target.style.borderColor = "green":
      event.target.style.borderColor = "red"
    case "quantity":
      event.target.value > 0? 
      event.target.style.borderColor = "green":
      event.target.style.borderColor = "red"   
    case "complaint-description":
      event.target.value
      console.log("check if other is selected")
    case "solution-description":
      console.log("check if other is selected")
    default:
      break;
  }
    switch(event.target.type){
      case "checkbox":
        console.log("checkbox")
        break;      
      case "radio":
        console.log("radio")
        break;
      default:
        break;
    }


}

 */