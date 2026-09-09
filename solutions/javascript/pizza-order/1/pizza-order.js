
export function pizzaPrice(pizza, ...extras) {
  const basePrices ={
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  };

  const extraPrice = {
   ExtraSauce:1,
    ExtraToppings:2,
  };

  const addedprice = basePrices[pizza];

  let extraTotals = extras.reduce((accumulator,currentValue)=>accumulator+extraPrice[currentValue],0);
  return addedprice + extraTotals;
}

export function orderPrice(pizzaOrders) {
 return pizzaOrders.reduce((accumulator,order)=>{
   return accumulator + pizzaPrice(order.pizza, ...order.extras);
 },0);
}
