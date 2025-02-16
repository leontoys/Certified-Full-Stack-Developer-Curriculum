class PriorityQueue {
    constructor(){
        this.collection = []
        this.start = 0
        this.end = 0
    }
    printCollection(){
        console.log(this.collection);
    }
    //so priority queue is like not FIFO or LIFO
    //the highest prioerity will be moved out first - some are more equal
    enqueue(item){//[value,priority]
        //add this to collection
        //loop through the items 
        //find index to be inserted
        let index = this.collection.length
        for(let i=0; i < this.collection.length; i++){
            //check the priority
            if(this.collection[i][1] > item[1])//priority
            {
                //then we have to start shifting the items to the left
                index = i
                break
            }
        }
        //now we have to shift all the elements greater than this to right
        for(let j = this.collection.length - 1; j >= index  ; j--){
            this.collection[j+1] = this.collection[j]
        }
        //after shifting is over - insert the new element
        this.collection[index] = item
        this.end++

    }
    //dequeue 
    //find the one with the highest priority and remove
    dequeue(){
        //get item to be removed
        let remove = this.collection[0]
        //now shift the elements to the left
        for(let i = 0; i < this.collection.length - 1 ; i++){
            this.collection[i] = this.collection[i+1] //shifting left
        }
        //remove the last element
        this.collection.length--
        //reduce end
        this.end--
        //return the removed element
        return remove[0]
    }
    //return length 
    size(){
        return this.end - this.start
    }
    //return the first
    front(){
        return this.collection[0][0]
    }
    //is empty
    isEmpty(){
        return (this.end - this.start === 0)
    }
}