function sumPrint(arr){
    let first = parseInt(arr[0]);
    let second = parseInt(arr[1]);

    let digits = '';
    total = 0;
    for (i = first; i <= second; i++){
        digits += i + ' ';
        total += i;
    }
    
    console.log(digits.trimEnd())
    console.log(`Sum: ${total}`)
}