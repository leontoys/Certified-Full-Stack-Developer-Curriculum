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
//convert markdown function
function convertMarkdown() {
  const tags = {
    "#" : "h1",
    "##" : "h2",
    "###" : "h3"
  }
  const regexh3 = new RegExp(/[#]{3}\s/g);
  const regexh2 = new RegExp(/[#]{2}\s/g);
  const regexh1 = new RegExp(/[#]{1}\s/g);
  const pattern = new RegExp(
    regexh1.source + "|" + regexh2.source + "|" + regexh3.source,
    "g",
  )
  console.log("pattern",pattern)
  let input = markdownIput.value;
  //let match = null
  let output = "";
  let matches = null;
  let count = 0;
  let currentSlice = ""
  let previousSlice = ""
  let currentMatch = ""
  let previousMatch = ""
  let previousIndex = 0
  let currentIndex = 0
  let previousLength = 0
  let currentLength = 0

  if (input.match(pattern)) {
    matches = Array.from(input.matchAll(pattern));
    console.log(matches);
    matches.forEach((match) => {
      //for first match
      if (count === 0) {
        currentSlice = input.slice(match["index"] + match["length"]+1);
        currentMatch = match["0"].slice(0,-1)
        output = `<${tags[currentMatch]}>${currentSlice}</${tags[currentMatch]}>`;
        previousIndex = match["index"];//for next iteration if any
        previousMatch = match["0"].slice(0,-1)//for next if any
      } else {
        //from next match onwards
        previousSlice = input.slice(previousIndex + match["length"]+1, match["index"]);
        currentSlice = input.slice(match["index"] + match["length"]+1);
        console.log("previous slice", previousSlice);
        console.log("current", currentSlice);
        currentMatch = match["0"].slice(0,-1)
        output = `<${tags[previousMatch]}>${previousSlice}</${tags[previousMatch]}><${tags[currentMatch]}>${currentSlice}</${tags[currentMatch]}>`;
        previousMatch = currentMatch//for next
        previousIndex = match["index"]//for next
    }
      count++;
    });
  } else {
    output = input;
  }
  return output;
}
