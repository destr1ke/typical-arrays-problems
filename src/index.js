
exports.min = function min (array) {
 if (array == undefined || array == false) return 0;
 return Math.min(...array)
 
}

exports.max = function max (array) {
  if (array == undefined || array == false) return 0;
 return Math.max(...array)
}

exports.avg = function avg (array) {
  if (array == undefined || array == false) return 0;
  return array.reduce((prev,next)=> prev+next , 0)/array.length;
}
