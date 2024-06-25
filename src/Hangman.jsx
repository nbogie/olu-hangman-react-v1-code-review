import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";
import { generateHangmanLetters } from "./utils/hangman-logic";
import determineMistakes from "./utils/determine-mistakes";

export default function Hangman() {
    const randomWord = getRandomWord();
    const [targetWord, setTargetWord] = useState(randomWord);
    const [guessedLetters, setGuessedLetters] = useState([]);
    let revealedGuesses = generateHangmanLetters(guessedLetters, targetWord);
    let numberOfMistakes = determineMistakes(guessedLetters, targetWord)

    const missLimit = targetWord.length;
    const isGameLost = numberOfMistakes > missLimit;
    const isGameWon = !revealedGuesses.includes("_");
    const isGameOver = isGameWon || isGameLost;

    const keys = generateKeys();

    const renderedKeyboard = keys.map((tile, index) => {
        function handleTileClicked(letter) {
            numberOfMistakes = determineMistakes(guessedLetters, targetWord)
            setGuessedLetters((currArr) => {
                revealedGuesses = generateHangmanLetters(
                    [...currArr, letter],
                    targetWord,
                );

                return [...currArr, letter];
            });
        }

        const letterHasBeenGuessed = guessedLetters.includes(tile.letter);

        if (letterHasBeenGuessed || isGameOver) {
            tile.isClicked = true;
        }

        return (
            <button
                key={index}
                className="tile"
                onClick={() => {
                    handleTileClicked(tile.letter);
                }}
                disabled={tile.isClicked}
            >
                {tile.letter}
            </button>
        );
    });

    function handleNewGame() {
        numberOfMistakes = 0
        setGuessedLetters([]);
        setTargetWord(getRandomWord());
        revealedGuesses = generateHangmanLetters([], targetWord);
    }
    return (
        <div className="game">
            <h1>Hangman Game</h1>
            {isGameWon && <h2>You Win!</h2>}
            {isGameLost && !isGameWon && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {!isGameOver ? revealedGuesses : targetWord}
            </h2>
            <h3>Guessed Letters: {guessedLetters}</h3>
            <p>Number of mistakes: {numberOfMistakes}</p>
            <div className="keyboard">{renderedKeyboard}</div>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    );
}
