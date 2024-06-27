document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var altura = parseInt(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

var alt = altura / 100;
var massa = peso / (alt * alt);

var categoria;

if (massa < 16) {
    categoria = 'Baixo peso muito grave';
} else if (massa >= 16 && massa < 17) {
    categoria = 'Baixo peso grave';
} else if (massa >= 17 && massa < 18.5) {
    categoria = 'Baixo peso';
} else if (massa >= 18.5 && massa < 25) {
    categoria = 'Peso normal';
} else if (massa >= 25 && massa < 30) {
    categoria = 'Sobrepeso';
} else if (massa >= 30 && massa < 35) {
    categoria = 'Obesidade grau I';
} else if (massa >= 35 && massa < 40) {
    categoria = 'Obesidade grau II';
} else {
    categoria = 'Obesidade grau III';
}

var resultado = document.getElementById('resultado');
    resultado.innerHTML = nome + ', seu IMC é ' + massa.toFixed(2) + '. Categoria: ' + categoria;
});