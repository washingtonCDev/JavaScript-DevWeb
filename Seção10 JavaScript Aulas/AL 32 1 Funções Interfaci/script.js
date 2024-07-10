document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os valores dos campos de entrada
    var largura = parseFloat(document.getElementById('largura').value);
    var cumprimento = parseFloat(document.getElementById('comprimento').value);

    // Verifica se os valores são válidos
    if (isNaN(largura) || isNaN(cumprimento) || largura <= 0 || cumprimento <= 0) {
        alert('Por favor, insira valores válidos e positivos.');
        return;
    }

    // Função para calcular a área
    function calculararea(largura, cumprimento) {
        return largura * cumprimento;
    }

    // Calcula a área
    var area = calculararea(largura, cumprimento);

    // Exibe o resultado na página e mostra a aba
    document.getElementById('resultado').textContent = 'Sua Área Mede ' + area.toFixed(2) + ' m²';
    document.getElementById('resultado-container').style.display = 'block';
});
