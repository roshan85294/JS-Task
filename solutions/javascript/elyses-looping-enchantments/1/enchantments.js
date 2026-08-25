
export function cardTypeCheck(stack, card) {
   let count = 0;
  stack.forEach((cardtype)=>{
    if (cardtype===card) {
      count++;
    }
  });
  return count;
}

export function determineOddEvenCards(stack, type) {
 let count = 0;
  for(const card of stack){
    if (type===true && card%2===0) {
      count++;
    }
    else if (type===false && card%2 !== 0) {
      count++;
    }
  }
  return count;
}
