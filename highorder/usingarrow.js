// function add( a,b,cb){
//     let result=a+b
// cb(result)
// }

// // using arrow function 
// add(2,3,(val)=>console.log(val))
// add(4,5,(res)=>console.log(res))

function multiply(a,b,cb){
    let reult=a*b;
    cb(reult);
}
multiply(2,3,val=>console.log(val))