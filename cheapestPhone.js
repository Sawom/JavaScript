var phones = [
    {name: 'samsung galaxy',price:30000,camera:16,ram:6,rom:64},
    {name: 'oppoA15',price:26000,camera:18,ram:6,rom:128},
    {name: 'redmi 9',price:19000,camera:13,ram:4,rom:64},
    {name: 'one plus',price:35000,camera:20,ram:6,rom:128},
    {name: 'real me c12',price:21000,camera:12,ram:4,rom:64}
]

var cheapest = phones[0];
for(var i of phones){
    if(i.price < cheapest.price){
        cheapest = i;
    }
}
console.log(cheapest);