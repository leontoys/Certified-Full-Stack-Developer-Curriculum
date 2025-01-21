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
    preview.innerHTML = result
})

/***********************
 * Function Definitions
 **********************/
//convert markdown function
function convertMarkdown(){
    const regexh3 = /[#]{3}\s/g
    const regexh2 = /[#]{2}\s/g
    const regexh1 = /[#]{1}\s/g
    let input = markdownIput.value
    //let match = null
    let output = ''
    let matches = null
    let count = 0
    let previousIndex = 0
    let currentSlice = ''
    let previousSlice = ''

    if(input.match(regexh1)){
/*         match = input.match(regexh1)
        output = input.slice(match["index"]+2)
        output = `<h1>${output}</h1>` */
        matches = Array.from(input.matchAll(regexh1))
        console.log(matches)
        matches.forEach(match => {
            //for first match
             if(count===0){
                currentSlice = input.slice(match["index"]+2)
                output = `<h1>${currentSlice}</h1>`
                previousIndex = match["index"]
            }
            else{ 
                //from next match onwards
                previousSlice = input.slice(previousIndex+2,match["index"])
                currentSlice = input.slice(match["index"]+2)
                console.log("previous slice",previousSlice)
                console.log("current",currentSlice)
                output = `<h1>${previousSlice}</h1><h1>${currentSlice}</h1>`
            }
            count++
        });
    }
    else{
        output = input
    }
    return output

}

