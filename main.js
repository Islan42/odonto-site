const btnEnviar = document.getElementById('btn-enviar-email')
const msgContainer = document.querySelector('.msg-container')

btnEnviar.addEventListener('click', () => {
    msgContainer.classList.add('visible')
})

msgContainer.addEventListener('click', () => {
    msgContainer.classList.remove('visible')
})