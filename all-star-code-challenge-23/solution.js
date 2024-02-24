// Código pode ser um pouco lento, mais é simples de dar manutenção

// Sistema de distribuição de pontos
const scoringSystem = {
  normKill: 100, // Cada morte normal vale 100 pontos
  assist: 50, // Cada assistência vale 50 pontos
  damage: 0.5, // Cada ponto de dano causado vale 0,5 pontos
  healing: 1, // Cada ponto de cura realizado vale 1 ponto
  envKill: 500, // As mortes ambientais valem 500 pontos (estes são contados separadamente das mortes normais)
  getStreakScore(streak) {
    return Math.pow(2, streak); // A sequência de mortes mais longa vale 2 ^ N, onde N é o número de mortes da sequência
  },
};

// Calcula a pontuação do usuário conforme o sistema de distribuição de pontuação
const getPlayerScore = (player) => {
  let score = 0;

  Object.keys(scoringSystem).forEach((key) => {
    if (player[key]) score += player[key] * scoringSystem[key];
  });

  // Pontuação por sequencia de kills
  score += scoringSystem.getStreakScore(player.streak);

  return { ...player, score };
};

// Retorna o jogador com maior pontuação em ordem decrescente
function scoring(array) {
  array.sort((playerA, playerB) => {
    // Obtenha a pontuação de cada jogador individualmente
    playerA = getPlayerScore(playerA);
    playerB = getPlayerScore(playerB);

    if (playerA.score > playerB.score) return -1;
    else if (playerA.score < playerB.score) return 1;

    return 0;
  });

  // Retorna apaenas o nome de usuario
  return array.map((player) => player.name);
}

export default scoring;
