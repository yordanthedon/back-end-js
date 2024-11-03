function sumDigits(number){
    let newNumber = number
    let totalSum = 0;
    while (newNumber > 0){
        let digit = newNumber % 10;
        totalSum += digit;
        newNumber = Math.floor(newNumber / 10);
    }
    console.log(totalSum);
}