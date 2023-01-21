// Opposites Attract - 1st try (2023-01-21)
function lovefunc(flower1, flower2){
  // moment of truth
  return (flower1 % 2 == 0 != flower2 % 2 == 0) || (flower1 % 2 != 0 != flower2 % 2 != 0); 
}


// Opposites Attract - 2nd try (2023-01-21)
function lovefunc(flower1, flower2){
  // moment of truth
  return flower1 % 2 != flower2 % 2;
}