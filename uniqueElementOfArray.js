const names = ['sawom','jannat','mou','tanha','sawom','mou','rodry','jannat','nasim','jannat','mou']

function uniqueElemnts(names){
    var unique = [];
    for(var i of names){
        if(unique.indexOf(i) == -1){
            unique.push(i);
        }
    }
    return unique;
}

var result = uniqueElemnts(names);
console.log(result);