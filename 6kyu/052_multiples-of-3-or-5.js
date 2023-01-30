// Multiples of 3 or 5
function solution(number){
  if(number < 0)
    return 0;
  
  let sum = Array.from({length: number - 1}, (_, i) => i + 1).filter((num) => (num % 3 == 0) || (num % 5 == 0));
  return sum.length == 0 ? 0 : sum.reduce((prev, curr) => prev + curr);
}


// Note: Should' have use 'new Array(number).keys()' instead of 'Array.from({length: number - 1}, (_, i) => i + 1)' for generating array of numbers.