// N-th Fibonacci
function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  let arr = [0,0,1]; // Values of Fibonacci sequence for numbers 0 - 2
  if(n <= 0)
    return 0;
  if(n == 2)
    return 1;
  for(let i = 3; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
    console.log(arr[i]);
  }
  
  return arr[n];
}