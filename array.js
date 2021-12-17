// Check an Array using isArray, indexOf, includes, concat
const friend = ['mahi', 'afjal', 'arannya','fahim','erin'];
function megaFriend(friend){
   
    if(Array.isArray(friend) == false){
        return 'provide an array. this is not an array';
    }
    var searching = friend[0];
    for( var friends of friend){
        if( friends.length > searching.length ){
            searching = friends;
        }
    }
    return searching;
}
const output = megaFriend(friend);
console.log(output);
if(friend.indexOf('fox') != 0){
    console.log('does not exists');
} else{
    console.log(' Exist');
}
// includes
if(friend.includes('mahi') != 0){
    console.log(' exists');
} 
// concat
const first = [1,2,3,4,5];
const second = [,6,7,8,9];
const full = first+second;
console.log(full);
