// Code your solution in this file!


function distanceFromHqInBlocks(currentLocation){
    return Math.abs( 42 - currentLocation)
}

function distanceFromHqInFeet (blocksInFeet){
   
    return (distanceFromHqInBlocks (blocksInFeet) * 264)
}



function distanceTravelledInFeet(startingPoint, endingPoint ){
    
    

    return Math.abs (startingPoint - endingPoint) * 264
}



        