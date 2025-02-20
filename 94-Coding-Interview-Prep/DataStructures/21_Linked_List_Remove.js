function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.size = function(){
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
          currentNode  = currentNode.next;
        }
  
        currentNode.next = node;
      }
  
      length++;
    };
  
    this.remove = function(element) {
        if (head.element === element) {
            head = head.next;
            length--;
            return; // Early exit
        }
    
        let current = head;
        let previous = null;
    
        while (current !== null && current.element !== element) {
            previous = current;
            current = current.next;
        }
    
        if (current !== null) { // If found
            previous.next = current.next;
            length--;
        }
    };
    
  }

// Create a new linked list
let list = new LinkedList();

// Add elements to the linked list
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.remove(50)

// Print the size of the list
console.log("Size of list:", list.size()); // Should print: Size of list: 4

// Print all elements in the linked list
let current = list.head();
console.log("Linked List Elements:");
while (current !== null) {
    console.log(current);
    current = current.next;
}

