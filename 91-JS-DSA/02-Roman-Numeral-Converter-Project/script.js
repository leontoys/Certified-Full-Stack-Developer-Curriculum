const number = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")

const convert = (input)=>{
    const thousand = input / 1000
    console.log("thousand",thousand)
}

//event listener
convertBtn.addEventListener("click",()=>{
    if(!number.value){
        output.innerText = "Please enter a valid number"
        return
    }
    if(number.value < 1){
        output.innerText = "Please enter a number greater than or equal to 1"
    }
    if(number.value >= 4000){
        output.innerText = "Please enter a number less than or equal to 3999"
    }
    convert(number.value)
})



