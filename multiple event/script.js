function alertpara(event){
    alert("YOU HAVE CLICKED PAR" )
}



let paras=document.querySelectorAll('p')
for(let i=0;i<paras.length;i++){
    let para=paras[i]
    para.addEventListener('click',alertpara)
}