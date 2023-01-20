// Row Weights - 1st try (2023-01-20)
function rowWeights(array){
  let x = [];
  let y = [];
  for(let i = 0; i < array.length; i++)
    if(i % 2 == 0)
      x.push(array[i]);
    else
      y.push(array[i]);
  
  return [x.reduce((a,b) => a + b, 0), y.reduce((a,b) => a + b, 0)];
}


// Row Weights - 2nd try (2023-01-20)
function rowWeights(array){
  
  let x = array.filter((a,i) => i % 2 != 0).reduce((a,b) => a + b, 0);      // Only sum of odd numbers from array
  let y = array.filter((a,i) => i % 2 == 0).reduce((a,b) => a + b, 0);      // Only sum of even numbers from array
  
  return [y, x];
  
}