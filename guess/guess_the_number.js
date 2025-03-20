let number=40;
let guess=0;
let count=0;
do{
    guess=parseInt(prompt("guess the number "))
    if(guess==number){
        console.log(count);
        alert('winner' )
        alert(count)
        break;
    }
    count++;
}
    while(guess!=0)


