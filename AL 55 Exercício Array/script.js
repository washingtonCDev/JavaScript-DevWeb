var objetos = Array('Cadeira', 'Impressora', 'Garfo')

function adicionar() {
    var texto = document.getElementById('texto').value.trim();
    if (texto === null || texto === "") {
        alert('Valor Inválido. Digite algo.');
    } else if (objetos.includes(texto)) {
        alert('Objeto já foi adicionado.');
    } else {
        objetos.push(texto);
    }
    console.log(objetos);
    document.getElementById('texto').value = '' 
}

function ordenar() {
    objetos.sort();
    console.log(objetos);
}