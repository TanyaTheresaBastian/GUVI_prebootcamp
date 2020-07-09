var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = [];

for (var i = 10; i > -1; i-- ) {
 new_string += numsArr[i]; 
 
if(i<11 && i>0){
    new_string  += " ";
}
}
console.log(new_string);