// Moving Zeros To The End - 1st try (2023-01-27)
function moveZeros(arr) {
  
  let res_arr = [];
  let zero_counter = 0;
  
  for(let i = 0; i < arr.length; i++) {
    
    if(typeof arr[i] == 'number' && arr[i] == 0) {
      zero_counter++;
    } else {
      res_arr.push(arr[i]);
    }
  }
  
  console.log(`Number of zeros: ${zero_counter}\nResult array: ${res_arr}\n`);
  
  let temp_arr = Array(zero_counter).fill(0);
  return res_arr.concat(temp_arr);
  
}


// Moving Zeros To The End - 2nd try (2023-01-27)
// After looking at the solutions made by others and studying .filter() method
function moveZeros(arr) {
  
  let zeros_counter = arr.filter((num) => num === 0);
  let filtered_array = arr.filter((num) => num !== 0);
  
  return filtered_array.concat(zeros_counter);
  
}