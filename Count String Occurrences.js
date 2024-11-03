function search(words, searched){
    let newWords = words.split(' ');
    let count = 0;

    for (let word of newWords){
        if (word == searched){
            count += 1;
        }
    }
    console.log(count);
}