function cadastrar(event) {
    // Não envie o formulário
    event.prevenDefault()
}

function buscar(event) {
    // Buscar pel CEP
    if (event.key == "Enter") {
        alert('apertando tecla')
    } 
   
}