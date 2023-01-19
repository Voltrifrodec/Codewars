// Pyramid Array
function pyramid(n) {
  let res = [];
  for(let i = 0; i < n; i++) {
    let temp = [];
    for(let j = 0; j <= i; j++)
      temp.push(1);
    res.push(temp);
  }
  
  return res;
}