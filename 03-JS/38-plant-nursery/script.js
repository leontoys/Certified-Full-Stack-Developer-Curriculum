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
catalog.set(ballerina,{"small":1,
                        "medium":2,
                        "large":3})
console.log(catalog)
console.log(catalog.size)
