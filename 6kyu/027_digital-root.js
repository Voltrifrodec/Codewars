// Sum of Digits / Digital Root
function digitalRoot(n) {
  if(n < 10)
    return n;
  
  let sum = 0;
  n = n.toString();
  for(let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);  
  }
  
  return digitalRoot(sum);
}


