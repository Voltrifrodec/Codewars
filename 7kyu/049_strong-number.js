// Strong Number (Special Numbers Series #2)
function strong(n) {
  
  let num = n.toString().split('');
  let sum = 0;
  console.log('Array?? →', num);
  for(let i = 0; i < num.length; i++) {
    let temp = 1;
    for(let j = 1; j <= num[i]; j++) {
      temp *= j;
    }
    sum += temp;
  }
  
  console.log(`Input number: ${n}\nArray-altered value: ${sum}`);
  return n == sum ? 'STRONG!!!!' : 'Not Strong !!';
  
}