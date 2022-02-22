let todoInput
let errorInfo
let addBtn
let ulList
let newTodo //nowe zadanie

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
    addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
    if(todoInput.value !==''){
        console.log('ok')
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        console.log(newTodo)
        ulList.append(newTodo)
        todoInput.value = ''
        errorInfo.textContent = ''
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}













document.addEventListener('DOMContentLoaded', main)