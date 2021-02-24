//word search 2

//given an board m x n and a list of words. return all the words that appear on the board.

//board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
// output = ["eat", "oath"]

//the next letter can be horizontal or vertical 

//find a way to figure out what all the adjacent letters are to the current one.
//see if those adjacent letters match the pattern of the current word string you are looping through, maybe use a filter
class GraphNode {
    constructor(label) {
      this.label = label;
      this.neighbors = new Set();
    }
}

const wordSearch = ( board, words ) => {
    const letterGraph = createGraph(board)
    const wordsFound = []
    
    words.forEach(word => {
        if ( word.length === 1 && letterGraph[word] ) {
            wordsFound.push(word)
        } else if ( canISpellIt( letterGraph, word)  ) {
            wordsFound.push(word)
        } 
    })
  
    return wordsFound
}

const canISpellIt = ( graph, word ) => {
    let i = 0
    let wordSpelled = []
    
    while ( i < word.length ) {
        let currentLetter = word[i]
        
        if ( graph[currentLetter] && graph[currentLetter].has(word[i + 1])) {
            wordSpelled.push(currentLetter)
        } else {
            break
        }
        i++
    }
    //need a better way to add last letter if we make it to that in the while loop
    if ( word.length > 1 ) {
        wordSpelled.push(word[word.length - 1])    
    }
    
    if ( wordSpelled.join('') === word ) {
        return true
    } else {
        return false
    }
}  

//create graph of all the letters
const createGraph = ( board ) => {

    const graphs = {}
    for ( let i = 0; i < board.length; i++ ) {
        for ( let j = 0; j < board[i].length; j++) {
            let currentChar = board[i][j]
            //need a better way to create graphnodes with repeated letters
            let newGraph = new GraphNode(currentChar)
            if ( j + 1 < board[i].length ) {
                //adds right
                newGraph.neighbors.add(board[i][j + 1])
            } 
            if ( i + 1 < board.length ) {
                //adds down
                newGraph.neighbors.add(board[i + 1][j])
            } 
            if ( i - 1 >= 0 ) {
                //adds up
                newGraph.neighbors.add(board[i - 1][j])
            } 
            if ( j - 1 >= 0 ) {
                //adds left
                newGraph.neighbors.add(board[i][j - 1])
            }
         
            graphs[currentChar] = newGraph.neighbors
        }
    }
    console.log(graphs)
    return graphs
}


let board = [["a","b"],["c","d"]]
let words = ["abcb"] 
let words2 = ["abdc"]
let board2 = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]
let words3 = ["oath","pea","eat","rain"]

// console.log(createGraph(board)) // working, creates a graph
// console.log(wordSearch(board, words)) // []
// console.log(wordSearch(board, words2)) // ["abdc"]
console.log(wordSearch(board2, words3)) //passing 
console.log(wordSearch([['a', 'b'],['a']], ['aa'])) // ['aa'], failing need a better way to create graphnodes