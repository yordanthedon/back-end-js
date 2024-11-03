function sum(arr){
    let sumEven = 0;
    let sumOdd = 0;
    for (let number of arr){
        if (number % 2 == 0){
            sumEven  += number
        } else {
            sumOdd += number
        }
    }
    totalSum = sumEven - sumOdd;
    console.log(totalSum);
}