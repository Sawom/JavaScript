var miles = 22;

function animals(miles){
    var first10= 10;
    var second10= 50;
    var third10= 100;
    
    if(miles<=10){
        var total = miles*first10; 
    }else if(miles<=20){
        var firstDensity = 10*first10;
        var restMiles = miles - 10;
        var secondPart =  restMiles * second10;
        var total = firstDensity + secondPart;
    }else{
        var firstDensity = 10*first10;
        var secondDensity = 10*second10;
        var restMiles = miles - 20;
        var thirdPart =  restMiles * third10;
        var total = firstDensity+secondDensity+thirdPart;
    }
    return total;
}
result = animals(miles)
console.log(result);