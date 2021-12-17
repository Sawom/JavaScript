function getFullName(){
    var fullname = '';
    for(var part of arguments){
        fullname = fullname + part;
    }
    return fullname;
}
var output = getFullName('abdur', ' rashid', ' bin', ' bokhtiar', ' kholji');
console.log(output);
// numbers
function getSum(){
    var sum = 0;
    for(var numbers of arguments){
        sum = sum + numbers;
    }
    return sum;
}
var summetion = getSum(36,25,37,66,69,99);
console.log(summetion);