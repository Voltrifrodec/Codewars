// Convert a Hex String to RGB - 1st try (2023-01-27)
function hexStringToRGB(hexString) {
  
  var converted = {
    r: parseInt(hexString[1],16) * (16 ** 1) + parseInt(hexString[2],16) * (16 ** 0),
    g: parseInt(hexString[3],16) * (16 ** 1) + parseInt(hexString[4],16) * (16 ** 0),
    b: parseInt(hexString[5],16) * (16 ** 1) + parseInt(hexString[6],16) * (16 ** 0)
  }
  
  return converted;
}


// Convert a Hex String to RGB - 2nd try (2023-01-27)
// Simplified version → parseInt() does all the work for you
function hexStringToRGB(hexString) {
  var converted = {
    r: parseInt(hexString.slice(1,3), 16),
    g: parseInt(hexString.slice(3,5), 16),
    b: parseInt(hexString.slice(5,7), 16)
  };
  
  return converted;
}