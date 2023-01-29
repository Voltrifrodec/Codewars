// Disarium Number (Special Numbers Series #3)
function disariumNumber(n){
  let num = n.toString().split('').map((num, i) => parseInt(num) ** (i + 1))
  num = num.reduce((prev, curr) => prev + curr);
  
  console.log(`Input number: ${n}\nArray-powered value: ${num}`);
  return num == n ? 'Disarium !!' : 'Not !!';
}