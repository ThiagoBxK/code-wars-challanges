function bingo(numbers) {
  const winNumbers = [2, 9, 14, 7, 15];
  const response = winNumbers.every((number) => numbers.includes(number));

  return response ? "WIN" : "LOSE";
}

export default bingo;
