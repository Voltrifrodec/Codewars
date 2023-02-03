// Credit Card Mask
function maskify(cc) {
  return cc.length <= 4 ? cc : Array(cc.length - 4).fill('#').join('') + cc.slice(-4);
}