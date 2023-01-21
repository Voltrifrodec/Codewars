// Complete Fibonacci Series
function fibonacci(n) {
  //return fibonacci array of n elements
  var arr = [];
  if(n <= 0)
    return [];
  arr = [0, 1, 1];
  if(n == 1)
    return arr.pop();
  if(n == 2)
    return arr;
  
  for(let i = 3; i < n; i++)
    arr.push(arr[i - 1] + arr[i - 2]);
  
  return arr;
}


// Even tho there's no need to define first three values, since you only need two for every other (n3 = n0 + n1 => 1)