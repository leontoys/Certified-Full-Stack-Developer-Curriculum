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
  // Only change code above this line
}

let tree = new BinarySearchTree()
console.log(tree.add(100))
console.log(tree.add(100))
tree.add(50)
tree.add(150)
displayTree(tree)