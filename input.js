// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
   
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });

const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);