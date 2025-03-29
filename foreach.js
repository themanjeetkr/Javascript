let arr=[19,2,3,1,3]
function getsum(arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element
        
    });
    return sum;
}
let totalsum=getsum(arr);
console.log(totalsum)