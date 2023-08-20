function filterNumbers(){
    let EvenPush = [];
    let OddPush = [];
    let arr = [2,3,5,8,10];
    let size_even = 0;
    for( let i = 0;i < arr.length;i++){
      if(arr[i] % 2 == 0){
        size_even += 1;
      }
    }
     let size_odd = arr.length - size_even;
    console.log(size_odd + ' - amount of odd numbers');
    console.log(size_even + ' - amount of even numbers');
}
filterNumbers();