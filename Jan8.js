const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott'],
}

//find the quickest route from one person to another. 
//sending phone messages via other peoples phones.

// Jayden to Adam
// output [ 'Jayden', 'Amelia', 'Adam' ]
// check to see if root is already connected to final person
// check root connections to see if they have a connection to your final end point, solution if Adam is one connection removed. 
// what if adam is 10 connections away? 

// track the current route you are on. 
// track nodes you need to go to and pop of that. 

function findQuickestConnect( network, startNode, endNode ) {
    
    let nodeQueue = []
    nodeQueue.push(startNode)

    const path = {}
    path[startNode] = null

    while ( nodeQueue.length > 0 ) {
        const currentNode = nodeQueue.shift()
        console.log(path)
        if ( currentNode === endNode ) {
            return reconstructPath( path, startNode, endNode )
        } else if ( network[currentNode] ) {
            network[currentNode].forEach( neighbor => {
                if ( !path.hasOwnProperty(neighbor) ) {
                    
                    nodeQueue.push(neighbor)
                    path[neighbor] = currentNode
                }
            })
        }
    }
    return null
}

function reconstructPath( path, startNode, endNode ) {
    
    const shortestPath = []

    let currentNode = endNode
    while ( currentNode !== null ) {
        shortestPath.push(currentNode)
        currentNode = path[currentNode]
    }
    return shortestPath.reverse()
}

// console.log(findQuickestConnect( network, "Jayden", "Jayden" )) // [ 'Jayden' ] // pass
// console.log(findQuickestConnect( network, "Jayden", "Amelia" )) // [ 'Jayden', 'Amelia' ] // pass
// console.log(findQuickestConnect( network, "Jayden", "Adam" )) // [ 'Jayden', 'Amelia', 'Adam' ] // pass with interview cake code
// console.log(findQuickestConnect( network, "Ren", "William" )) // [ 'Ren', 'Jayden', 'Min', 'William' ] //pass with IC code

// ------------------------ //

// Overlapping subproblems (recursion)

// fibonacci as recursion

const fib = (n) => {
    if ( n===0 || n === 1 ) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(3))

//this creates a problem because in fib(5) it would call fib(2) three separate times. 






