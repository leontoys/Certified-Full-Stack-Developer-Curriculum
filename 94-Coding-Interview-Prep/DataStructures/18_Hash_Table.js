var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = (key,value)=>{
    //get the hash of key
    const key_hashed = hash(key)
    //initialise collection-hashed key
    this.collection[key_hashed] = this.collection[key_hashed] || {}
    this.collection[key_hashed][key] = value
  }
  this.lookup = (key)=>{
    //get the hash of key
    const key_hashed = hash(key)
    return this.collection[key_hashed][key]
  }
  this.remove = (key)=>{
    //get the hash of key
    const key_hashed = hash(key)
    delete this.collection[key_hashed][key]
    //if the above delete removes everything against hashed key
    if(Object.keys(this.collection[key_hashed]).length===0){
        
    }
  }
  // Only change code above this line
};