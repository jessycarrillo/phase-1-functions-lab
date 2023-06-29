const manhattanFeetPerBlock = 264
const hqStAddress = 42


function distanceFromHqInBlocks(passengerStLocation){
    return Math.abs(passengerStLocation - hqStAddress); 
}  

function distanceFromHqInFeet(passengerStLocation) {
    const blocks = distanceFromHqInBlocks(passengerStLocation);
    return blocks * manhattanFeetPerBlock;
}

function distanceTravelledInFeet(startBlock, endBlock){
    const traveledBlock = endBlock - startBlock
    return Math.abs(traveledBlock * manhattanFeetPerBlock)
}

function calculatesFarePrice(startBlock, endBlock){
    const ride =  Math.abs((endBlock - startBlock) * manhattanFeetPerBlock)
    if (ride <= 400) {
        return 0
        }
      if((ride > 400) && (ride < 2000)) {
        return (ride - 400) * 0.02
    }
    if ((ride >= 2000) && (ride < 2500)){
        return 25;
      }
    if (ride >= 2500)
      return 'cannot travel that far';
  }


