var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    // Only change code below this line
    this.reverse = ()=>{
        //assume the list is like 
        //1(null,2),2(1,3),3(2,4),4(3,5),5(4,null)
        //1(2,null),2(3,1)...............5(null,4)
        if(this.head === null){
            return null
        }
        //let us start from the head
        let head = this.head
        let tail = this.tail        
        let current = this.head
        //loop till we reach head
        while( current ){
            //swap the prev and next
            let prev = current.prev
            let next = current.next
            current.prev = next
            current.next = prev
            current = current.prev//move ahead
        }
        //now swap head and tail
        this.head = tail
        this.tail = head

    }
    // Only change code above this line
  };