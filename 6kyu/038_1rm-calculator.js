// 1RM Calculator - 1st try (2023-01-27)
function calculate1RM(w, r) {
  if(r == 1)
    return w;
  if(r == 0)
    return 0;
  
  let epley_formula = w * (1 + (r / 30));
  let mcglothin_formula = (100 * w) / (101.3 - (2.67123 * r));
  let lombardi = w * (r ** 0.10);
  
  let res_arr = [epley_formula, mcglothin_formula, lombardi].sort((a,b) => b - a);
  return parseInt(res_arr[0].toFixed(0));
  
}