function move(maze, currentPosition, direction) {
  let [row, column] = currentPosition;
  let status = null;

  try {
    // Direções
    if (direction === "N") {
      --row;
    } else if (direction === "S") {
      ++row;
    } else if (direction === "E") {
      ++column;
    } else if (direction === "W") {
      --column;
    }

    // Verifica se o jogador morreu ou ganhou o jogo
    if (maze[row][column] === 1 || maze[row][column] === undefined)
      status = "Dead";
    else if (maze[row][column] === 3) status = "Finish";

    return {
      status,
      currentPosition: [row, column],
    };
  } catch (err) {
    return {
      status: "Dead",
      currentPosition: [row, column],
    };
  }
}

function mazeRunner(maze, directions) {
  // Posição inicial
  const startColumn = maze.findIndex((val) => val.includes(2));
  const startRow = maze[startColumn].findIndex((val) => val === 2);

  // Posição inicial e objetivo final do jogador
  let currentPosition = [startColumn, startRow];
  let status = null;

  for (const direction of directions) {
    // Caso ja tenha ganho ou perdido ele termina
    if (status !== null) break;

    const obj = move(maze, currentPosition, direction);

    currentPosition = obj.currentPosition;
    status = obj.status;
  }

  return status || "Lost";
}

export default mazeRunner;
