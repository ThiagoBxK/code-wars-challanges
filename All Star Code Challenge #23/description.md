## **Desafio All Star Code #23**

Existe um certo jogo multijogador onde os jogadores são avaliados por mérito no final do jogo. Os jogadores são classificados de acordo com um sistema de pontuação interno que os jogadores não veem.
<br><br>
Você descobriu a fórmula do sistema de pontuação!
<br><br>
Crie uma função chamada scoring()que pega um array de objetos Player e retorna um array de nomes de jogadores, em ordem decrescente de pontuação (a pontuação mais alta é o índice 0, a segunda mais alta é o índice 1, etc.).<br><br>

A pontuação de cada jogador é calculada da seguinte forma:<br>

* Cada morte normal vale 100 pontos
* Cada assistência vale 50 pontos
* Cada ponto de dano causado vale 0,5 pontos
* Cada ponto de cura realizado vale 1 ponto
* A sequência de mortes mais longa vale 2 ^ N, onde N é o número de mortes da sequência
* As mortes ambientais valem 500 pontos (estes são contados separadamente das mortes normais)
* Para cada uma das estatísticas acima, um objeto Player contém um respectivo par "chave:valor". Todos os valores, exceto o 'nome', são inteiros.

```
var player1 = {
  name: "JuanPablo",
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1
}
var player2 = {
  name: "ProfX",
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0
}
scoring([player1, player2]); 
//["JuanPable","ProfX"]
// Scores of 3216 and 2701, respectively.
```

Nota:
Suponha que o array de entrada SEMPRE terá um objeto Player construído corretamente (sem chaves ou valores ausentes)
Os nomes não conterão caracteres incomuns nem serão repetidos (os nomes são únicos)
Os jogadores com a mesma pontuação devem ser classificados pela ordem em que aparecem no array
Para simplificar, para uma sequência de mortes de 0, o cálculo da sequência de mortes produzirá 1 (ou 2 0 ) pontos
