export default function generateKeys() {
    const qwerty = "qwertyuiopasdfghjklzxcvbnm";
    return qwerty.split("").sort();
}
