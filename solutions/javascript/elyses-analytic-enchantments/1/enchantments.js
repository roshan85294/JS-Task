
export function getCardPosition(stack, card) {
  return stack.findIndex((num)=>num===card);
}


export function doesStackIncludeCard(stack, card) {
return stack.includes(card);
  
}


export function isEachCardEven(stack) {
  for (let i = 0; i < stack.length; i++) {
    let num = stack[i];
    if (num%2!==0) {
     return false
    }
    }
  return true
  }



export function doesStackIncludeOddCard(stack) {
  return stack.some((num)=>num%2!==0);
}


export function getFirstOddCard(stack) {
 return stack.find((num)=>num%2!==0)
}


export function getFirstEvenCardPosition(stack) {
  return stack.findIndex((num)=>num%2===0)
}
