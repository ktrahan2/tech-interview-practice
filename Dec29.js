function countPizza(s) {
    let charHash = {}
    let pizzaArray = ["p", "i", "z", "a"]
    let pizzaCount = 0

    if ( s !== "" ) {
        for (let i = 0; i < s.length; i++) {
            let currentLetter = s[i]
            if ( pizzaArray.includes(currentLetter) ) {
                if (!charHash[currentLetter]) {
                    charHash[currentLetter] = 1
                } else {
                    charHash[currentLetter] += 1
                }
            }
        }
        pizzaCount = Math.floor(Math.min(charHash["p"], charHash["i"], charHash["a"], charHash["z"] / 2)) || 0
    }
    return pizzaCount
}

let s = "izzpa"
let s2 = "pihzzapizza"
let s3 = "ppppz"
let s4 = ""

// console.log("pizzaCount", countPizza(s)) // 1
// console.log("pizzaCount", countPizza(s2)) // 2
// console.log("pizzaCount", countPizza(s3)) // 0
// console.log("pizzaCount", countPizza(s4)) // 0

// ------------------------- //

//write a function to see if a binary tree is superbalanced

// its considered super balanced if the depths of any two leaf nodes is no greater than one

function isBalanced(treeRoot) {
    if (!treeRoot) {
      return true;
    }
  
    const depths = []; 
    
    const nodes = [];
    nodes.push([treeRoot, 0]);
    while (nodes.length) {
     
      const nodePair = nodes.pop();
      const node = nodePair[0];
      const depth = nodePair[1];
        
      if (!node.left && !node.right) {

        if (depths.indexOf(depth) < 0) {
          depths.push(depth);
  
          if (
            (depths.length > 2)
            || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)
          ) {
            return false;
          }
        }
      } else {
  
        if (node.left) {
          nodes.push([node.left, depth + 1]);
        }
        if (node.right) {
          nodes.push([node.right, depth + 1]);
        }
      }
    }
    return true;
  }

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
  const root = new BinaryTreeNode(1)
  const node1 = root.insertLeft(2)
  const node3 = root.insertRight(4)
  const node2 = node1.insertLeft(3)
  const node4 = node2.insertLeft(5)

  console.log(isBalanced(root))

