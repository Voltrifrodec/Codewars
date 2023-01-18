// Digit * Digit
function squareDigits(num){
  if(num == 0)
    return 0;
  
  var sum_string = '';
  num = num.toString();
  for(let i = 0; i < num.length; i++)
    sum_string += num[i] ** 2;
  
  return parseInt(sum_string);
}