var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    // Only change code below this line
    this.add = (element)=>{
      //create a node for the element
      let node = new Node(element,this.tail)//existing tail will be its previous
      //if head exists
      if(this.head){ //if head exists
        //tail should point to this node
        let tail_node = this.tail
        tail_node.next = node
        //this should should become tail
        this.tail = node
      }
      //if this is going to be the head
      else{
        this.head = node
        this.tail = node //this is going to be the head and the tail
      }
    }
    this.remove = (element)=>{
      //if this is empty list, then return null
      if(this.head === null){
        return null
      }
      //we have to iterate till we either reach end 
      //or find this element
      let current = this.tail

      //if this is tail
      if(current.data === element){
        let previous = current.prev 
        previous.next = null
        this.tail = previous
        return
      }

      current = this.head
      //if this is head
      if(current.data === element){
        let next = current.next
        next.previous = null
        this.head = next
        return
      }

      //let previous = null
      while(current.next === null){
        if(current.data === element){
          //if we find the element
          //so lets say 10(null,20),20(10,30),30(20,40),40(30,50),50(40,null)
          //we want to remove say 30
          //so 20 should point to 40
          //40 should have previous as 20
          let previous = current.prev
          let next = current.next
          previous.next = next
          next.prev = previous
          break
        }
        else{
          //previous = current
          current = current.next
        }
      }
    }
    // Only change code above this line
  };

let linked = new DoublyLinkedList()
linked.add(0)
linked.add(1)
linked.add(2)
linked.add(3)
linked.add(4)
linked.add(5)
linked.remove(5)
linked.remove(0)
console.log(linked)


