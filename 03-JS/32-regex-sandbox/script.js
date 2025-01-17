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
const flags = getFlags();
const regexp = new RegExp(regexPattern.value, flags);
console.log(regexp)
const str = stringToTest.textContent;
console.log(str)
let matches = null;
if(flags.includes("g")){
  matches = str.matchAll(regexp);
}else{
  matches = str.match(regexp);
}
if(matches){
  testResult.innerText = ""
    console.log(matches)
      for(const match of matches){
        testResult.innerText += `${match[0]}, `
        console.log(match)
      }
      testResult.innerText = testResult.innerText.slice(0,-1)
}
else{
  testResult.innerText = "no match"
}
}

testButton.addEventListener("click",testRegex)