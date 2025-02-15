class Stack{
    //constructor
    constructor(){
        //this.collection = []//rewriting with objects
        this.collection = {}
        this.start = 0
        this.end = 0
    }

    //methods
    print(){
        console.log(this.collection)
    }
    push(value){
        //this.collection.push(value) - don't use array methdos
        this.collection[ this.end++ ] = value
    }
    pop(){
        //return this.collection.pop()
        return this.collection[ --this.end ]
    }
    peek(){
        //last element - we have to get because that's on top of queue
        //return this.collection[this.collection.length-1]
        return this.collection[this.end - 1]
    }
    isEmpty(){
        //return this.collection.length === 0
        return ( this.end - this.start ) === 0
    }
    clear(){
        //return this.collection.length = 0
        this.collection = {}
        return this.start = this.end = 0
    }

}