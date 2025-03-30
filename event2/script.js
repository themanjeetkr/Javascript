
// function  changetext(){
// let fpara=document.getElementById('fpara')
// fpara.textContent="themanjeetkr"
// }
// let fpara=document.getElementById('fpara')
// fpara.addEventListener('click',changetext)

let fanchor=document.getElementById('fanchor')
fanchor.addEventListener('click',changetext)
function changetext(event){
    event.preventDefault();
   fanchor.innerText='hello'
}
