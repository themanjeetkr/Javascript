function add(a,b,cb){
    let result=a+b;
    cb(result)
}
add(4,4,function(val){
    console.log('the result is '+val)

})

