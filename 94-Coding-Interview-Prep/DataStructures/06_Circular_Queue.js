class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      // Only change code below this line

      //if currently we are pointing to null ie, not-written cell then add item
      if(this.queue[this.write]===null){
        this.queue[this.write++] = item //push the item and then increment write head

        //now see if we have written the max value, then reset
        if(this.write > this.max){
            this.write = 0
        }
      //if enqueue was success
      return item        
      }    
      //if not able to enqueu
      return null

      // Only change code above this line
    }
  
    dequeue() {
     // Only change code below this line
 
     if(this.queue[this.read]!==null){  

        let item = this.queue[this.read]
        this.queue[this.read++] = null
        //now see if we have written the max value, then reset
        if(this.read > this.max){
            this.read = 0
        }        
        //if success
        return item
    }
        //if not
        return null

      // Only change code above this line
    }
  }

//create queue and see
const circle = new CircularQueue(5)
console.log(circle)
console.log(circle.enqueue('a'))
console.log(circle.enqueue('b'))
console.log(circle.enqueue('c'))
console.log(circle)
console.log(circle.dequeue())
console.log(circle.dequeue())
console.log(circle.dequeue())
console.log(circle)
console.log(circle.enqueue('d'))
console.log(circle.enqueue('e'))
console.log(circle.enqueue('f'))
console.log(circle)
console.log(circle.dequeue())
console.log(circle.dequeue())
console.log(circle.dequeue())
console.log(circle)
