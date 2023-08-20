function summNumb(a){
   return function oneNumb(b){
    return a + b
   }
}
const result = summNumb(4);
let sum = result(5);
console.log(sum);
