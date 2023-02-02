// Reverse words
function reverseWords(str) {
  return str.toString().split(' ').map((word) => Array.from(word).reverse().join('').toString()).join(' ');
}


// I found out later on, that you don't need to reverse each word individually -- that's why I didn't know why it look so complicated for such trivial kata...