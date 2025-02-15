//Note - don't use array methods
class Queue{
    constructor(){
        //this.collection = [] //the best way is to use object
        //so that we won't use array methods
        this.collection = {}
        this.start = 0
        this.end = 0
    }
    print(){
        console.log(this.collection)
    }
    //add element to the end
    enqueue(value){
        //this.collection.push(value)- so we can't use push 
        //insert new element at this end
        this.collection[this.end] = value
        //increment the end
        this.end = this.end + 1 
        //another learning I had is I can write this using post increment operator       
    }
    //remove first element and return it
    dequeue(){
        //start has the first element
        //we have to remove it
        let element_to_remove = this.collection[ this.start ]
        this.start = this.start + 1
        return element_to_remove
    }
    //get the first - FIFO
    front(){
        return this.collection[this.start]
    }
    //number of elements
    size(){
        return this.end - this.start
    }
    //check if any elements there
    isEmpty(){
        //better check size is 0
        return this.size() === 0
    }

}