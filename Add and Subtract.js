function solve (n1, n2, n3) {
    const sum = (firstNum, secondNum) => firstNum + secondNum;
    const subtract = (firstNum, secondNum) => firstNum - secondNum;
    
    const sumNumber = sum(n1, n2);
    const result = subtract(sumNumber, n3);
    console.log(result)
}