// Grasshopper - Summation
// Complex
var summation = function (num) {
  let sum = 0;
  for(let i = 0; i <= num; i++)
    sum += i;
  return sum;
}


// Better
var summation = (n) => (n * (n + 1)) / 2;