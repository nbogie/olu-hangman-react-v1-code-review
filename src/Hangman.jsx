import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";
import { generateHangmanLetters } from "./utils/hangman-logic";

export default function Hangman() {
    const randomWord = getRandomWord()
    const [targetWord, setTargetWord] = useState(randomWord)
    const [guessedLetters, setGuessedLetters] = useState([])
    const [revealedGuesses, setRevealedGuesses] = useState(generateHangmanLetters([], targetWord))
    const [numberOfGuesses, setNumberOfGuesses] = useState(0)

    const missLimit = targetWord.length + 3;
    const isGameLost = guessedLetters.length > missLimit;
    const isGameWon = !revealedGuesses.includes('_');
    const isGameOver = isGameWon || isGameLost;
    
    const keys = generateKeys();

    const renderedKeyboard = keys.map((tile, index) => {
        function handleTileClicked(letter){
            setNumberOfGuesses(currVal => currVal + 1);
            setGuessedLetters(currArr => {
                const updatedOutput = generateHangmanLetters([...currArr, letter], targetWord)
                setRevealedGuesses(updatedOutput)

                return [...currArr, letter]})
        }

        const letterHasBeenGuessed = guessedLetters.includes(tile.letter)

        if (letterHasBeenGuessed || isGameOver){
            tile.isClicked = true;
        }

        return (
            <button key={index} className="tile" onClick={() => {handleTileClicked(tile.letter)}} disabled={tile.isClicked}>
                {tile.letter}
            </button>
        )
    })

    function handleNewGame() {
        setNumberOfGuesses(0);
        setGuessedLetters([]);
        setTargetWord(getRandomWord())
        setRevealedGuesses(generateHangmanLetters([], targetWord))
    }
    return (
        <div className="game">
            <h1>Hangman Game</h1>
            {isGameWon && <h2>You Win!</h2>}
            {isGameLost && !isGameWon && <h2>You Lose: Too many guesses - the word was {targetWord}</h2>}
            <h2 className="revealed-guesses">{revealedGuesses}</h2>
            <h3>Guessed Letters: {guessedLetters}</h3>
            <p>Number of guesses: {numberOfGuesses}</p>
            <div className="keyboard">
                {renderedKeyboard}
            </div>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    );
}
