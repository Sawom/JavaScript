var fact = 1;
var num = 6;

function factorial(num){
    if(num==1){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}
result = factorial(num);
console.log(result);