let todoInput
let errorInfo
let addBtn
let ulList

const main = () => {
    // wywoływanie poniższych funkcji
    prepareDOMEelements()
    prepareDOMEevents()
}

const prepareDOMEelements = () => {
    // pobieranie elementów
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')
}

const prepareDOMEevents = () => {
    // nasłuchiwanie
}

document.addEventListener('DOMContentLoaded', main)