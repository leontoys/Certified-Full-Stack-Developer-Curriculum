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
  
    // Only change code below this line
    this.removeAt = (index) => {
        let removed = null

        if(index < 0 || index >= length){
            return null
        }

        let current = head
        let previous = null
        for(let currentIndex = 0; currentIndex < length; currentIndex++){
            if(currentIndex === index){
                //then we have to remove
                //if this is head
                if(current === head){
                    removed = head//so that we can return this
                    head = head.next
                }
                else{
                    removed = current//so that we can return
                    previous.next = current.next
                }
                break
            }
            previous = current //so that we can point 
            current = current.next
        }
        //reduce length
        length--
        return removed.element
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
console.log(list.removeAt(2))

// Print the size of the list
console.log("Size of list:", list.size()); // Should print: Size of list: 4

// Print all elements in the linked list
let current = list.head();
console.log("Linked List Elements:");
while (current !== null) {
    console.log(current);
    current = current.next;
}
  