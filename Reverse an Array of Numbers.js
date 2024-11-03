function reverseArr(n, array){
    let newArr = array.slice(0, n);
    let reverse = newArr.reverse();
    console.log(reverse.join(' '))
}