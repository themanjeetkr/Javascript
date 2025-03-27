// let num=[10,20,34,45,67]
// let evenarray=arr.filter((number)=>{
//     if(number%2===0){
//         return true
//     }
//     else{
//         return false;
//     }
// })
// console.log(evenarray)


let arr=[1,2,3,'manjeet','hello']
let ans= arr.filter((number)=>{
    if(typeof(number)=='string')
        return true
    else{
        return false
    }
    
})
console.log(ans)