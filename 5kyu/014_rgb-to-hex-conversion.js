// RGB to Hex Conversion
function rgb(r, g, b){
  
  let x = r > 255 ? 255 : (r < 0) ? 0 : r;
  let y = g > 255 ? 255 : (g < 0) ? 0 : g;
  let z = b > 255 ? 255 : (b < 0) ? 0 : b;
  
  let dict = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let hex_val = dict[Math.floor(x / 16)] + dict[x % 16]   // R value
              + dict[Math.floor(y / 16)] + dict[y % 16]   // G value
              + dict[Math.floor(z / 16)] + dict[z % 16];  // B value
  
  return hex_val;
    
}