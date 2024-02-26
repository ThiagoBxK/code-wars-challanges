Numa fábrica, uma impressora imprime etiquetas para caixas. Para um tipo de caixa a impressora tem que usar cores que, por uma questão de simplicidade, são nomeadas com letras de a to m.

As cores utilizadas pela impressora são registradas em uma sequência de controle. Por exemplo, uma string de controle "boa" significaria aaabbbbhaijjjmque a impressora usou três vezes a cor a, quatro vezes a cor b, uma vez a cor h e uma vez a cor a...

Às vezes há problemas: falta de cores, mau funcionamento técnico e uma sequência de controle "ruim" é produzida, por exemplo, aaaxbbbbyyhwawiwjjjwwmcom letras que não são de a to m.

Você tem que escrever uma função printer_errorque, dada uma string, retornará a taxa de erros da impressora como uma string representando um racional cujo numerador é o número de erros e o denominador o comprimento da string de controle. Não reduza esta fração a uma expressão mais simples.

A string tem comprimento maior ou igual a um e contém apenas letras de aaté z.

```
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
```
