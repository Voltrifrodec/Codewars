// Squares sequence
function squares(x, n) {

    return n <= 0 ? [] : Array.from({length: n}, (_, i) => x ** 2 ** i);
  
}