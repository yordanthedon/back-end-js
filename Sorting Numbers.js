function sortNumbers (array) {
    array.sort((e1,e2) => {
        return e1 - e2;
    })

    let resultedArray = [];
    const length = array.length;

    for (let index = 0; index <= length -1; index++) {
        if (index % 2 == 0) {
            resultedArray.push(array.shift());
        } else {
            resultedArray.push(array.pop());
        }
    }

    return resultedArray;
}