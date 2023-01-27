// Reversed String - 1st try (2023-01-27)
function solution(str){
  str = Array.from(str);
  let rev = ''
  for(let i = str.length; i > 0; i--)
    rev += str[i - 1];
  return rev;
}


// Reversed String - 2nd try (2023-01-27)
// Realized it too late...
function solution(str){
  return str.split('').reverse().join('');
}