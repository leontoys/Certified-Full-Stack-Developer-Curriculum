/*******************
 * Get DOM elements
 *******************/
const markdownIput = document.getElementById("markdown-input")
const htmlOutput = document.getElementById("html-output")
const preview = document.getElementById("preview")

/**********************
 * Add Event Listeners
 **********************/
markdownIput.addEventListener("input",()=>{
    const result = convertMarkdown()
    htmlOutput.innerText = result

})

/***********************
 * Function Definitions
 **********************/
//convert markdown function
function convertMarkdown(){
    const regexh3 = /^[#]{3}\s/
    const regexh2 = /^[#]{2}\s/
    const regexh1 = /^[#]{1}\s/
    let input = ''
    let match = null
    let output = ''

    if(markdownIput.value.match(regexh3)){
        console.log("h3",markdownIput.value.match(regexh3))
    }
    else    if(markdownIput.value.match(regexh2)){
        console.log("h2",markdownIput.value.match(regexh2))
    }
    else    if(markdownIput.value.match(regexh1)){
        match = markdownIput.value.match(regexh1)
        input = markdownIput.value.slice(match["index"]+2)
        output = `<h1>${input}</h1>`
        return output
    } 
}

