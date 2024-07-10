var largura = parseFloat(prompt('Digite a largura:'));
var cumprimento = parseFloat(prompt('Digite o comprimento:'));

document.write('<h1>O terreno possui ('+calculararea(largura,cumprimento)+') Metros Quadrados</h1>')

function calculararea(largura, cumprimento){
    var area = largura * cumprimento;
    return area;
}
