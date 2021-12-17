const product = [
    'lenovo laptop 125xc',
    'Asus Laptop 306jk',
    'AJM primo r15 Laptop',
    'Asus Ymax 350k',
    'MAc book pro Laptop',
    'lapTop lenovo laptop 125xc',
    'Asus Laptop 306kx',
    'laPTOP mobile phone primo',
    'AJM primo r154 Laptop',
    'asus primo 51l LAPTOP'
]
const searching = 'LAPTOP';
const output = [];
console.log('by index of........');
for(laptop of product){
    if(laptop.toLowerCase().indexOf(searching.toLowerCase()) != -1 ){
        output.push(laptop);
    }
}
console.log(output);

const output1 = [];
console.log('by includes.......');
for(laptop of product){
    if(laptop.toLowerCase().includes(searching.toLowerCase()) !=0){
        output1.push(laptop);
    }
}
console.log("output1 = \n",output1);

const output2 = [];
console.log('starts with.......');
for(laptop of product){
    if(laptop.toLowerCase().startsWith(searching.toLowerCase()) !=0){
        output2.push(laptop);
    }
}
console.log("output2 = \n",output2);

const output3 = [];
console.log('ends with.......');
for(laptop of product){
    if(laptop.toLowerCase().endsWith(searching.toLowerCase()) !=0){
        output3.push(laptop);
    }
}
console.log("output3 = \n",output3);