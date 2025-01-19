/* const regexPattern = document.getElementById("pattern")
const stringToTest = document.getElementById("test-string")
const testButton = document.getElementById("test-btn")
const testResult = document.getElementById("result")
const caseInsensitiveFlag = document.getElementById("i")
const globalFlag = document.getElementById("g")

const getFlags = ()=>{
  if(caseInsensitiveFlag.checked&&globalFlag.checked){
    return "ig"
  }
  else if(caseInsensitiveFlag.checked){
    return "i"
  }
  else if(globalFlag.checked){
    return "g"
  }
  else{
    return ""
  }
}


testButton.addEventListener("click",()=>{
  console.log("---test button clicked---")
  const flags = getFlags();
  const regex = new RegExp(regexPattern.value, flags);
  console.log("pattern",regex)
  let str = stringToTest.textContent;
  console.log("original string",str)
  let matched = false;
  testResult.innerText = ''
  if(flags.includes("g")){
    let matches = str.matchAll(regex);
    matches = Array.from(matches) 
    //console.log("matches length",matches.length)
    if(matches.length!=0){
      //matches = Array.from(matches)
      //console.log("array",matches)
      matched = true
      //onsole.log("reached here",matched)
      let newStr = str
      let firstPart = null
      let secondPart = null
      for(const match of matches){
        //console.log("match item",match)
        //newStr = `${str.slice(0,match["index"])}<span class="highlight">${match["0"]}</span>${str.slice(match["index"]+match["0"].length)}`
        firstPart = str.slice(0,match["index"])
        secondPart = str.slice(match["index"],)
        //console.log("first part",firstPart)
        //console.log("secondPart",secondPart)
        newStr = newStr.replace(secondPart,`<span class="highlight">${match["0"]}</span>${secondPart.slice(match["0"].length,)}`)
        //console.log("new string",newStr)
        if(testResult.innerText){
          testResult.innerText = testResult.innerText +", "+ match["0"]

        }
        else{
          testResult.innerText = match["0"]

        }

      }  
      stringToTest.innerHTML = newStr
      console.log(stringToTest.innerHTML)
    }    
  }else{
    const match = str.match(regex);
    if(match){
      matched = true
      const index = str.indexOf(match)
      stringToTest.innerHTML = `${str.slice(0,index)}<span class="highlight">${match}</span>${str.slice(index+match.length)}`
      testResult.innerText = match
      console.log(stringToTest.innerHTML)

  }
  }
  if(matched===false){
    console.log("no match")
    testResult.innerText = "no match"
  }  
}) */
  const regexPattern = document.getElementById("pattern");
  const stringToTest = document.getElementById("test-string");
  const testButton = document.getElementById("test-btn");
  const testResult = document.getElementById("result");
  const caseInsensitiveFlag = document.getElementById("i");
  const globalFlag = document.getElementById("g");
  
  // Function to get the flags
  const getFlags = () => {
    if (caseInsensitiveFlag.checked && globalFlag.checked) {
      return "ig";
    } else if (caseInsensitiveFlag.checked) {
      return "i";
    } else if (globalFlag.checked) {
      return "g";
    } else {
      return "";
    }
  };
  
  // Add event listener to the test button
  testButton.addEventListener("click", () => {
    console.log("---test button clicked---");
    const flags = getFlags();
    const regex = new RegExp(regexPattern.value, flags);
    console.log("pattern", regex);
  
    let str = stringToTest.textContent; // Original string
    console.log("original string", str);
    let matched = false; // Flag for matches
    testResult.innerText = ""; // Clear previous results
  
    if (flags.includes("g")) {
      const matches = Array.from(str.matchAll(regex)); // Get all matches
      if (matches.length > 0) {
        matched = true;
        // Create a new string with highlights
        let highlightedString = "";
        let lastIndex = 0;
  
        matches.forEach((match) => {
          const start = match.index;
          const end = start + match[0].length;
  
          // Append text before the match
          highlightedString += str.slice(lastIndex, start);
          // Append the highlighted match
          highlightedString += `<span class="highlight">${match[0]}</span>`;
          // Update the lastIndex
          lastIndex = end;
  
          // Update result text
          if (testResult.innerText) {
            testResult.innerText += ", " + match[0];
          } else {
            testResult.innerText = match[0];
          }
        });
  
        // Append any remaining text after the last match
        highlightedString += str.slice(lastIndex);
        stringToTest.innerHTML = highlightedString; // Update the HTML with highlights
      }
    } else {
      const match = str.match(regex);
      if (match) {
        matched = true;
        const start = match.index;
        const end = start + match[0].length;
  
        // Highlight the match
        stringToTest.innerHTML = `${str.slice(0, start)}<span class="highlight">${match[0]}</span>${str.slice(end)}`;
        testResult.innerText = match[0];
      }
    }
  
    if (!matched) {
      console.log("no match");
      testResult.innerText = "no match";
    }
  });
  