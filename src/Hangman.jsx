import { useState } from "react";
import KeyboardReact from "react-simple-keyboard";
import 'react-simple-keyboard/build/css/index.css'
import getRandomWord from "./utils/get-random-word";

export default function Hangman() {
    const [guessedLetters, setGuessedLetters] = useState()
    const [targetWord, setTargetWord] = useState(getRandomWord());
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);

    function handleKeyPress(button) {
        console.log("button pressed: ", button)
    }
    return (
        <div>
            <h1>Hangman Game</h1>
            <h2>Output area</h2>
            <h2>Number of guesses</h2>
            <KeyboardReact onKeyPress={handleKeyPress} />
        </div>
    );
}
