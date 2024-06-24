import wordlist from "./wordlist";

export default function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordlist.length)
    return wordlist[randomIndex];
}