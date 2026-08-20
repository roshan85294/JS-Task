
export function getListOfWagons(...wagons) {
  return wagons
}


export function fixListOfWagons(ids) {
 let [first, second, ...rest] = ids;
  let newIds = [...rest, first, second];
  return newIds
}


export function correctListOfWagons(ids, missingWagons) {
 let [firstWagaon,...rest] = ids;
  let correctWagonsIDs = [firstWagaon,...missingWagons,...rest];
  return correctWagonsIDs
}


export function extendRouteInformation(information, additional) {
  let route = information;
  let moreRouteInformation = additional;
  let RouteInformation = {...route,...moreRouteInformation};
  return RouteInformation
}


export function separateTimeOfArrival(information) {
 let {timeOfArrival,...rest} = information;
  let routeInformation = [timeOfArrival,rest];
  return routeInformation
}
