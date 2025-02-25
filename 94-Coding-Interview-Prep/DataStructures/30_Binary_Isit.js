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

  //is this binary tree?
  this.isBinarySearchTree = (tree)=>{

    let node = tree.root

    const isBinary = (node)=>{
        //base condition
        if(node === null){
            return true
        }

        //recursion
        //check left
        if(node.left !== null && node.left.value >= node.value) {
            return false
        }
        if(node.right !== null && node.right.value <= node.value){
            return false
        }
        return isBinary(node.left) && isBinary(node.right)
    }

    return isBinary(node)

  }

  // Only change code above this line
}

let tree = new BinarySearchTree()
tree.add(100)
tree.add(100)
tree.add(50)
tree.add(150)
tree.add(5)
tree.add(15)
tree.add(1500)
tree.add(500)
tree.add(1)
displayTree(tree)
console.log(tree.isBinarySearchTree(tree))