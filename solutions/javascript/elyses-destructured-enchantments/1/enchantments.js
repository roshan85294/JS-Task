
export function getFirstCard(deck) {
   const [first]=deck;
  return first
}


export function getSecondCard(deck) {
  const [first, second]=deck;
  return second
}


export function swapTwoCards(deck) {
 const [first, second]=deck;
  
  return [second, first];
}

export function shiftThreeCardsAround(deck) {
 const [first, second, third] = deck;
  return [second, third, first];
  
}

export function pickNamedPile(piles) {
  return piles.chosen;

}

export function swapNamedPile(piles) {
  const{chosen,disregarded}=piles
  return { chosen:disregarded, disregarded:chosen };
}
