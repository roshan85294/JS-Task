
export function translate2d(dx, dy) {
 return function shiftPoint(x,y){
   return [x+dx,y+dy];
 }
}

export function scale2d(sx, sy) {
 return function scalePoint(x,y){
   return [x*sx,y*sy];
 }
}

export function composeTransform(f, g) {
  return function composeTransformation(x,y) {
    const firstTransform = f(x,y);
    const afterTransform = g(...firstTransform);
    return afterTransform;
  }
  
  
}

export function memoizeTransform(f) {
  let lastArgs = null;     
  let lastResult = null;  

  return function (...args) {
    if (lastArgs !== null && JSON.stringify(args) === JSON.stringify(lastArgs)) {
      return lastResult;  
    }
    
    const result = f(...args);  
    lastArgs = args;             
    lastResult = result;        
    return result;
  };
}
