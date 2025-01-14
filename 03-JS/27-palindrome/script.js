let textInput = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let result = document.getElementById("result");   

const checkPalindrome = (event)=>{

  if(!textInput.value){
  alert("Please input a value");
  }
  else{

  let textInputCleaned = textInput.value.toLowerCase().replace(/[\W_]/g,"")

  for(let i = 0; i < textInputCleaned.length / 2 ; i++){
    if(textInputCleaned[i]!=textInputCleaned[textInputCleaned.length-1-i]){
      result.innerText = `${textInput.value} is not a palindrome`;
      return;
    }
  }

        result.innerText = `${textInput.value} is a palindrome`;

  }

}

checkButton.addEventListener("click",checkPalindrome);