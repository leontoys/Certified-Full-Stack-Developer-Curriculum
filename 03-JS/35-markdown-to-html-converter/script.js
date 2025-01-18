/*******************
 * Get DOM elements
 *******************/
const markdownIput = document.getElementById("markdown-input")
const htmlOutput = document.getElementById("html-output")
const preview = document.getElementById("preview")

/**********************
 * Add Event Listeners
 **********************/
markdownIput.addEventListener("change",()=>{
    const result = convertMarkdown()
    htmlOutput.innerHTML = result
})

/***********************
 * Function Definitions
 **********************/
//convert markdown function
function convertMarkdown(){
    const regexh3 = /^[#]{3}\s/
    const regexh2 = /^[#]{2}\s/
    const regexh1 = /^[#]{1}\s/

    if(markdownIput.value.match(regexh3)){
        console.log("h3",markdownIput.value.match(regexh3))
    }
    else    if(markdownIput.value.match(regexh2)){
        console.log("h2",markdownIput.value.match(regexh2))
    }
    else    if(markdownIput.value.match(regexh1)){
        console.log("h1",markdownIput.value.match(regexh1))
    } 
}

