var Node = function(element) {
    this.element = element;
    this.next = null;
  };
  var Kitten = new Node('Kitten');
  var Puppy = new Node('Puppy');
  
  Kitten.next = Puppy;
  // Only change code below this line
  var Cat = new Node('Cat')
  Puppy.next = Cat
  var Dog = new Node('Dog')
  Cat.next = Dog