const line = 'amar sonar bangla ,ami tomay valobashi';
// split 
const word = line.split(' ');
console.log(word);
// slice 
const wordSlice = line.slice(4, 10);
console.log(wordSlice);
const anStr = line.substring(1 ,6);
console.log(anStr);
// concat
const first = 'dhaka ';
const second = 'city ';
const full = first.concat(second).concat(' trafic jam');
console.log(full);
// join 
const letter = ['a','b','c','d'];
const alljoin = letter.join('');
console.log(alljoin);