function fatorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * fatorial(n - 1);
}

function combinacao(n, k) {
    return fatorial(n) / (fatorial(k) * fatorial(n - k));
}

function probabilidadeLoteria(n, k) {
    return 1 / combinacao(n, k);
}

function gerarNumerosLoteria(quantidade, min, max) {
    const numeros = new Set();

    while (numeros.size < quantidade) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        numeros.add(numeroAleatorio);
    }

    return Array.from(numeros).sort((a, b) => a - b);
}

function frequenciaNumeros(resultados) {
    const frequencia = {};

    resultados.forEach(sorteio => {
        sorteio.forEach(num => {
            if (!frequencia[num]) frequencia[num] = 0;
            frequencia[num]++;
        });
    });

    return frequencia;
}

function gerarNumerosComBaseNaFrequencia(frequencias, quantidade) {
    const numerosPesados = [];

    Object.entries(frequencias).forEach(([num, freq]) => {
        for (let i = 0; i < freq; i++) {
            numerosPesados.push(Number(num));
        }
    });

    const numerosSelecionados = new Set();
    while (numerosSelecionados.size < quantidade) {
        const indiceAleatorio = Math.floor(Math.random() * numerosPesados.length);
        numerosSelecionados.add(numerosPesados[indiceAleatorio]);
    }

    return Array.from(numerosSelecionados).sort((a, b) => a - b);
}

document.getElementById('gerarNumerosBtn').addEventListener('click', function() {
    const quantidade = 6;
    const min = 1;
    const max = 60;

    // Exemplo de resultados anteriores
    const resultadosAnteriores = [
        [5, 10, 15, 20, 25, 30],
        [6, 12, 18, 24, 30, 36],
        [7, 14, 21, 28, 35, 42],
        // Adicione mais resultados conforme necessário
    ];

    // Calcular frequências
    const frequencias = frequenciaNumeros(resultadosAnteriores);

    // Gerar números com base em frequências
    const numerosSorteados = gerarNumerosComBaseNaFrequencia(frequencias, quantidade);

    document.getElementById('resultado').textContent = `Números sorteados: ${numerosSorteados.join(', ')}`;
});

// Exibir probabilidade da Mega-Sena
const probabilidade = probabilidadeLoteria(60, 6);
console.log(`A probabilidade de ganhar na Mega-Sena é: 1 em ${Math.round(1 / probabilidade).toLocaleString()}`);
