var cart = [
    {product:'shirt',price: 190 , quantity:3},
    {product:'pant',price: 250 , quantity:2},
    {product:'shock',price: 50 , quantity:2},
    {product:'chips',price: 15 , quantity:14},
    {product:'phone',price: 26000 , quantity:1}
];
var total = 0;
for(var i of cart){
    total = total+ i.price*i.quantity;
}
console.log(total);