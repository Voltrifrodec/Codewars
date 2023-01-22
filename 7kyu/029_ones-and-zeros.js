// Ones and Zeros - 1st try (2023-01-22)
const binaryArrayToNumber = arr => {
  // your code
  
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    let temp = 2 ** (arr.length - i - 1) * arr[i];
    sum += temp;
    console.log(`${arr[i]} -> ${arr[i]} * 2^${arr.length - i - 1} -> ${sum} (+${temp})`);
  }
  
  return sum;
};


// Ones and Zeros - 2nd try (2023-01-22)
const binaryArrayToNumber = arr => {

  return arr.map((num,pos) => num * (2 ** (arr.length - pos - 1))).reduce((a,b) => a + b);

};