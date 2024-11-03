function grade(number){
    if (number < 3){
        console.log(`Fail (${number})`)
    } else if (number >= 3 && number < 3.5) {
        console.log(`Poor (${number.toFixed(2)})`)
    } else if (number >= 3.5 && number < 4.5) {
        console.log(`Good (${number.toFixed(2)})`)
    } else if (number >= 4.5 && number < 5.5) {
        console.log(`Very good (${number.toFixed(2)})`)
    } else {
        console.log(`Excellent (${number.toFixed(2)})`)
    }
}