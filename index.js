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

// 1. tworzymy nowy element (li)
// 2. dodać nowy element do ul listy
// 3. funkcja odpalana na click w przycisku add
// 4. przychwytywanie nowej treści z inputa i umieszczenie jej w nowym li
// 5. funkcja nie doda do listy pustego todosa.

const addNewTodo = () => {
	if (todoInput.value !== '') {
		console.log('ok')
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		console.log(newTodo)
		ulList.append(newTodo)
		createToolsArea()
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Wpisz treść zadania'
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

document.addEventListener('DOMContentLoaded', main)







