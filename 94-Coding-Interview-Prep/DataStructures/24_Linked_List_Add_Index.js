function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element) {
      this.element = element;
      this.next = null;
    };
  
    this.size = function() {
      return length;
    };
  
    this.head = function() {
      return head;
    };
  
    this.add = function(element) {
      var node = new Node(element);
      if (head === null) {
        head = node;
      } else {
        var currentNode = head;
  
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
  
        currentNode.next = node;
      }
      length++;
    };
  
    // Only change code below this line
    this.addAt = (index,element)=>{
        if(index < 0 || index >= length){
            return false
        }
        let currentIndex = 0
        let current = head
        let previous = null
        //loop through
        for( ; currentIndex < length ; currentIndex++){
            if(currentIndex === index){ //if it matches
                let node = new Node(element)
                //if its head
                if(current === head){
                    head = node
                    head.next = current //point to existing
                }
                //if non head
                else{
                    previous.next = node
                    node.next = current
                }
                length++
                break
            }
            previous = current
            current = current.next //keep moving to next node
        }
        return true//added
    }
  
    // Only change code above this line
  }