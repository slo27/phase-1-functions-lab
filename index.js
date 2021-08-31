// Code your solution in this file!
let headQuarters = 42;
let blocksInFeet = 264;

let distanceFromHqInBlocks = (pickUpLocation) => {
    
    if (pickUpLocation > headQuarters) {
        return pickUpLocation - headQuarters;
    } else if (pickUpLocation < headQuarters) {
        return headQuarters - pickUpLocation;
    } else {
        return 0;
    }
}

// return Math.abs(pickUpLocation - headQuarters);
// absolute value


// function distanceFromHqInFeet(beginningBlock) {
// }
// these are the same? below is a arrow function
// let distanceFromHqInFeet = (beginningBlock) => {
// }


let distanceFromHqInFeet = (beginningBlock, destinationBlock) => {
    let distanceTravelledInBlocks = distanceFromHqInBlocks
    (beginningBlock);
    return distanceTravelledInBlocks * blocksInFeet

}


let distanceTravelledInFeet = (beginningBlock, destinationBlock) => {
    let distanceInBlocks = Math.abs(beginningBlock - destinationBlock);
    return distanceInBlocks * blocksInFeet;
}


let calculatesFarePrice = (beginningBlock, destinationBlock) => {
    let feetTravelled = distanceTravelledInFeet(beginningBlock, destinationBlock);
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}