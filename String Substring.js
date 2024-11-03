function findWord (word, text) {

    const isFoundWord = text.toLowerCase().split(' ').includes(word);

    if (isFoundWord) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}