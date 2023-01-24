// Split Strings - 1st try (2023-01-24)
function solution(str){
   let arr = [];
   let temp = '';   
   for(let i = 0; i < str.length; i++) {
     if(i % 2 == 1 && i != 0) {
       temp += str[i];
       arr.push(temp);
       temp = '';
     } else { 
      temp += str[i];
     }
   }
   if(str.length % 2 != 0) {
     temp += '_';
     arr.push(temp);
   }
  
  return arr;
}


// Split Strings - 2nd try (2023-01-24) -> inspired from the 'Solutions' section
function solution(str){
  
  return (str + '_').match(/.{2}/g) || [];
  
}