const regexPattern = document.getElementById("pattern")
const stringToTest = document.getElementById("test-string")
const testButton = document.getElementById("test-btn")
const testResult = document.getElementById("result")
const caseInsensitiveFlag = document.getElementById("i")
const globalFlag = document.getElementById("g")

const getFlags = ()=>{
  let flags = ""
  if(caseInsensitiveFlag.checked){
    flags+= "i"
  }
  if(globalFlag.checked){
    flags+= "g"
  }  
  return flags
}

const testRegex = (event)=>{
console.log("\n---testing---")
console.log(stringToTest.textContent)
console.log(pattern)
const str = stringToTest.textContent;
const pattern = `/${regexPattern.value}/${getFlags()}`
const matches = [...str.matchAll(pattern)]; // Extracting matches
if(matches[0]){
  console.log(matches[0]); 
    /*for (const match of matches[0]) {
        console.log(match[0]); 
    }*/
}
else{
  testResult.innerText = "no match"
}
}

testButton.addEventListener("click",testRegex)