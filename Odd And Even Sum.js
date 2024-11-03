function oddEven(number){
    let oddSum = 0;
    let evenSum = 0;

    let numStr = number.toString();

    for (let digit of numStr){
        let currentDigit = Number(digit);
        if (currentDigit % 2 === 0){
            evenSum += currentDigit
        } else {
            oddSum += currentDigit
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum }`)
}