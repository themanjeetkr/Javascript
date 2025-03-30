function alertpara(event){
    if(event.target.nodeName=='SPAN'){
        alert("YOU HAVE CLICKED PARA" +event.target.textContent)
    }
   
}



// let paras=document.querySelectorAll('p')
// for(let i=0;i<paras.length;i++){
//     let para=paras[i]
//     para.addEventListener('click',alertpara)
// // }
// function message(){
//     alert("")
// }
 let mydiv=document.getElementById('wrapper')
 mydiv.addEventListener('click',alertpara)