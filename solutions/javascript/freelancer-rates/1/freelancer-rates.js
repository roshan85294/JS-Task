
export function dayRate(ratePerHour) {
  return ratePerHour*8;
}

export function daysInBudget(budget, ratePerHour) {
  let dayRate = ratePerHour*8;
  return Math.floor((budget/dayRate));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
   let dayRate = ratePerHour * 8;
  let fullMonths = Math.floor(numDays / 22);
  let remainingDays = numDays % 22;
  let monthCost = 22 * dayRate * (1 - discount);
  
  let fullMonthsCost = fullMonths * monthCost;
  let remainingCost = remainingDays * dayRate;
  
  let total = fullMonthsCost + remainingCost;
  
  return Math.ceil(total);
}
