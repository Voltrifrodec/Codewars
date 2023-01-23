// Factorial Factory
function factorial (n) {
  if(n < 0)
    return null;
  if(n == 0)
    return 1;
  let arr = Array.from({length: n}, (_, i) => i + 1);
  console.log(n, arr);
  return arr.reduce((a,b) => a * b);
}