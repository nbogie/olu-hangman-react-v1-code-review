/**
 *
 * @param {string[]} guessedLetters
 * @param {string} targetWord
 * @returns {number}
 */
export default function countNumberOfMistakes(guessedLetters, targetWord) {

    function isNotInTargetWord(letter){
        return !targetWord.includes(letter);
    }
    
    // return the number of guessed letters that are not in the target word
    return guessedLetters.filter(isNotInTargetWord).length;
}
