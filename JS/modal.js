export const modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    Message: document.querySelector('.modal .title span'),
    ButtonClose: document.querySelector('.modal button.close'),

    open() {
        modal.wrapper.classList.add('open')
    },
    close() {
        modal.wrapper.classList.remove('open')
    }
}

modal.ButtonClose.onclick = () => {
    modal.close()
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        modal.close()
    }
}