const ballerina = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Ballerina"
}

const prettyPolly = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Pretty Polly"
}

const willowVale = {
    commonName: "Spanish lavender",
    scientificName: "Lavandula stoechas",
    cultivar: "Willow Vale"
}

const hidcote = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Hidcote"
}

const imperialGem = {
    commonName: "English lavender",
    scientificName: "Lavandula angustifolia",
    cultivar: "Imperial Gem"
}

const royalCrown = {
    commonName: "French lavender",
    scientificName: "Lavandula dentata",
    cultivar: "Royal Crown"
}

const catalog = new Map()
catalog.set(ballerina, { small: 20, medium: 15, large: 12 });
catalog.set(prettyPolly, { small: 31, medium: 14, large: 24 });
catalog.set(willowVale, { small: 3, medium: 5, large: 0 });
catalog.set(hidcote, { small: 33, medium: 13, large: 18 });
catalog.set(imperialGem, { small: 19, medium: 35, large: 28 });
catalog.set(royalCrown, { small: 40, medium: 22, large: 9 });

const sellPlants = (plant,potSize,potNumbers)=>{
    if(potNumbers > catalog.get(plant).potSize){
        //return `Not enough ${potSize} size pots for ${plant.scientificName} '${plant.cultivar}'. Only ${catalog.get(plant)[potSize]} left`
        return `Not enough ${potSize} size pots for ${plant.scientificName} '${plant.cultivar}'. Only ${catalog.get(plant)[potSize]} left.`
    }
    else{
        catalog.get(plant)[potSize] -= potSize
        return `Catalog successfully updated.`
    }
}
console.log(sellPlants(ballerina,"small",25))
console.log(sellPlants(ballerina,"small",10))

console.log(catalog)
