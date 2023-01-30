// String ends with? - 1st try (2023-01-30)
function solution(str, ending){
  return str.slice(str.length - ending.length) == ending;
}


// Strings ends with? - 2nd try (2023-01-30)
// What is wrong with me?
function solution(str, ending){
  return str.endsWith(ending);
}