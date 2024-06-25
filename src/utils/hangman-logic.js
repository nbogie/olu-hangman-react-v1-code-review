/**
 *
 * @param {string[]} guessedLetters
 * @param {string} wordToGuess
 * @returns {string[]}
 *
 */
const generateHangmanLetters = (guessedLetters, wordToGuess) => {
    return wordToGuess
        .split("")
        .map((letter) => displayCharacterForLetter(letter, guessedLetters));
};

export function displayCharacterForLetter(letter, guessedLetters) {
    return guessedLetters.includes(letter) ? letter : "_";
}

export { generateHangmanLetters };
