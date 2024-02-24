Bem vindo aventureiro. Seu objetivo é navegar pelo labirinto e chegar ao ponto final sem tocar em nenhuma parede. Fazer isso irá matá-lo instantaneamente!
Tarefa<br>
Você receberá uma matriz 2D do labirinto e uma série de direções. Sua tarefa é seguir as instruções fornecidas.<br>
Se você chegar ao ponto final antes de todos os seus movimentos terem terminado, você deverá retornar Finish.<br>
Se você atingir alguma parede ou sair da fronteira do labirinto, deverá retornar Dead.<br>
Se você ainda estiver no labirinto depois de usar todos os movimentos, deverá retornar Lost .<br>
A matriz Maze será semelhante a

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]
..com a seguinte chave

      0 = Lugar seguro para caminhar
      1 = Parede
      2 = Ponto inicial
      3 = Ponto Final

direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Regras

- A matriz Maze sempre será quadrada, ou seja, N x N , mas seu tamanho e conteúdo serão alterados de teste para teste.

- As posições de largada e chegada serão alteradas nas provas finais.

- A matriz de direções estará sempre em letras maiúsculas e terá o formato N = Norte, E = Leste, W = Oeste e S = Sul .

- Se você chegar ao ponto final antes de todos os seus movimentos terem terminado, você deverá retornar Finish .

- Se você bater em alguma parede ou sair da borda do labirinto, você deverá retornar Dead .

- Se você ainda estiver no labirinto depois de usar todos os movimentos, você deverá retornar Lost .
