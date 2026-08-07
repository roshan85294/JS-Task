
export function twoSum(array1, array2) {
  let str1 = array1.join('');
  let str2 = array2.join('');
  let num1 = Number(str1);
  let num2 = Number(str2);
  let sum  = num1+num2;
  return sum
}


export function luckyNumber(value) {
  let reverseNumber = 0;
  for (let temNumber = value; temNumber > 0; temNumber = Math.floor(temNumber/10)) {
    let lastDigit = temNumber%10;
    reverseNumber = (reverseNumber*10)+lastDigit;
  }
  if (value===reverseNumber) {
    return true
  }else{
    return false
  }
}


export function errorMessage(input) {
  let num = Number(input)
 if (input === '' || input===undefined || input===null) {
   return "Required field"
 }else if (isNaN(num) || num===0) {
   return 'Must be a number besides 0'
 }else{
   return ''
 }
}
