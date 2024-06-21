/**
 * 
 * @param {string[]} guessedLetters
 * @param {string} wordToGuess
 * @returns {string[]} 
 * 
 */
const generateHangmanLetters = (guessedLetters, wordToGuess) => {
    
    const results = []

    for (let i = 0; i < wordToGuess.length; i++){
        const currentLetter = wordToGuess[i]
        if (guessedLetters.includes(currentLetter)){
            results.push(currentLetter)
        } else{
            results.push("_");
        } 
    }

    return results
};

export {generateHangmanLetters}