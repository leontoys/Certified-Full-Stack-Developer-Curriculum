/* const callStack = [
    'a(): returns "freeCodeCamp " + b()',
    "b(): returns 'is ' + c()",
    "c(): returns 'awesome!'"    
]

const a = () => { 
    return "freeCodeCamp " + b()
}

const b = () => {
    return "is " + c()
}

const c = () => {
    return "awesome!"
}

console.log(a()) */

/* 
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const countDownAndUp = (number)=>{ 
    console.log(number)
    if (number===0) {
        console.log("Reached base case")
        return
    }
    else{
        countDownAndUp(number-1)
        console.log(number)

    }
}

countDownAndUp(3); */

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationData = [{
  inputVal : 5,//will represent the value of the input each time your recursive function runs
  addElDelay : 1000//will be the delay between adding DOM elements to the page
}]

const decimalToBinary = (input) => {

if (input===0||input===1) {
    return String(input)
}
else{
    return decimalToBinary(Math.floor(input / 2)) + (input%2)
}

/*   let binary = ""
  if (input===0) {
    binary = "0"
  }
  while (input > 0) {
    input = Math.floor( input / 2 )
    binary = ( input % 2 ) + binary
  }

  result.innerText = binary; */

  /* const inputs = [] 
const quotients = [] 
const remainders = []

if(input===0){
    result.innerText = "0"
    return
}

while(input > 0){
    const quotient = Math.floor( input / 2 )
    const remainder = input % 2

    inputs.push(input)
    quotients.push(quotient)
    remainders.push(remainder)

    input = quotient
}

console.log("Inputs: ",inputs)
console.log("Quotients: ",quotients)
console.log("Remainders: ",remainders)

result.innerText = remainders.reverse().join("") */
};


const showAnimation = ()=>{
 setTimeout(() => {
    console.log("free")    
 }, 500);
 setTimeout(() => {
    console.log("Code")
 }, 1000);  
 setTimeout(() => {
    console.log("Camp")    
 }, 1500);  
}

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value)  
  if (
    !numberInput.value ||
    isNaN(inputInt) ||
    inputInt < 0
  ) {
    window.alert("Please provide a decimal number greater than or equal to 0");
    return;
  }
  if (inputInt===5) {
    showAnimation()
    return    
 }    
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
