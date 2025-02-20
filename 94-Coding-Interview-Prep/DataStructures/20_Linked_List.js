function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
      var node = new Node(element) //create a new node
      //we have to add this at the head if nothing
      //otherwise the last null one
      if(this.head()){
        //otherwise loop through till we get a node
        //whose next is null
        let linked = this.head()
        while(linked.next !==null ){
            linked = linked.next//point to the next
        }
        //once its out we have the last linked
        linked.next = node
      }
      else{
        //if head is null
        head = node
      }
      length++
      // Only change code above this line
    };
  }