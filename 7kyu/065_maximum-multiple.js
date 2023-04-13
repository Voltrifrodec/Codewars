// Maximum Multiple
function maxMultiple(divisor, bound){
  return bound - (bound % divisor);
}


//? Explanation for me
/*
1.) Maximum Multiple of 2 and 7
    divisor < bound -> true
    calculation: bound / divisor = 7 / 2 = 3, rem 1

    bound - calculation = 7 - 1 = 6 -> checks with the expected output
*/
/*
2.) Maximum Multiple of 37 and 200
    divisor < bound -> true
    calculation: bound / divisor = 200 / 37 = 5, rem 15

    bound - calculation = 200 - 15 = 185 -> checks with the expected output
*/
/*
3.) Maximum Multiple of 7 and 100
    divisor < bound -> true
    calculation: bound / divisor = 100 / 7 = 14, rem 2

    bound - calculation = 100 - 2 = 98 -> checks with the expected output
*/
/*
3.) Maximum Multiple of 613 and 664634
    divisor < bound -> true
    calculation: bound / divisor = 664634 / 613 = 1084, rem 142

    bound - calculation = 664634 - 142 = 664492 -> checks with the expected output
*/

// Math.floor(bound / divisor) * divisor should do the trick as well (since it's basically what calculation does)