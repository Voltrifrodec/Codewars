// Get the mean of an array
function getAverage(marks){
  return Math.floor(marks.reduce((prev,curr) => prev + curr) / marks.length); 
}