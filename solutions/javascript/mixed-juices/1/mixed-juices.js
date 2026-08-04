export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5;
    case  'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}


export function limesToCut(wedgesNeeded, limes) {
 let totalwedges = 0;
  let count = 0;
  let i = 0;
  while (totalwedges<wedgesNeeded && i<limes.length) {
    if (limes[i]==='small') {
      totalwedges = totalwedges+6;
    }
    else if (limes[i]==='medium') {
      totalwedges = totalwedges+8;
    }
    else if (limes[i]==='large') {
      totalwedges = totalwedges+10;
    }
    count++;
    i++;
  }
  return count
}


export function remainingOrders(timeLeft, orders) {
  
 let time = timeLeft;
  let remaining = [];
  for (let i = 0; i < orders.length; i++) {
    let juice = orders[i];
    let duration = timeToMixJuice(juice);   
    if (time > 0) {
      time = time - duration;
    } else {
      remaining.push(juice);
    }
  }
  return remaining;
}
