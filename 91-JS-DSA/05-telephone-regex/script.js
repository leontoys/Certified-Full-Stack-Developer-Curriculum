const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkButton.addEventListener("click", () => {

  if (!userInput.value) {
    alert("Please provide a phone number");
  }

  clear()

  const regex1 = /^1\s\d{3}-\d{3}-\d{4}$/    //1 555-555-5555
  const regex2 = /^1\s[(]\d{3}[)]\s\d{3}-\d{4}$/ //1 (555) 555-5555
  const regex3 = /^1[(]\d{3}[)]\d{3}-\d{4}$/ //1(555)555-5555 
  const regex4 = /^1\s\d{3}\s\d{3}\s\d{4}$/  //1 555 555 5555
  const regex5 = /^\d{10}$/ //5555555555
  const regex6 = /^\d{3}-\d{3}-\d{4}$/    //1 555-555-5555
  const regex7 = /^[(]\d{3}[)]\s\d{3}-\d{4}$/ //1 (555) 555-5555
  const regex8 = /^[(]\d{3}[)]\d{3}-\d{4}$/ //1(555)555-5555 
  const regex9 = /^\d{3}\s\d{3}\s\d{4}$/  //1 555 555 5555  

  if (  regex1.test(userInput.value)    ||
        regex2.test(userInput.value)    ||
        regex3.test(userInput.value)    ||
        regex4.test(userInput.value)    ||
        regex5.test(userInput.value)    ||
        regex6.test(userInput.value)    ||
        regex7.test(userInput.value)    ||
        regex8.test(userInput.value)    ||
        regex9.test(userInput.value)                                    
     ) {
    resultsDiv.innerText = `Valid US number: ${userInput.value}`
  }
  else{
    resultsDiv.innerText = `Invalid US number: ${userInput.value}`
  }
});

const clear = ()=>resultsDiv.innerText = ""
clearButton.addEventListener("click", clear)
