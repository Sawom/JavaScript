var country = ['Bangladesh','Bhutan','India','Maldives','Afghanistan','Nepal','Srilanka'];
var longest = country[0];
for(var i of country){
    if(i.length>longest.length){
        longest = i;
    }
}
console.log(longest);