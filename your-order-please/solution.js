function order(words) {
  words = words.split(/\s/g); // Separar por espaços
  words.sort((wordA, wordB) => wordA.match(/[0-9]/) - wordB.match(/[0-9]/)); // Match obtem todos os numeros de 0 a 9
  // Poderia usar /\d/ mais preferi usar /[0-9]/ por ser mais legivel

  return words.join(" ");
}

export default order;
