function countCorrectCharacters(correctWord, guess) {
  if (correctWord.length !== guess.length) throw Error("Size does not match");

  let corrected = 0;

  for (let i = 0; i < correctWord.length; i++) {
    if (guess[i] === correctWord[i]) corrected++;
  }

  return corrected;
}

export default countCorrectCharacters;
