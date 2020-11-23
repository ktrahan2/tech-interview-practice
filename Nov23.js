//return the minimum number of jumps required to make it across the clouds
//0 is safe, 1 is not
// input - [0, 1, 0, 0, 0, 1, 0] - output - 2

//receive total number of clouds and array of 0/1's 


//expected output 4.

//can jump to a 0 cloud that is equal to or +1/2 from current index
// if you can jump two spots increment i by 2, and clouds jumped by 1, else both by 1

function countingClouds(cloudPattern) {
    
    let cloudsJumped = 0

    for (let i = 0; i < cloudPattern.length; i++) {
        
        if (cloudPattern[i] === 0 && cloudPattern[i + 2] === 0) {
            cloudsJumped += 1
            i += 1
        } else if ( cloudPattern[i] === 0 && cloudPattern[i + 1] === 0 ) {
            cloudsJumped += 1
        } 
    }
    return cloudsJumped
}

let cloudPattern = [0, 0, 1, 0, 0, 1, 0]
//expected output 4
let cloudPattern2 = [ 0, 0, 0, 0, 1, 0]
//expected output 3

console.log(countingClouds(cloudPattern))
console.log(countingClouds(cloudPattern2))