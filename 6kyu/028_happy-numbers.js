// Happy Numbers
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