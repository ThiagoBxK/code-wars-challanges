function spinWords(string) {
  string = string
    .split(/\s/)
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    );

  return string.join(" ");
}

export default spinWords;
