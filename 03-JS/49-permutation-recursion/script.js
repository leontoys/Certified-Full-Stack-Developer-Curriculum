const permuteString = (str="",prefix="",arr=[])=>{
    if(str.length===0){
        arr.push(prefix)
        return arr
    }
    else{
        for (let index = 0; index < str.length; index++) {
            const sliced = str.slice(0, index) + str.slice(index + 1);
            const remainder = prefix + str[index]
            //console.log("str",sliced,"prefix",remainder,"arr",arr)
            permuteString(sliced,remainder,arr)
        }
    }
    //remove duplicates
    let s = new Set(arr)
    arr = [...s]

    return arr
}

console.log(permuteString('cat'))
console.log(permuteString('fcc'))
console.log(permuteString('p'))
console.log(permuteString(''))
console.log(permuteString('101'))




