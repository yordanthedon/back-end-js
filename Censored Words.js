function solve(sentence, word) {
    let replacement = '*'.repeat(word.length);
    
    while (sentence.indexOf(word) !== -1) {
        sentence = sentence.replace(word, replacement);
    }
    
    console.log(sentence);
}