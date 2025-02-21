function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.size = function() {
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
        var currentNode = head;
  
        while(currentNode.next){
          currentNode = currentNode.next;
        }
  
        currentNode.next = node;
      }
  
      length++;
    };
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
        head = currentNode.next;
      } else {
        while(currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
  
        previousNode.next = currentNode.next;
      }
  
      length --;
    };
  
    // Only change code below this line
    this.isEmpty = ()=>{
      return length === 0 //if length is zero then it is empty right?
    }

    this.indexOf = (element) => {
      let index = -1
      let current = head
      for( let i = 0; i < length; i++){
        if(current.element === element){
          index = i
          break
        }
        current = current.next
      }
      return index
    }

    this.elementAt = (index)=>{
      let element = undefined
      let current = head
      for(let i = 0; i < length; i++){
        if(index === i){
          element = current.element
          break
        }
        current = current.next
      }
      return element
    }

    // Only change code above this line
  }

// Create a new linked list
let list = new LinkedList();

// Add elements to the linked list
list.add(10);
list.add(20);
list.add(30);
list.add(40);
console.log(list.indexOf(10))
console.log(list.elementAt(3))

// Print the size of the list
console.log("Size of list:", list.size()); // Should print: Size of list: 4

// Print all elements in the linked list
let current = list.head();
console.log("Linked List Elements:");
while (current !== null) {
    console.log(current);
    current = current.next;
}