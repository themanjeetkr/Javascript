function subtract(a,b,cb){
    let result=a-b;
   cb(result);
}
function showresult(val){
    console.log(val)
}


subtract(4,24,showresult)



