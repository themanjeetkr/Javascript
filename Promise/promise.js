let firstpromise=new Promise((resolve,reject)=>{
    setTimeout(function saymyname(){
        console.log('MY NAME IS THEMANJEEKR');
    },10);
    resolve(1);
})