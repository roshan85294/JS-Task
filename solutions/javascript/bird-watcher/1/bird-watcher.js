export function totalBirdCount(birdsPerDay) {
  let count=0;
 for (let i = 0; i < birdsPerDay.length; i++) {
    count = count + birdsPerDay[i];
 }
  return count
}



export function birdsInWeek(birdsPerDay, week) {
  let start = (week-1)*7;
  let end = start + 7;
  let count = 0;
  for (let i = start; i < end && i < birdsPerDay.length; i++) {
      count = count + birdsPerDay[i];
  }
  return count
}


export function fixBirdCountLog(birdsPerDay) {
   for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
  }
  return birdsPerDay;
}
