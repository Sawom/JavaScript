var chairwood = 3;
var tablewood = 10;
var bedwood = 50;
var quan=3;
function totalwood(chairwood,tablewood,bedwood){
    cwood = chairwood*quan;
    twood = tablewood*quan;
    bwood = bedwood*quan;
    var total = cwood+twood+bwood;
    return total;
}

var result = totalwood(chairwood,tablewood,bedwood);
console.log(result);