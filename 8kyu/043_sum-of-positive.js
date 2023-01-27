// Sum of positive
function positiveSum(arr) {
  return arr.length > 0 ? arr.map((a) => a > 0 ? a : null).reduce((a,b) => a + b) : 0;
}