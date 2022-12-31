// Collatz Conjecture (3n+1)
var hotpo = function(n){
    if(n == 0) return 0; //Optional Handler to n = 0
    if(n == 1) return 0;
    let attempts = 0;  
    
    do {
      (n & 1) == 0 ? n = Math.floor(n / 2) : n = (3 * n) + 1;
      attempts++;
      
    } while(n != 1);
  
    return attempts;
}