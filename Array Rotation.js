function solve (array, num) {

    for (let i = 1; i <= num; i++) {
        let firstEl = array.shift();
        array.push(firstEl)
    }

    console.log(array.join(' '));
}