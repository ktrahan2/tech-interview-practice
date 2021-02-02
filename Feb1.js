const isAdjacent = ( query, lamp ) => {
  
    let queryColumn = query[0]
    let queryRow = query[1]
    let lampColumn = lamp[0]
    let lampRow = lamp[1]
   
    if ( Math.abs(lampColumn - queryColumn) < 2 && Math.abs(lampRow - queryRow) < 2) {
        return true
    } else {
        return false
    }
}
// Complete the checkIllumination function below.
//passes 6 of 10. bad on time
function checkIllumination(N, lamps, queries) {
    
    let litResults = []
    let litness = false
    
    for ( let i = 0; i < queries.length; i++ ) {
        
        let currentQueryColumn = queries[i][0]
        let currentQueryRow = queries[i][1]
        
        for ( let j = 0; j < lamps.length; j++ ) {
            
            const currentLampColumn = lamps[j][0]
            const currentLampRow = lamps[j][1]
            
            const isDiagnol = Math.abs(currentLampRow - currentQueryRow) === Math.abs( currentLampColumn - currentQueryColumn)
            //checks if lamp is adjacent
            if ( !isAdjacent(queries[i], lamps[j] ) && currentQueryRow === currentLampRow ) {
                litness = true
                break
            } //checks if same column and not adjacent 
            else if ( !isAdjacent(queries[i], lamps[j] ) && currentQueryColumn === currentLampColumn ) {
                litness = true
                break
            } //checks if its diagnol and not adjacent
            else if ( !isAdjacent(queries[i], lamps[j] ) && isDiagnol ) {
                litness = true
                break
            } else {
                litness = false 
            }
        }
        litness ? litResults.push("LIGHT") : litResults.push("DARK")
    }
    return litResults
}
