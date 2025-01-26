const conversionTable = {
    cup: { gram: 240, ounce: 8.0, teaspoon: 48 },
    gram: { cup: 1 / 240, ounce: 0.0353, teaspoon: 0.2 },
    ounce: { cup: 0.125, gram: 28.35, teaspoon: 6 },
    teaspoon : {cup:1/48,gram:5,ounce:0.167}
  }

  const convertQuantity = (fromUnit) => (toUnit) => (quantity) => {
    console.log(fromUnit,toUnit,quantity)
    const conversionRate = conversionTable[fromUnit][toUnit];
    return quantity * conversionRate;
  }

  const gramsResult = convertQuantity("cup")("gram")(2)
  console.log(gramsResult)

  const adjustForServings = (baseQuantity) => (newServings) => baseQuantity*newServings

const servingsResult = adjustForServings(4)(6)  
console.log(servingsResult)

const processIngredient = (baseQuantity, baseUnit, newUnit, newServings)=>{
    const servingsResult = adjustForServings(baseQuantity)(newServings)  
    console.log(servingsResult)    
    const gramsResult = convertQuantity(baseUnit)(newUnit)(servingsResult)
    console.log(gramsResult)
    return gramsResult.toFixed(2)    
}

processIngredient(4,"cup","gram",6)


const ingredientName = document.getElementById("ingredient")
const ingredientQuantity = document.getElementById("quantity")
const unitToConvert = document.getElementById("unit")
const numberOfServings = document.getElementById("servings")
const recipeForm = document.getElementById("recipe-form")
const resultList = document.getElementById("result-list")

const units = ["cup", "gram", "ounce",  "teaspoon"]

const updateResultsList = ()=>{
    resultList.innerHTML = ""
    units.forEach(element => {
        if(element!==unitToConvert.value){
            const result = processIngredient(
                parseFloat(ingredientQuantity.value),
                unitToConvert.value,
                element,
                parseFloat(numberOfServings.value)
            )
            resultList.innerHTML += 
            `<li>${ingredientName.value}: ${result} ${element}</li>`
        }
    });
}

//form submission
recipeForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    updateResultsList()
})