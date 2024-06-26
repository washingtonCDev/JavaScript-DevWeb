var salario = prompt('Digite seu salario');
var salarioboss = prompt('Digite o salario do boss'); 

if (salario > salarioboss){
    document.write('<h1>Você Está Ganhando Bem Amigo</h1>');
} 
else {
    document.write('<h1>Você Precisa de um Aumento</h1>');
}