// How XOR Works in Finding the Unique Value of the Array
// Used for the problem at https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem
// - all elements are in array twice but one isn't ... return that number
let test_arr1 = [0,1,0,1,3];               // Unique should be 3
let test_arr2 = [2,5,4,8,11,5,8,4,2];      // Unique should be 11
let test_arr3 = [5,4,4,6,6,8,8,9,9];       // Unique should be 5

const findUniqueByXOR = (array) => {

    let unique = 0;
    // array = array.reduce((prev, curr) => prev ^= curr);

    // console.log('Unique Value:', array);
    // return;
    for(let i = 1; i < array.length; i++) {
        console.log(`XOR: ${array[i]} ^ ${array[i - 1]} = ${array[i] ^ array[i - 1]}`);
        unique = array[i] ^= array[i - 1];
    }

    console.log('\nUnique value:', unique);

}


// findUniqueByXOR(test_arr1);
// console.log('\n');
// findUniqueByXOR(test_arr2);
// console.log('\n');
// findUniqueByXOR(test_arr3);
// console.log('\n');
findUniqueByXOR([0, 1, 0, 1, 0, 0, 1, 3]);