// Matrix Tranpose
function transpose(matrix) {
  let transpose = matrix[0].map((_, column) => matrix.map((row) => row[column]));
   
  return transpose;
}