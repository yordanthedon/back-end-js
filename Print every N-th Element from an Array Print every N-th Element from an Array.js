function solve(array, num) {

    let newArr = [];
    
    for (i = 0; i <= array.length - 1; i+=num) {
        newArr.push(array[i])
    }

    return newArr;
}