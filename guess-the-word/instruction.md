Considere um jogo em que o jogador deve adivinhar uma palavra-alvo. Tudo o que o jogador sabe é o comprimento da palavra alvo.

Para ajudá-los em seu objetivo, o jogo aceitará palpites e retornará a quantidade de letras que estiverem na posição correta.

Escreva um método que, dada a palavra correta e o palpite do jogador, retorne esse número.

Por exemplo, aqui está um possível processo de pensamento para alguém tentando adivinhar a palavra “cachorro”:

```
countCorrectCharacters("dog", "car"); //0 (No letters are in the correct position)
countCorrectCharacters("dog", "god"); //1 ("o")
countCorrectCharacters("dog", "cog"); //2 ("o" and "g")
countCorrectCharacters("dog", "cod"); //1 ("o")
countCorrectCharacters("dog", "bog"); //2 ("o" and "g")
countCorrectCharacters("dog", "dog"); //3 (Correct!)
```

O chamador deve garantir que a palavra adivinhada tenha sempre o mesmo comprimento da palavra correta, mas como poderia causar problemas se não fosse o caso, é necessário verificar esta eventualidade:

`//Throw an error if the two parameters are of different lengths.`

Você pode assumir, entretanto, que os dois parâmetros estarão sempre no mesmo caso.
