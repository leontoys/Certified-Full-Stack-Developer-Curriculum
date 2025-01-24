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

const removePlant = (plant)=>{
    return catalog.delete(plant)
}
//console.log(removePlant("ballerina"))-this works
//console.log(removePlant(ballerina));

const sellPlants = (plant, size, potsNo) => {
    if(!catalog.has(plant)){
        return `Item not found.`
    }
    const name = `${plant.scientificName} '${plant.cultivar}'`
    const pots = catalog.get(plant);
    if (pots[size] - potsNo < 0) {
        return `Not enough ${size} size pots for ${name}. Only ${pots[size]} left.`
    }
    else{
        console.log(pots)
        pots[size] = pots[size] - potsNo
        catalog.set(plant,pots) 
        return `Catalog successfully updated.`
    }
}

//console.log(sellPlants(ballerina, "small", 10));

//console.log(catalog)

const displayCatalog = ()=>{
/*     for (const key of catalog.keys()) {
        console.log(key)  
    } */
/*    for(const value of catalog.values()){
    console.log(value)
   } */
/*   for(const entry of catalog.entries()){
    //console.log(entry)
  } */
//<scientific-name> '<cultivar>': <small-pots> S, <medium-pots> M, <large-pots> L  
    let str = ""
  catalog.forEach((value,key)=>{
    //console.log(value,key)
    str += `${key.scientificName} '${key.cultivar}': ${value.small} S, ${value.medium} M, ${value.large} L\n`
  })
  return str
}

//console.log(displayCatalog())

const displayPlantsSet = ()=>{
    let myArray = []//catalog.keys()
    for (const element of catalog.keys()) {
        console.log(element.commonName)
        myArray.push(element.commonName)
    }
    console.log(myArray)
    const catalogSet = new Set(myArray)
/*     catalogSet.add(ballerina)
    catalogSet.add(ballerina)
    catalogSet.add(prettyPolly) */

    return catalogSet
}

const plantsSet = displayPlantsSet()
console.log(plantsSet)
/*
console.log(plantsSet.has(ballerina))
plantsSet.clear() */