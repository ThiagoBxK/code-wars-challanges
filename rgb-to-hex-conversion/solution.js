// Transforma numero em hexadecimal
function toHex(num) {
  const table = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

  num = Math.min(Math.max(num, 0), 255);

  const quotient = parseInt(num / 16); // Divide por 16
  const rest = parseInt(num % 16); // Resto da divisão por 16

  return `${table[quotient]}${table[rest]}`;
}

export default toHex;
