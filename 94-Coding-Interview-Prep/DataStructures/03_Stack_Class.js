class Stack{
    //constructor
    constructor(){
        this.collection = []
    }

    //methods
    print(){
        console.log(this.collection)
    }
    push(value){
        this.collection.push(value)
    }
    pop(){
        return this.collection.pop()
    }
    peek(){
        return this.collection[this.collection.length-1]
    }
    isEmpty(){
        return this.collection.length === 0
    }
    clear(){
        return this.collection.length = 0
    }

}