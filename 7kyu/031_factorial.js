// Factorial - 1st try (2023-01-23)
function factorial(n) {
  console.log(`n = ${n}`);
  
  if(n < 0 || n > 12)
    throw new RangeError();
  if(n == 0)
    return 1;

  return Array.from({length: (n)}, (_, i) => i + 1).reduce((a,b) => a * b);
}