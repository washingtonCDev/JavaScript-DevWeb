document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value) / 100; // Convertendo para metros
    const peso = parseFloat(document.getElementById('peso').value);

    if (altura && peso) {
        const imc = (peso / (altura * altura)).toFixed(2);
        const resultado = document.getElementById('resultado');

        let categoria = '';

        if (imc < 16) {
            categoria = 'Baixo peso muito grave';
        } else if (imc >= 16 && imc < 17) {
            categoria = 'Baixo peso grave';
        } else if (imc >= 17 && imc < 18.5) {
            categoria = 'Baixo peso';
        } else if (imc >= 18.5 && imc < 25) {
            categoria = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            categoria = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            categoria = 'Obesidade grau I';
        } else if (imc >= 35 && imc < 40) {
            categoria = 'Obesidade grau II';
        } else {
            categoria = 'Obesidade grau III';
        }

        resultado.innerHTML = `<strong>${nome}</strong>, seu IMC é <strong>${imc}</strong>. Categoria: <strong>${categoria}</strong>.`;
        resultado.classList.add('visible');
    }
});
