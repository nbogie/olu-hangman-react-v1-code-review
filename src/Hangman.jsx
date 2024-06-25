//@ts-check
import { useEffect, useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";
import { generateHangmanLetters } from "./utils/hangman-logic";
import countNumberOfMistakes from "./utils/count-number-of-mistakes";

export default function Hangman() {
    const [targetWord, setTargetWord] = useState("helloworld");
    const [guessedLetters, setGuessedLetters] = useState([]);

    useEffect(() => {
        const randomWord = getRandomWord();
        setTargetWord(randomWord);
    }, []);

    /** An array of letters and _ characters representing blah */
    const revealedGuesses = generateHangmanLetters(guessedLetters, targetWord);
    const numberOfMistakes = countNumberOfMistakes(guessedLetters, targetWord);

    const missLimit = targetWord.length;

    function calculateWinState() {
        if (!revealedGuesses.includes("_")) {
            return "win";
        }

        if (numberOfMistakes > missLimit) {
            return "loss";
        }

        return "in-progress";
    }

    const winState = calculateWinState();

    const keyLetters = generateKeys();

    function handleTileClicked(letter) {
        setGuessedLetters((currArr) => {
            return [...currArr, letter];
        });
    }

    const renderedKeyboard = keyLetters.map((letter, index) => {
        const letterHasBeenGuessed = guessedLetters.includes(letter);

        const isDisabled = letterHasBeenGuessed || winState !== "in-progress";

        return (
            <button
                key={index}
                className="tile"
                onClick={() => {
                    handleTileClicked(letter);
                }}
                disabled={isDisabled}
            >
                {letter}
            </button>
        );
    });

    function handleNewGame() {
        setGuessedLetters([]);
        setTargetWord(getRandomWord());
    }
    return (
        <div className="game">
            <h1>Hangman Game</h1>
            {winState === "win" && <h2>You Win!</h2>}
            {winState === "loss" && <h2>You lose, too many guesses</h2>}
            <h2 className="revealed-guesses">
                {winState === "in-progress" ? revealedGuesses : targetWord}
            </h2>
            <h3>Guessed Letters: {guessedLetters}</h3>
            <p>Number of mistakes: {numberOfMistakes}</p>
            <div className="keyboard">{renderedKeyboard}</div>
            <button onClick={handleNewGame}>New Game</button>
        </div>
    );
}
