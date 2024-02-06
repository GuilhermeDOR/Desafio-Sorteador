const button = document.getElementById('botao')
const xButton = document.querySelector('.close-button')
const mask = document.querySelector('.mask')
const result = document.querySelector('.input-answer')



function numberSorting() {
    const min = Math.ceil(document.getElementById('input-esquerdo').value)
    const max = Math.floor(document.getElementById('input-direito').value)


    const finalValue = Math.floor(Math.random() * (max - min + 1)) + min;
    
    mask.style.visibility = 'visible';
    result.value = finalValue

}

function closeButton(){
    mask.style.visibility = 'hidden';
    button.style.zIndex = '2';
}

button.addEventListener('click', numberSorting);
xButton.addEventListener('click', closeButton);
