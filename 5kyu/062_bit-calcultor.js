// Bit Calculator
function calculate(num1,num2){
  let num_a = Array.from(num1).reverse().map((value, i) => value * (2 ** i)).reduce((prev, curr) => prev + curr);
  let num_b = Array.from(num2).reverse().map((value, i) => value * (2 ** i)).reduce((prev, curr) => prev + curr);
  
  console.log(`Input: ${num1} ${num2}`);
  console.log(`Output: ${num_a + num_b} (${num_a} + ${num_b})`);
  
  return num_a + num_b;
}
