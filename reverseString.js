const letter = 'al fateha'

function reverseString(letter){
    reverse = '';
    for(var i of letter){
        reverse = i+reverse;
    }
    return reverse;
}

var result = reverseString(letter);
console.log(result);