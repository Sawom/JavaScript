// slice splice 
var numbers = [1,2,3,4,5,6,7,8,10,56,258,9,14,52];
var nmSlice = numbers.slice(4,8);
console.log(nmSlice);
var nmSplice = numbers.splice(6,12);
console.log(nmSplice);

var nmSplice2 = numbers.splice(2, 5, 36, 24, 36, 66);
console.log(nmSplice2);

