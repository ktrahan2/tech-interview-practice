class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }
  const root = new BinaryTreeNode(57)
  const node1 = root.insertLeft(17)
  const node2 = node1.insertLeft(12)
  const node3 = node1.insertRight(23)
  const node4 = root.insertRight(74)
  const node5 = node4.insertLeft(62)
  const node6 = node4.insertRight(86)

// right a function to check if a tree is valid, each node should have a smaller number to the left, and a larger number to the right. 
// on the left node tree from root - every child must be smaller than the original root value, but (leftside) smaller than its parent, 
// (rightside) greater than its parent.
// on the right node tree from root - every child must be larger than the original root value, but (leftside) smaller than its parent, 
// (rightside) greater than its parent

function isValid(root) {
    const nodeAndBoundStack = []
    nodeAndBoundStack.push({
        node: root,
        lowerBound: Number.NEGATIVE_INFINITY,
        upperBound: Number.POSITIVE_INFINITY
    })

    while ( nodeAndBoundStack.length ) { 
        const { node, lowerBound, upperBound } = nodeAndBoundStack.pop()
        
        if ( node.value <= lowerBound || node.value >= upperBound ) {
            return false
        }

        if ( node.left ) {
            nodeAndBoundStack.push({
                node: node.left,
                lowerBound,
                upperBound: node.value
            })
        }

        if ( node.right ) {
            nodeAndBoundStack.push({
                node: node.right,
                lowerBound: node.value,
                upperBound
            })
        }
    }
    
    return true
    
}

console.log(isValid(root))
