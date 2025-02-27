var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  this.add = (element)=>{

    //create a node
    const node = new Node(element)
    //if root is null then this should be the root
    if(this.root === null){
        this.root = node
        return 
    }

    let currentNode = this.root //start from root
    while(currentNode !== null)//keep traversing
    {
      if(currentNode.value === node.value){
        return null
      }
      //decide direction based on the value
      const direction = currentNode.value > node.value ? "left" : "right"
      //check if that node is filled
      if(currentNode[direction]===null){
        currentNode[direction] = node
        return undefined
      }
      //otherwise move to next node
      currentNode = currentNode[direction]
    }


  } 

  //find minimum and maximum height and balanced
  this.findMinHeight = (node = this.root) =>{
    //base case
    if(node === null){
      return -1
    }

    //recurstion
    let left_height = this.findMinHeight(node.left)
    let right_height = this.findMinHeight(node.right)

    return Math.min(left_height,right_height)+1
  } 

  this.findMaxHeight = ( node = this.root ) => {
    if(node === null){
      return -1
    }

    let left_height = this.findMaxHeight(node.left)
    let right_height = this.findMaxHeight(node.right)

    return Math.max(left_height,right_height)+1
  }

  this.isBalanced = ( node = this.root ) =>{
    if(node === null){
      return true
    }

    let left_height = this.findMaxHeight(node.left)
    let right_height = this.findMaxHeight(node.right)

    if(Math.abs(left_height - right_height) > 1){
      return false
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right)

  }


  // Only change code above this line
}

// Create a new Binary Search Tree
let tree = new BinarySearchTree();

// Add some nodes to the tree
tree.add(100);
tree.add(50);
tree.add(150);
tree.add(25);
tree.add(75);

// Display the tree structure in a readable format
displayTree(tree);

// Test findMinHeight and findMaxHeight methods
console.log("Minimum Height of the tree:", tree.findMinHeight())
console.log("Maximum Height of the tree:", tree.findMaxHeight())