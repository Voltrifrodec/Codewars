// Special Number (Special Numbers Series #5)
function specialNumber(n){
  let arr = n.toString().split('').map((num) => Number(num)).filter((num) => num < 6);
  console.log(`Array:${arr}\nNumber:${n}`)
  return n == arr.join('') ? 'Special!!' : 'NOT!!';
  
}