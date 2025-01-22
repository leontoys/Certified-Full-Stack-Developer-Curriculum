/*******************
 * Get DOM elements
 *******************/
const markdownIput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

/**********************
 * Add Event Listeners
 **********************/
markdownIput.addEventListener("input", () => {
  const result = convertMarkdown();
  htmlOutput.innerText = result;
  preview.innerHTML = result;
});

/***********************
 * Function Definitions
 **********************/
const tags = {
  "#" : "h1",
  "##" : "h2",
  "###" : "h3",
  "\n#" : "h1",
  "\n##" : "h2",
  "\n###" : "h3",  
  "**" : "strong",
  "__" : "strong",
  "*" : "em",
  "_" : "em",
  ">" : "blockquote"
}
const getTag = (match)=>{
  if(tags[match]){
    return tags[match]
  }
  else{
    match = match.slice(0,-1)
    return tags[match]
  }
}
//convert markdown function
function convertMarkdown() {
  const regexh3 = new RegExp(/^[#]{3}\s/);
  const regexh2 = new RegExp(/^[#]{2}\s/);
  const regexh1 = new RegExp(/^[#]{1}\s/);
  const regexh3n = new RegExp(/[\n][#]{3}\s/);
  const regexh2n = new RegExp(/[\n][#]{2}\s/);
  const regexh1n = new RegExp(/[\n][#]{1}\s/);  
  const regexstrong1 = new RegExp(/[*]{2}/);
  const regexstrong2 = new RegExp(/[_]{2}/);
  const regexem1 = new RegExp(/[*]{1}/);
  const regexem2 = new RegExp(/[_]{1}/);  
  const regexquote = new RegExp(/[>]{1}\s/);  

  const pattern = new RegExp(
    regexh1.source + "|" + regexh2.source + "|" + regexh3.source + "|" + 
    regexh1n.source + "|" + regexh2n.source + "|" + regexh3n.source + "|" + 
    regexstrong1.source + "|" + regexstrong2.source + "|" + regexem1.source + "|" + 
    regexem2.source + "|" + regexquote.source,      
    "g",
  )
  //console.log("pattern",pattern)
  let input = markdownIput.value;
  let output = input
  let matches = null;
  let count = 0;
  let currentMatch = ""
  let currentIndex = 0
  let currentTag = ""
  let previousTag = ""

  if (input.match(pattern)) {
    matches = Array.from(input.matchAll(pattern));
    console.log(matches);
    matches.forEach((match) => {
      //for first match
      if (count === 0) {
        //first find the index of the match
        currentIndex = match["index"]
        console.log(currentIndex)
        //then find the tag to be inserted
        currentMatch = match["0"]
        console.log(currentMatch)
        //find the tag
        currentTag = getTag(currentMatch)// tags[currentMatch]
        console.log(currentTag)
        //at the index insert the opening tag
        output = input.replace(match["0"],`<${currentTag}>`)
        console.log(output)
        //keep the tag in the memory - as last tag

      } else {
        //from next match onwards
        //first find the match
        currentMatch = match["0"]//.slice(0,-1)
        console.log(currentMatch)
        //get previous tag  
        previousTag = currentTag    
        //get current tag  
        currentTag = getTag(currentMatch)//tags[currentMatch]
        console.log(currentTag) 
        //replace output 
        output = output.replace(match["0"],`</${previousTag}><${currentTag}>`)
        console.log(output)              
    }
      count++;
    });
    //once comes out, append the closing tag with the closing
    output += `</${currentTag}>`
  } else {
    output = input;
  }
  return output;
}
