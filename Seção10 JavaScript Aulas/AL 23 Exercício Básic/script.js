/*1) Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
usuário. Considere os seguintes critérios:
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados
para o usuário. */

var val1 = prompt('Digite a idade da Pessoa: ');
val1 = parseInt(val1);

if (val1 <= 15) { document.write('<h1>Criança</h1>'); }
else if (val1 > 15 && val1 <= 30) { document.write('<h1>Jovem</h1>'); }
else if (val1 > 30 && val1 < 60) { document.write('<h1>Adulto</h1>'); }
else if (val1 >= 60) { document.write('<h1>Idoso</h1>'); }
else { document.write('<h1>Informação Errada</h1>'); }