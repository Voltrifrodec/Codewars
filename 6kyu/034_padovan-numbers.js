// Padovan numbers - 1st try (2023-01-23)
function padovan(n) {
  if(n < 0)
    return null;
  let x,y,z,temp;
  x = y = z = 1;
  for(let i = 0; i < n; i++){
    temp = y + z;
    y = z;
    z = x;
    x = temp;
  }
  
  return y;
}


// Padovan numbers - 2nd try (2023-01-xx)
