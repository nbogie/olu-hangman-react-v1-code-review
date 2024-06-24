import Tile from './tile.js'

export default function generateKeys(){
    const qwerty = "qwertyuiopasdfghjklzxcvbnm"
    const keyCharacters =  qwerty.split('');

    return keyCharacters.map(key => new Tile(key));
}