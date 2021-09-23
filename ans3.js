// ans3
var shirtQuantity = 205;

function deliveryCost(shirtQuantity){
    var first100 = 100;
    var second100 = 80;
    var restShirt = 50;
    
    if(shirtQuantity<=100){
        var total = first100*shirtQuantity;
    }
    else if(shirtQuantity<=200){
        var first100cost = 100*first100;
        var restQuantity = shirtQuantity-100;
        var restCost =  restQuantity*second100;
        total = first100cost+restCost;
    }else{
        var first100cost = 100*first100;
        var second100cost = 100*second100;
        restQuantity = shirtQuantity-200;
        restCost =  restQuantity*restShirt;
        total = first100cost+second100cost+restCost;
    }
return total;
}
var result = deliveryCost(shirtQuantity);
console.log(result);