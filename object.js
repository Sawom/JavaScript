var computer = {
    ram : '16gb',
    harddisk : '1 tb',
    ssd: '256 gb',
    coolingfan: 2,
    motherboard: 'gigabyte'
}
console.log(computer);
// get object value
var pcSsd= computer.ssd;
console.log(pcSsd);
var fan = computer.coolingfan;
console.log(fan);
// set object value
computer.coolingfan = 5;
computer.harddisk = '2 tb';
console.log(computer);