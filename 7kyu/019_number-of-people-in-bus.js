// Number of People in the Bus - 1st try (2023-01-20)
var number = function(busStops){
  // Good Luck!
  let sum = 0;
  
  for(let i = 0; i < busStops.length; i++) {
    sum += (busStops[i][0] - busStops[i][1]);
  }
  
  return sum;
}


// Number of People in the Bus - 2nd try (2023-01-20)
var number = function(busStops){
  // Good Luck!
  return busStops.reduce((sum, [ipt, opt]) => sum + (ipt - opt), 0);
}