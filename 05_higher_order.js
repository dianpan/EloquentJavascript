function FirstReverse(str) {
  var cutString = str.split('');
  var str = '';
  for (var i = cutString.length-1; i >= 0; i--){
    str += cutString[i];
  }
  return str; 
}


//higher order functions allows us to abstract over actions, not just values
//functions that create new functions 

//Flatten
var arrays = [[1, 2, 3], [4, 5], [6]];
var one = arrays[0];
var two = arrays[1];
var three = arrays[2];
var reduce = one.concat(two, three);
console.log(reduce);

//using reduce 
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(reduce(1,2,3){
	concat 
})
