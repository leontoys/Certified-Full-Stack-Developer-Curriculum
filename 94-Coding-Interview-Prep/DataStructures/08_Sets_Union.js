class Set {
    constructor() {
      // This will hold the set
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
    // This method will add an element to the set
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = element;
        this.length++;
        return true;
      }
  
      return false;
    }
    // This method will remove an element from a set
    remove(element) {
      if (this.has(element)) {
        delete this.dictionary[element];
        this.length--;
        return true;
      }
  
      return false;
    }
    // This method will return the size of the set
    size() {
      return this.length;
    }
    // Only change code below this line
    union(anotherSet){
        //Note - we have to return a union set
        const newSet = new Set()
        //add the existing values
        for(let i=0; i < this.values().length; i++){
            newSet.add(this.values()[i])
        }
        //we need to add the values of another set
        for(let i=0; i < anotherSet.values().length ; i++){
            newSet.add(anotherSet.values()[i])
        }
        return newSet
    }
    // Only change code above this line
  }

const a = new Set()
a.add("a")
a.add("b")
a.add("c")
const b = new Set()
b.add("c")
b.add("d")
console.log(a)
console.log(b)
console.log(a.union(b))