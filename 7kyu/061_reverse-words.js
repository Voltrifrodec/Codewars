// Reverse words
function reverseWords(str) {
  return str.toString().split(' ').map((word) => Array.from(word).reverse().join('').toString()).join(' ');
}