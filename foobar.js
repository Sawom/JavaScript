var num = 40;

for(var i=0;i<num;i++){
    if(i%3==0 && i%5==0){
        console.log("fooBar");
    }else if(i%3==0){
        console.log("foo");
    }else if(i%5==0){
        console.log("bar");
    }else{
        console.log(i);
    }
}