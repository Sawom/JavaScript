var ary = [36,26,38,646,69,99];
var max = ary[0];

for(var i=0;i<ary.length;i++){
    if(ary[i]>max){
        max=ary[i];
    }
}
console.log(max);