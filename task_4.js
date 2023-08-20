function Numb(a,b){
    for(let i = a;i<=b;i++){
        console.log(i);
    }
}
setInterval(Numb,1000,5,15);
clearInterval(Numb);