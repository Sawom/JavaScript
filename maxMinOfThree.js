var num1 = 626;
var num2 = 929;
var num3 = 69;

function maximum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1,"  is maximum ");
    }else if(num2>num1 && num2>num3){
        console.log(num2," is maximum ");
    }else{
        console.log(num3," is maximum ");
    }
}

function minimum(num1,num2,num3){
    if(num1<num2 && num1<num3){
        return num1;
    }else if(num2<num1 && num2<num3){
        return num2;
    }else{
        return num3;
    }
}

maximum(num1,num2,num3);
var min = minimum(num1,num2,num3);
console.log(min," is minimum");