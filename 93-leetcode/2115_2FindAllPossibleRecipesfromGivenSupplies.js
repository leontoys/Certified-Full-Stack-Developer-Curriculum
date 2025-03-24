/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {

    let stock = {}
    for(let i = 0; i < supplies.length; i++){
        stock[supplies[i]] = true
    }
    console.log(stock)

    let items = {}
    for(let i = 0; i < recipes.length; i++){
        items[recipes[i]] = ingredients[i]
        //check if these ingredients are supplied
        for(let j = 0; j < ingredients[i].length; j++){
            let can_make = true
            console.log(ingredients[i][j])
            let ingredient = ingredients[i][j]
            //check if this is supplied
            if(stock[ingredient]){

            }
            else{
                can_make = false
            }
        }
    }



    console.log(items)
        
};

console.log(findAllRecipes(["bread"],[["yeast","flour"]],["yeast","flour","corn"]))