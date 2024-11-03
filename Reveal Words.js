function revealWord (words, sentence) {
    const allWords = words.split(', ');

    for (const word of allWords) {
        let textForReplace = '*'.repeat(word.length);

        sentence = sentence.replace(textForReplace, word)
    }
    
    console.log(sentence)
}