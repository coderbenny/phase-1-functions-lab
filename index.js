// Code your solution in this file!

function distanceFromHqInBlocks(address) {
    let hqDistance = 42;
    let totalDistance = hqDistance - address;
    const distance = Math.abs(totalDistance)
    return distance;
}

function distanceFromHqInFeet(address) {
    let hqDistance = 42;
    let blockInFeet = 264;
    let blocksFromHq = Math.abs((hqDistance - address) * blockInFeet);
    return blocksFromHq;
}

function distanceTravelledInFeet(start, destination) {
    let blockInFeet = 264;
    let blocksTravelled = Math.abs(start - destination);
    let distanceInFeet = blocksTravelled * blockInFeet
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    let blockInFeet = 264;
    let blocksTravelled = Math.abs(start - destination);
    let pricePerFeet = 0.02;
    let distance = blocksTravelled * blockInFeet;
    let totalFare = (distance * pricePerFeet)* 100;
    let freeRide = 400;

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance < 2000){
        let reliefDistance = distance - freeRide;
        let newFare = (reliefDistance * pricePerFeet);
        return newFare;
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
}