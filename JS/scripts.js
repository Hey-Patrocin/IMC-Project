import { modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { notNumber, IMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const ShowAlertError = notNumber(weight) || notNumber(height)

    if (ShowAlertError) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = IMC(weight, height)
    DisplayResultMessage(result)
}

function DisplayResultMessage(result) {
    const Message = `Seu IMC é de ${result}`

    modal.Message.innerText = Message
    modal.open()
}