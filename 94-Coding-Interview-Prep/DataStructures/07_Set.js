class Set {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.values(this.dictionary);
    }
  
    // Only change code below this line
    add(item){
        //only add if it doesn't exist, otherwise return false
        if(this.has(item)){
            return false
        }
        else{
            this.dictionary[item] = item
            this.length++
            return true
        }
    }
    remove(item){
        if(this.has(item)){
            delete this.dictionary[item]
            this.length--
            return true
        }
        else{
            return false
        }
    }
    size(){
        return this.length
    }
    
    // Only change code above this line
  }


const setone = new Set()
console.log(setone)
setone.add('apple')
setone.add('banana')
setone.add('carrot')
setone.add('apple')
setone.add('banana')
setone.add('carrot')
console.log(setone)
setone.remove('banana')
setone.remove('banana')
console.log(setone)
