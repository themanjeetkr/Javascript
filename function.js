// function add(a,b){
//     console.log(a+b)
// }
// add(5,10)
// add(5,10)
// add(5,10)


// 

function addnumber(){
    let ans=0;
    for(let i=0;i<arguments.length;i=i+1){
        ans=ans+arguments[i]
        return ans
    }
}
let result=addnumber(10,12,14,14)
console.log(result)
//  spread operator 