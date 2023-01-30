// Square(n) Sum
function squareSum(numbers){
  return numbers.length == 0 ? 0 : numbers.map((num) => num ** 2).reduce((prev, curr) => prev + curr);
}