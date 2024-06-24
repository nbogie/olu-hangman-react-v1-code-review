import { useState } from "react";
import getRandomWord from "./utils/get-random-word";
import generateKeys from "./utils/keyboard";

export default function Hangman() {
    const [guessedLetters, setGuessedLetters] = useState([]) // string[]
    const [targetWord, setTargetWord] = useState(getRandomWord()); // string
    const [numberOfGuesses, setNumberOfGuesses] = useState(0); // int
    const keys = generateKeys();
    const renderedKeyboard = keys.map((tile, index) => {
        return (
            <button key={index} className="tile" >
                {tile}
            </button>
        )
    })

    return (
        <div>
            <h1>Hangman Game</h1>
            <h2>Output area</h2>
            <h2>Number of guesses</h2>
            <div className="keyboard">
                {renderedKeyboard}
            </div>
        </div>
    );
}
