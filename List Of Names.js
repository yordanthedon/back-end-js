function solve (array) {
    const sortedArr = array.sort((e1, e2) => {
        return e1.localeCompare(e2);
    })

    for (index = 0; index <= sortedArr.length - 1; index++) {
        console.log(`${index + 1}.${sortedArr[index]}`)
    }
}