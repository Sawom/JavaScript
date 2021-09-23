// ans 2
var shirt = 100;
var pant = 200;
var shoe = 500;
var shirtQuantity = 5;
var pantQuantity = 2;
var shoeQuantity = 4;

function  totalSales(shirtQuantity,pantQuantity,shoeQuantity){
    var shirtSale =  shirt*shirtQuantity;
    var pantSale =  pant*pantQuantity;
    var shoeSale =  shoe*shoeQuantity;
    var total = shirtSale+pantSale+shoeSale;
return total;
}
var result = totalSales(shirtQuantity,pantQuantity, shoeQuantity);
console.log(result)