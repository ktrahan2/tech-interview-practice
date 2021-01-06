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

//write a function to find the 2nd largest number in the tree
//should only need to go down the right side of the root if its a "good" tree 
// the root could potential be the 2nd largest. if it only goes one level deep
// the answer is the parent of the deepest node down the rightest route

//my function currently works if there is a subtree of the right side of the root.
//I need to account for left side and if the right side doesnt have any children
// if the right side doesnt have children then the 2nd largest number is the root value
// if it goes down the left side then the right most node of that branch will be the 2nd largest, as the root is the largest 

function findSecondLargestNumber( root ) {
    let currentNode = root;
    let secondLargestNumber = 0;

    if ( currentNode.right ) {
        while ( currentNode.right ) {
            secondLargestNumber = currentNode.value
            currentNode = currentNode.right
        }
    } else if ( currentNode.left) {
        currentNode = currentNode.left
        while ( currentNode.right ) {
            currentNode = currentNode.right
            secondLargestNumber = currentNode.value
        }
    }
    return secondLargestNumber
}

// console.log(findSecondLargestNumber( root ))

// ------------------------ //

class GraphNode {
    constructor(label) {
      this.label = label;
      this.neighbors = new Set();
      this.color = null;
    }
}
  
const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
b.neighbors.add(c);
c.neighbors.add(b);

const graph = [ a, b, c ];
const colors = [ "green", "blue", "red" ]

// find a legal coloring for a graph with maximum degree D using at most D + 1 coloring.

//not my solution, just trying to learn about graphs. 

function findLegalColoring( graph, colors ) {

    graph.forEach( node => {

        if ( node.neighbors.has(node) ) {
            throw new Error('na dog, you cant be your own neighbor')
        }

        const illegalColors = new Set()

        node.neighbors.forEach(neighbor => {
            if (neighbor.color !== null ) {
                illegalColors.add(neighbor.color)
            }
        })
        
        // this assigns the first legal color than breaks out of the loop. 

        for ( let i = 0; i < colors.length; i++) {
            const color = colors[i]

            if ( !illegalColors.has(color) ) {
                node.color = color
                break
            }
        }  
    })
    return graph
}

console.log(findLegalColoring( graph, colors ))