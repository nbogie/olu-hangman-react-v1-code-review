/**
 *
 * @param {string[]} guessedLetters
 * @param {string} targetWord
 * @returns {number}
 */
export default function determineMistakes(guessedLetters, targetWord) {
    // return the number of guessed letters that are not in the target word
    let mistakeCount = 0;

    for (const letter of guessedLetters) {
        const letterIsMistake = !targetWord.includes(letter);
        if (letterIsMistake) {
            mistakeCount++;
        }
    }

    return mistakeCount;
}
