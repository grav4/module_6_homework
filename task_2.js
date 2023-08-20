function PrimeNum(number){
    for(let i = 2;i<number;i++){
        if(number % i == 0 && number < 1000){
            console.log(number + "- is not Prime number");
            break;
        }
        else console.log(number + " - is  Prime number");
        break;
    }
}
PrimeNum(6);