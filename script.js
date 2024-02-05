const button = document.getElementById('botao')


function numberSorting() {
    const min = Math.ceil(document.getElementById('input-esquerdo').value)
    const max = Math.floor(document.getElementById('input-direito').value)
    const result = document.querySelector('.input-answer')

    const finalValue = Math.floor(Math.random() * (max - min + 1)) + min;

    result.value = finalValue
}


button.addEventListener('click', numberSorting);