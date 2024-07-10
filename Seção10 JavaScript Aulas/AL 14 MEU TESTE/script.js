var salarioChefe = prompt('Salario do Chefe: ');
var salario = prompt('Digite Seu Salario: ');

var aumento = salarioChefe > salario ? "Você Receberá Aumento" : "Você Não Receberá Aumento";

document.write('<h1>Olá Denis,'+aumento+'</h1>');

 // Limpeza de variáveis
 salarioChefe = null;
 salario = null;
 aumento = null;

 // Sugestão de função para maior controle de limpeza
 function limparMemoria() {
     delete window.salarioChefe;
     delete window.salario;
     delete window.aumento;
 }

 // Chamar a função para limpar memória
 limparMemoria();