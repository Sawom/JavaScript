//ans 4 
var friends = ['mahi','aranna','afzal','hasib','nasim'];
function perfectFriend(friends){
    for(var i of friends){
        if(i.length==5){
            break;
        }
    }
    return i;
}
var result = perfectFriend(friends);
console.log(result);