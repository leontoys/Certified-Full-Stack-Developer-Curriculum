var Map = function() {
    this.collection = {};
    // Only change code below this line
    this.has = (key) => {
        return this.collection[key] ? true : false
    }
    this.add = (key,value)=>{
        this.collection[key] = value
    }
    this.remove = (key) => {
        if(this.has(key)){
            delete this.collection[key]
        }
    }
    this.get = (key) => {
        return this.collection[key]
    }
    this.values = () => {
        return Object.values(this.collection)
    }
    this.size = () => {
        return Object.entries(this.collection).length
    }
    this.clear = () => {
        this.collection = {}
    }
    // Only change code above this line
  };

const a = new Map()
a.add("a",1)
a.add("b",2)
a.add("c",3)
console.log(a.values())  
console.log(a.clear())
console.log(a.values())
