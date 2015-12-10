function FirstReverse(str) {
  var cutString = str.split('');
  var str = '';
  for (var i = cutString.length-1; i >= 0; i--){
    str += cutString[i];
  }
  return str; 
}

//Flatten
var arrays = [[1, 2, 3], [4, 5], [6]];
var flatten = arrays[0].concat(arrays[1], arrays[2]);
console.log(flatten);
