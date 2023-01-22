// Happy Numbers - 1st try (2023-01-22)
function isHappy(n) {
    // Good Luck
    if(n == 1)
      return true;
    
    let temp = 0;
    let iterator = 0;
    while(temp != 1 && iterator != 200) {
      temp = 0;
      n = n.toString();
      for(let i = 0; i < n.length; i++)
        temp += parseInt(n[i]) ** 2;
      n = temp;
      iterator++;
    }
    
    return temp == 1;
}


// Happy Numbers - 2nd try (2023-01-22)
function isHappy(n) {
  // Good Luck
  if(n == 1)
    return true;
  
  let temp = 0;
  let iterator = 1;
  n = n.toString();
  while(temp != 1 && iterator != 200) {
    temp = (Array.from(n).map((a) => a ** 2).reduce((a,b) => a + b));
    n = temp.toString();
    iterator++;
  }
  
  return temp == 1;
}


//? Note: 200 is just a imaginary value of iterations cycle should do... if it doesn't find in first 200 cycles, then it jumps outs with either true of false (depends on luck)