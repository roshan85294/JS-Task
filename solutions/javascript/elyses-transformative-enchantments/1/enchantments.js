
export function seeingDouble(deck) {
 const newArr =  deck.map((value)=>value*2);
  return newArr
}

export function threeOfEachThree(deck) {
  return deck.reduce((accumulator,currentValue)=>{
    if (currentValue===3) {
      accumulator.push(3,3,3);
    }
    else{
      accumulator.push(currentValue);
    }
    return accumulator
  },[]);
}


export function middleTwo(deck) {
 let middleIndex = deck.length/2;
  return deck.slice(middleIndex-1,middleIndex+1);
}



export function sandwichTrick(deck) {
 let first = deck[0];
  let last = deck[deck.length-1];
  let middle = deck.slice(1,-1);
  let halfPoint = middle.length/2;
  let firstHalfe = middle.slice(0,halfPoint);
  let secondHalfe = middle.slice(halfPoint);

  return[...firstHalfe,last,first,...secondHalfe]
}

export function twoIsSpecial(deck) {
  return deck.filter((card)=>card===2)
}


export function perfectlyOrdered(deck) {
 return deck.sort((first,second)=>first-second);
}

export function reorder(deck) {
  return deck.reverse();
}
