function checkVowel(word) {
    let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    
    if (vowels.includes(word[0])) {
        console.log(`სიტყვა იწყება ხმოვანით, რომელიც არის  ${word[0]}`);
    } else {
        console.log (` სიტყვა არ იწყება ხმოვანით, რადგან ის არის ${word[0]}`);
    }
}


