// Training JS #7: if..else and ternary operator
function saleHotdogs(n){
  return n < 5 ? n * 100 : (n >= 5 && n < 10) ? n * 95 : n * 90;
}