//word search 2

//given an board m x n and a list of words. return all the words that appear on the board.

//board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// output = ["eat", "oath"]

//the next letter can be horizontal or vertical 

//find a way to figure out what all the adjacent letters are to the current one.
//see if those adjacent letters match the pattern of the current word string you are looping through, maybe use a filter

//graphing wasnt a good solution because all of the points are not unique
//going to try kind of a map/weird tree
class TreeNode {
    constructor(label) {
      this.label = label;
      this.left = null;
      this.right = null;
      this.up = null;
      this.down = null
    }

    insertLeft(value) {
        this.left = value
        return this.left
    }

    insertRight(value) {
        this.right = value
        return this.right
    }

    insertDown(value) {
        this.down = value
        return this.down
    }

    insertUp(value) {
        this.up = value
        return this.up
    }
}

const wordSearch = ( board, words ) => {
    
    const tree = createTree(board)
    const wordsFound = []
   
    words.forEach(word => {
        canISpellIt(tree, word) ? wordsFound.push(word) : null
    })

    return wordsFound
    
}

const canISpellIt = ( tree, word ) => {
    //need a way to not repeat nodes
    let i = 0 
    let wordSpelled = []
  
    while ( i < word.length ) { 
        let currentLetter = word[i]
        let nextLetter = word[i+1]
        
        if ( tree[currentLetter] ) {
            
            for ( let j = 0; j < tree[currentLetter].length; j++) {
                let node = tree[currentLetter][j]
                
                if ( node.left === nextLetter || node.right === nextLetter 
                    || node.up === nextLetter || node.down === nextLetter ) {
                    wordSpelled.push(currentLetter)
                    break
                } 
                if ( i === word.length - 1 && currentLetter === word[i] && wordSpelled.join('') !== word ) {
                    wordSpelled.push(word[i])
                }

            }
        } else {
            break
        }
        i++
    }
    
    return wordSpelled.join('') === word ? true : false
}

const createTree = ( board ) => {

    const tree = {}

    for ( let i = 0; i < board.length; i++ ) {
        for ( let j = 0; j < board[i].length; j++) {
            let currentChar = board[i][j]

            let newTreeNode = new TreeNode(currentChar)
            
            if ( j + 1 < board[i].length ) {
                //adds right
                newTreeNode.insertRight(board[i][j + 1])
            } 
            if ( i + 1 < board.length ) {
                //adds down
                newTreeNode.insertDown(board[i + 1][j])
            } 
            if ( i - 1 >= 0 ) {
                //adds up
                newTreeNode.insertUp(board[i - 1][j])
            } 
            if ( j - 1 >= 0 ) {
                //adds left
                newTreeNode.insertLeft(board[i][j - 1])
            }
            if ( !tree[currentChar] ) {
                tree[currentChar] = [newTreeNode]
            } else {
                tree[currentChar].push(newTreeNode)
            }
        }
    }
    return tree
}

// let board = [["a","b"],["c","d"]]
// let words = ["abcb"] 
// let words2 = ["abdc"]
let board2 = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
let words3 = ["oath","pea","eat","rain"]
let board = 
[["o","a","b","n"],["o","t","a","e"],["a","h","k","r"],["a","f","l","v"]]
let words = ['oa', 'oaa']

// console.log(createTree(board)) // working
// console.log(createTree([['a', 'a']])) // working
// console.log(wordSearch(board, words2)) // [abcd], passing
console.log(wordSearch(board2, words3)) // [oath, eat] // passing
console.log(wordSearch([['a','a']], ['aaa'])) // [] //  not passing
console.log(wordSearch([['a','a']], ['aa'])) // ['aa'] // passing
console.log(wordSearch(board, words)) // ['oa', 'oaa'] // passing
// console.log(wordSearch([['a', 'b'],['a', 'b']], ['aa'])) // ['aa'], failing need a better way to create graphnodes