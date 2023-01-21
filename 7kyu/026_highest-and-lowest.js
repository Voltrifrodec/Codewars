// Highest and Lowest
function highAndLow(numbers){
  console.log('Numbers: ',numbers);
  
  numbers = numbers.split(' ').map((a) => a = parseInt(a));
  console.log(numbers);
  
  let min = numbers.reduce((prev, curr) => prev < curr ? prev : curr);
  let max = numbers.reduce((prev, curr) => prev > curr ? prev : curr);
  console.log('Min and max: ', min, max)
  
  return [max,min].join(' ');
  
}