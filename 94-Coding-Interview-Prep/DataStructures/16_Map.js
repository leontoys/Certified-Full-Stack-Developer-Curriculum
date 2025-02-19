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
        return this.collection
    }
    this.size = () => {
        return this.collection.length
    }
    this.clear = () => {
        this.collection = {}
    }
    // Only change code above this line
  };