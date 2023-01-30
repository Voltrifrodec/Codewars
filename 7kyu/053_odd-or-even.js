// Odd or Even? - 1st try (2023-01-30)
function oddOrEven(array) {
   return array.length == 0 ? 'even' : array.reduce((prev, curr) => prev + curr) % 2 == 0 ? 'even' : 'odd'; 
}


// Odd or Even? - 2nd try (2023-01-30)
function oddOrEven(array) {
   return array.reduce((prev, curr) => prev + curr, 0) % 2 == 0 ? 'even' : 'odd';
}