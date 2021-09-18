var country = ['Afghanistan','Bangladesh','Bhutan','India'];
console.log(country);
country.push('Maldives');
country.push('Nepal');
country.push('Sri Lanka');
console.log(country);

console.log("\nprint by loop: ");
for(var i=0;i<country.length;i++){
    var sarc = country[i];
    console.log(sarc);
}

console.log(country.indexOf('Bangladesh'));
console.log(country.indexOf('Sri Lanka'));
country.pop();
country.pop();
country.pop();
country.pop();
console.log('after poping = ',country);