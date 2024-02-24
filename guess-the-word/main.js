import countCorrectCharacters from "./solution.js";

console.log(countCorrectCharacters("dog", "car")); //0 (No letters are in the correct position)
console.log(countCorrectCharacters("dog", "god")); //1 ("o")
console.log(countCorrectCharacters("dog", "cog")); //2 ("o" and "g")
console.log(countCorrectCharacters("dog", "cod")); //1 ("o")
console.log(countCorrectCharacters("dog", "bog")); //2 ("o" and "g")
console.log(countCorrectCharacters("dog", "dog")); //3 (Correct!)
