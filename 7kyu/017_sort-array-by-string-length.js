// Sort array by String length - 1st try (2023-01-20)
function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[j].length > array[i].length) {
        let x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }
  
  return array;
  
};


// Sort array by String length - 2nd try (2023-01-20)
function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  
  return array.sort((a,b) => a.length - b.length);
};